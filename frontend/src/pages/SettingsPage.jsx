import logo from "../assets/logo.png";

function SettingsPage() {
  const handleConnectMeta = () => {
    // 🔥 Pour plus tard (API Meta)
    window.open("http://localhost:3000/api/meta/login", "_blank");
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="AdScale logo" className="logo" />
        </div>
      </header>

      {/* TOP */}
      <div className="page-top">
        <h1>Paramètres</h1>
        <div className="company-badge">AdScale</div>
      </div>

      <div className="settings-grid">

        {/* COMPTE */}
        <section className="settings-card">
          <h2>Compte AdScale</h2>
          <p>Informations générales du compte utilisateur.</p>

          <div className="settings-row">
            <span>Nom</span>
            <strong>Utilisateur test</strong>
          </div>

          <div className="settings-row">
            <span>Email</span>
            <strong>demo@adscale.fr</strong>
          </div>
        </section>

        {/* META */}
        <section className="settings-card">
          <h2>Connexion Meta Ads</h2>
          <p>Connectez un compte Meta pour récupérer les données publicitaires.</p>

          <div className="connection-status">
            <span className="status-dot disconnected"></span>
            <strong>Non connecté</strong>
          </div>

          <button className="table-button" onClick={handleConnectMeta}>
            Connecter Meta
          </button>
        </section>

        {/* PREFERENCES */}
        <section className="settings-card">
          <h2>Préférences</h2>
          <p>Personnalisation de l’affichage du dashboard.</p>

          <div className="settings-row">
            <span>Devise</span>
            <strong>EUR (€)</strong>
          </div>

          <div className="settings-row">
            <span>Période par défaut</span>
            <strong>7 jours</strong>
          </div>
        </section>

        {/* DANGER ZONE */}
        <section className="settings-card danger-zone">
          <h2>Zone sensible</h2>
          <p>Actions importantes liées au compte.</p>

          <button className="table-button danger">
            Déconnecter le compte
          </button>
        </section>

      </div>
    </>
  );
}

export default SettingsPage;