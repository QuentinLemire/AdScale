# 🚀 AdScale — Data. Ads. Growth.

AdScale est un **dashboard SaaS de simulation marketing** permettant d’analyser et optimiser des campagnes publicitaires (type Meta Ads).

👉 Objectif : fournir une **vision claire, rapide et actionnable** des performances marketing.

🌐 **Voir le site en ligne :**  
https://ad-scale-nine.vercel.app

---

# 📊 Fonctionnalités

### Dashboard global
- KPIs clés : Spend, Revenue, ROAS, Conversions, CTR, CPC, CPM
- Graphique de performance (dépenses & conversions)
- Évolution du score marketing
- Répartition du budget par campagne

### Analyse des campagnes
- Liste des campagnes avec tri dynamique
- Score de performance (/100)
- Recommandations automatiques
- Alertes (CPC élevé, CTR faible, ROAS insuffisant)

### Gestion des campagnes
- Modification du budget
- Mise en pause / activation
- Filtrage et recherche avancée

### Expérience utilisateur
- Interface moderne type SaaS
- Navigation fluide entre Dashboard / Campagnes / Paramètres
- Design responsive

---

# 🧠 Logique métier

Le projet repose sur une **simulation de données Meta Ads** :

- Calcul du **chiffre d’affaires (Revenue)** via ROAS
- Calcul du **ROAS global réel** (Revenue / Spend)
- Différenciation entre :
  - métriques **totales** (Spend, Conversions, Revenue)
  - métriques **moyennes** (CTR, CPC, CPM)

👉 Un **score marketing** est généré automatiquement selon :
- ROAS
- CTR
- CPC

---

# 🛠️ Stack technique

### Frontend
- React (Vite)
- Recharts (data visualisation)
- CSS custom (design system)

### Backend (simulation)
- Node.js
- Express
- Mock data structurée (simulation API Meta)

### Déploiement
- Vercel

---

# 📁 Structure du projet

AdScale/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/ (non utilisé en prod)
└── README.md

---

# ⚙️ Installation en local

```bash
git clone https://github.com/QuentinLemire/AdScale.git
cd AdScale/frontend
npm install
npm run dev

# 🎯 Installation en local

Ce projet a été conçu pour :

* Simuler un outil SaaS marketing
* Comprendre la logique des KPIs publicitaires
* Développer une interface data-driven
* Créer un projet valorisable en portfolio

🚀 Améliorations futures

* Connexion réelle à l’API Meta Ads
* Ajout d’IA pour recommandations automatiques
* Export des données (PDF / CSV)
* Multi-comptes utilisateurs
