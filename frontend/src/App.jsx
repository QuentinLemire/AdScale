import { useEffect, useState } from "react";
import favicon from "./assets/favicon.png";
import "./App.css";

import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import CampaignsPage from "./pages/CampaignsPage";
import SettingsPage from "./pages/SettingsPage";

import { companies as mockCompanies } from "./data/mockCompanies";
import {
  getKpiData,
  getInsightsData,
  getCampaigns,
  getCampaignInsights,
  getCampaignKpi,
  getScoreEvolution
} from "./data/mockMetaData";

function App() {
  const [data, setData] = useState({});
  const [chartData, setChartData] = useState([]);
  const [scoreEvolution, setScoreEvolution] = useState([]);
  const [period, setPeriod] = useState("7");
  const [campaigns, setCampaigns] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");

  const sortedCampaigns = [...campaigns].sort((a, b) => {
    if (!sortField) return 0;

    if (sortField === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }

    return sortOrder === "asc"
      ? a[sortField] - b[sortField]
      : b[sortField] - a[sortField];
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return "";
    return sortOrder === "asc" ? " ↑" : " ↓";
  };

  const getScoreClass = (score) => {
    if (score >= 80) return "score-good";
    if (score >= 50) return "score-medium";
    return "score-low";
  };

  const getTrend = () => {
    if (!scoreEvolution || scoreEvolution.length < 2) return "";

    const first = scoreEvolution[0].score;
    const last = scoreEvolution[scoreEvolution.length - 1].score;

    if (last > first) return "📈 En amélioration";
    if (last < first) return "📉 En baisse";
    return "➡️ Stable";
  };

  const updateCampaignBudget = (campaignName, newBudget) => {
    setCampaigns(prev =>
      prev.map(c =>
        c.name === campaignName
          ? { ...c, budget: Number(newBudget) }
          : c
      )
    );
  };

  const toggleCampaignStatus = (campaignName) => {
    setCampaigns(prev =>
      prev.map(c =>
        c.name === campaignName
          ? {
              ...c,
              status: c.status === "Active" ? "Pause" : "Active"
            }
          : c
      )
    );
  };

  useEffect(() => {
    setCompanies(mockCompanies);
    setSelectedCompany(mockCompanies[0]);
  }, []);

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = favicon + "?v=" + Date.now();
  }, []);

  useEffect(() => {
    if (!selectedCompany) return;

    const companyId = selectedCompany.id;

    if (selectedCampaign) {
      setData(getCampaignKpi(selectedCampaign.name, companyId, period));
      setChartData(getCampaignInsights(selectedCampaign.name, companyId, period));
      setScoreEvolution(getScoreEvolution(selectedCampaign.name, companyId, period));
    } else {
      setData(getKpiData(period, companyId));
      setChartData(getInsightsData(period, companyId));
      setScoreEvolution(getScoreEvolution(null, companyId, period));
    }

    setCampaigns(getCampaigns(companyId, period));
  }, [period, selectedCompany, selectedCampaign]);

  const pieData = campaigns.map(c => ({
    name: c.name,
    value: c.spend
  }));

  const pieColors = ["#164A2F", "#E95A80", "#1F2A24", "#9BB7D4"];

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        companies={companies}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        setSelectedCampaign={setSelectedCampaign}
      />

      <main className="dashboard">
        {activePage === "dashboard" && (
          <DashboardPage
            data={data}
            period={period}
            setPeriod={setPeriod}
            selectedCompany={selectedCompany}
            selectedCampaign={selectedCampaign}
            setSelectedCampaign={setSelectedCampaign}
            chartData={chartData}
            scoreEvolution={scoreEvolution}
            pieData={pieData}
            pieColors={pieColors}
            getTrend={getTrend}
            sortedCampaigns={sortedCampaigns}
            handleSort={handleSort}
            getSortIcon={getSortIcon}
            getScoreClass={getScoreClass}
          />
        )}

        {activePage === "campaigns" && (
          <CampaignsPage
            campaigns={campaigns}
            selectedCompany={selectedCompany}
            getScoreClass={getScoreClass}
            updateCampaignBudget={updateCampaignBudget}
            toggleCampaignStatus={toggleCampaignStatus}
            setSelectedCampaign={setSelectedCampaign}
            setActivePage={setActivePage}
          />
        )}

        {activePage === "settings" && <SettingsPage />}
      </main>
    </div>
  );
}

export default App;