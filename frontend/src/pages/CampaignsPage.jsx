import { useState } from "react";
import logo from "../assets/logo.png";

function CampaignsPage({
  campaigns,
  selectedCompany,
  getScoreClass,
  updateCampaignBudget,
  toggleCampaignStatus,
  setSelectedCampaign,
  setActivePage
}) {
  const [budgetModal, setBudgetModal] = useState(null);
  const [newBudget, setNewBudget] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredCampaigns = campaigns.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && c.status === "Active") ||
      (statusFilter === "pause" && c.status !== "Active") ||
      (statusFilter === "low-score" && c.score < 50);

    return matchSearch && matchStatus;
  });

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="AdScale logo" className="logo" />
        </div>
      </header>

      {/* TITRE */}
      <div className="page-top">
        <h1>Campagnes</h1>
        <div className="company-badge">{selectedCompany?.name}</div>
      </div>

      {/* TOOLBAR */}
      <div className="campaign-toolbar">
        <input
          type="text"
          placeholder="Rechercher une campagne..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="campaign-filters">
          <button
            className={statusFilter === "all" ? "active" : ""}
            onClick={() => setStatusFilter("all")}
          >
            Toutes
          </button>

          <button
            className={statusFilter === "active" ? "active" : ""}
            onClick={() => setStatusFilter("active")}
          >
            Actives
          </button>

          <button
            className={statusFilter === "pause" ? "active" : ""}
            onClick={() => setStatusFilter("pause")}
          >
            En pause
          </button>

          <button
            className={statusFilter === "low-score" ? "active" : ""}
            onClick={() => setStatusFilter("low-score")}
          >
            Score faible
          </button>
        </div>
      </div>

      {/* CARTES */}
      <div className="campaign-cards-grid">
        {filteredCampaigns.map((c, index) => (
          <div className="campaign-card" key={index}>
            <div className="campaign-card-header">
              <div>
                <h2>{c.name}</h2>
                <p>🎯 {c.objective}</p>
              </div>

              <span className={`campaign-status ${c.status}`}>
                {c.status}
              </span>
            </div>

            <div className="campaign-card-stats">
              <div>
                <span>Budget</span>
                <strong>€{c.budget}</strong>
              </div>

              <div>
                <span>Spend</span>
                <strong>€{c.spend}</strong>
              </div>

              <div>
                <span>ROAS</span>
                <strong>{c.roas}</strong>
              </div>

              <div>
                <span>Score</span>
                <strong className={getScoreClass(c.score)}>
                  {c.score}/100
                </strong>
              </div>
            </div>

            {/* ALERTES */}
            {c.alerts && c.alerts.length > 0 && (
              <div className="campaign-card-alerts">
                {c.alerts.map((alert, i) => (
                  <span key={i}>🚨 {alert}</span>
                ))}
              </div>
            )}

            {/* RECO */}
            {c.recommendation && (
              <div className="campaign-card-recommendation">
                <strong>Recommandation :</strong>
                <p>{c.recommendation}</p>
              </div>
            )}

            {/* ACTIONS */}
            <div className="campaign-card-actions">
              <button
                className="table-button secondary"
                onClick={() => {
                  setSelectedCampaign(c);
                  setActivePage("dashboard");
                }}
              >
                Voir détail
              </button>

              <button
                className="table-button"
                onClick={() => {
                  setBudgetModal(c);
                  setNewBudget(c.budget);
                }}
              >
                Modifier budget
              </button>

              <button
                className="table-button danger"
                onClick={() => toggleCampaignStatus(c.name)}
              >
                {c.status === "Active" ? "Mettre en pause" : "Activer"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredCampaigns.length === 0 && (
        <p className="empty-state">Aucune campagne trouvée.</p>
      )}

      {/* MODAL */}
      {budgetModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Modifier le budget</h2>
            <p>{budgetModal.name}</p>

            <input
              type="number"
              min="1"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              placeholder="Nouveau budget"
            />

            <div className="modal-actions">
              <button
                className="table-button"
                onClick={() => {
                  const budgetValue = Number(newBudget);

                  if (budgetValue > 0) {
                    updateCampaignBudget(budgetModal.name, budgetValue);
                    setBudgetModal(null);
                    setNewBudget("");
                  }
                }}
              >
                Valider
              </button>

              <button
                className="table-button danger"
                onClick={() => {
                  setBudgetModal(null);
                  setNewBudget("");
                }}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CampaignsPage;