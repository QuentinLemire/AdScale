import { FaChartLine, FaBullhorn, FaBuilding, FaCog } from "react-icons/fa";

function Sidebar({
  activePage,
  setActivePage,
  companies,
  selectedCompany,
  setSelectedCompany,
  setSelectedCampaign
}) {
  return (
    <aside className="sidebar">
      <h2 className="logo-sidebar">ADSCALE</h2>

      <nav>
        {/* MENU PRINCIPAL */}
        <ul>
          <li
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            <FaChartLine /> Dashboard
          </li>

          <li
            className={activePage === "campaigns" ? "active" : ""}
            onClick={() => setActivePage("campaigns")}
          >
            <FaBullhorn /> Campagnes
          </li>
        </ul>

        {/* SOCIÉTÉS */}
        <div className="sidebar-section">
          <p className="sidebar-title">Sociétés</p>

          {companies.map((company) => (
            <div
              key={company.id}
              className={`sidebar-company ${
                selectedCompany?.id === company.id ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCompany(company);
                setSelectedCampaign(null);
              }}
            >
              {/* 🔥 AJOUT LOGO / EMOJI */}
              <span className="company-icon">
                {company.logo || <FaBuilding />}
              </span>

              <span className="company-name">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* SETTINGS */}
        <ul>
          <li
            className={activePage === "settings" ? "active" : ""}
            onClick={() => setActivePage("settings")}
          >
            <FaCog /> Paramètres
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;