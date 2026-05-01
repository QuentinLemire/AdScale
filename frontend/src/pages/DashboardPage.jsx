import logo from "../assets/logo.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

function DashboardPage({
  data,
  period,
  setPeriod,
  selectedCompany,
  selectedCampaign,
  setSelectedCampaign,
  chartData,
  scoreEvolution,
  pieData,
  pieColors,
  getTrend,
  sortedCampaigns,
  handleSort,
  getSortIcon,
  getScoreClass
}) {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="AdScale logo" className="logo" />
        </div>
      </header>

      <div className="page-top">
        <h1>Dashboard</h1>

        <div className="company-badge">
          {selectedCompany?.name}
        </div>
      </div>

      <div className="period-tabs">
  <button
    className={period === "7" ? "active" : ""}
    onClick={() => setPeriod("7")}
  >
    7 jours
  </button>

  <button
    className={period === "30" ? "active" : ""}
    onClick={() => setPeriod("30")}
  >
    30 jours
  </button>

  <button
    className={period === "90" ? "active" : ""}
    onClick={() => setPeriod("90")}
  >
    90 jours
  </button>
</div>

      <div className="kpi-container">
        <div className="kpi-card"><h3>Spend</h3><p>€{data.spend}</p></div>
        <div className="kpi-card"><h3>Revenue</h3><p>€{data.revenue}</p></div>
        <div className="kpi-card"><h3>ROAS</h3><p>{data.roas}</p></div>
        <div className="kpi-card"><h3>Conversions</h3><p>{data.conversions}</p></div>
        <div className="kpi-card"><h3>CTR</h3><p>{data.ctr}%</p></div>
        <div className="kpi-card"><h3>CPC</h3><p>€{data.cpc}</p></div>
        <div className="kpi-card"><h3>CPM</h3><p>€{data.cpm}</p></div>
      </div>

      {selectedCampaign && (
        <button className="reset-button" onClick={() => setSelectedCampaign(null)}>
          Voir toutes les campagnes
        </button>
      )}

      <div className="dashboard-grid">
        <section className="panel">
          <h2>Performance</h2>

          <div className="chart-box">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="date" stroke="#9BB7D4" />
                <YAxis stroke="#9BB7D4" />
                <Tooltip />
                <Line type="monotone" dataKey="spend" stroke="#FF6F91" strokeWidth={3} />
                <Line type="monotone" dataKey="conversions" stroke="#9BB7D4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <h2>Évolution du score</h2>

          <div className="chart-box small">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreEvolution}>
                <XAxis dataKey="date" stroke="#9BB7D4" />
                <YAxis stroke="#9BB7D4" domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#4B5D3A" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="panel pie-panel">
          <h2>Répartition du spend</h2>

          <div className="pie-box">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <p className="trend">
        <strong>Tendance :</strong> {getTrend()}
      </p>

      <table className="campaign-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Nom{getSortIcon("name")}</th>
            <th onClick={() => handleSort("spend")}>Spend{getSortIcon("spend")}</th>
            <th onClick={() => handleSort("roas")}>ROAS{getSortIcon("roas")}</th>
            <th onClick={() => handleSort("conversions")}>Conversions{getSortIcon("conversions")}</th>
            <th onClick={() => handleSort("score")}>Score{getSortIcon("score")}</th>
          </tr>
        </thead>

        <tbody>
          {sortedCampaigns.map((c, index) => (
            <tr key={index} onClick={() => setSelectedCampaign(c)}>
              <td>{c.name}</td>
              <td>€{c.spend}</td>
              <td>{c.roas}</td>
              <td>{c.conversions}</td>
              <td className={getScoreClass(c.score)}>{c.score}/100</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCampaign && (
        <div className="campaign-detail">
          <h3>Détail de la campagne</h3>

          <div className="detail-grid">
            <p><strong>Nom :</strong> {selectedCampaign.name}</p>
            <p><strong>Statut :</strong> {selectedCampaign.status}</p>
            <p><strong>Objectif :</strong> {selectedCampaign.objective}</p>
            <p><strong>Budget :</strong> €{selectedCampaign.budget}</p>
            <p><strong>Spend :</strong> €{selectedCampaign.spend}</p>
            <p><strong>ROAS :</strong> {selectedCampaign.roas}</p>
            <p><strong>Conversions :</strong> {selectedCampaign.conversions}</p>
            <p><strong>Impressions :</strong> {selectedCampaign.impressions}</p>
            <p><strong>Clics :</strong> {selectedCampaign.clicks}</p>
            <p><strong>CTR :</strong> {selectedCampaign.ctr}%</p>
            <p><strong>CPC :</strong> €{selectedCampaign.cpc}</p>
            <p><strong>CPM :</strong> €{selectedCampaign.cpm}</p>
            <p>
              <strong>Score :</strong>{" "}
              <span className={getScoreClass(selectedCampaign.score)}>
                {selectedCampaign.score}/100
              </span>
            </p>
          </div>

          <div className="recommendation">
            <strong>Recommandation :</strong>
            <p>{selectedCampaign.recommendation}</p>
          </div>

          {selectedCampaign.alerts && selectedCampaign.alerts.length > 0 && (
            <div className="alerts">
              <strong>Alertes :</strong>
              <ul>
                {selectedCampaign.alerts.map((alert, index) => (
                  <li key={index}>🚨 {alert}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;