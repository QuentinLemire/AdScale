const mockDataByCompany = {
  "restaurant-a": {
    campaigns: [
      {
        name: "Acquisition",
        status: "Active",
        objective: "Conversions",
        budget: 800,
        insights: {
          "7": [
            { date: "Lun", spend: 80, conversions: 6, roas: 3.2, ctr: 2.5, cpc: 0.42 },
            { date: "Mar", spend: 90, conversions: 7, roas: 3.3, ctr: 2.6, cpc: 0.40 },
            { date: "Mer", spend: 70, conversions: 5, roas: 3.1, ctr: 2.4, cpc: 0.45 },
            { date: "Jeu", spend: 100, conversions: 8, roas: 3.4, ctr: 2.7, cpc: 0.39 },
            { date: "Ven", spend: 85, conversions: 6, roas: 3.2, ctr: 2.5, cpc: 0.42 },
            { date: "Sam", spend: 60, conversions: 4, roas: 3.0, ctr: 2.3, cpc: 0.46 },
            { date: "Dim", spend: 75, conversions: 5, roas: 3.1, ctr: 2.4, cpc: 0.44 }
          ],
          "30": [
            { date: "S1", spend: 420, conversions: 30, roas: 3.1, ctr: 2.4, cpc: 0.45 },
            { date: "S2", spend: 500, conversions: 36, roas: 3.4, ctr: 2.7, cpc: 0.40 },
            { date: "S3", spend: 380, conversions: 26, roas: 3.0, ctr: 2.3, cpc: 0.48 },
            { date: "S4", spend: 560, conversions: 42, roas: 3.5, ctr: 2.8, cpc: 0.38 }
          ],
          "90": [
            { date: "M1", spend: 1300, conversions: 92, roas: 3.2, ctr: 2.5, cpc: 0.43 },
            { date: "M2", spend: 1600, conversions: 120, roas: 3.6, ctr: 2.9, cpc: 0.36 },
            { date: "M3", spend: 1400, conversions: 98, roas: 3.3, ctr: 2.6, cpc: 0.41 }
          ]
        }
      },
      {
        name: "Trafic",
        status: "Active",
        objective: "Trafic",
        budget: 600,
        insights: {
          "7": [
            { date: "Lun", spend: 200, conversions: 2, roas: 1.2, ctr: 0.7, cpc: 2.5 },
            { date: "Mar", spend: 210, conversions: 3, roas: 1.1, ctr: 0.8, cpc: 2.3 },
            { date: "Mer", spend: 180, conversions: 2, roas: 1.0, ctr: 0.6, cpc: 2.7 },
            { date: "Jeu", spend: 220, conversions: 3, roas: 1.2, ctr: 0.8, cpc: 2.4 },
            { date: "Ven", spend: 200, conversions: 2, roas: 1.1, ctr: 0.7, cpc: 2.6 },
            { date: "Sam", spend: 150, conversions: 1, roas: 1.0, ctr: 0.5, cpc: 2.9 },
            { date: "Dim", spend: 170, conversions: 2, roas: 1.1, ctr: 0.6, cpc: 2.8 }
          ],
          "30": [
            { date: "S1", spend: 900, conversions: 9, roas: 1.1, ctr: 0.7, cpc: 2.6 },
            { date: "S2", spend: 1100, conversions: 13, roas: 1.2, ctr: 0.8, cpc: 2.3 },
            { date: "S3", spend: 780, conversions: 7, roas: 0.9, ctr: 0.5, cpc: 3.0 },
            { date: "S4", spend: 1250, conversions: 15, roas: 1.3, ctr: 0.9, cpc: 2.1 }
          ],
          "90": [
            { date: "M1", spend: 2700, conversions: 27, roas: 1.1, ctr: 0.7, cpc: 2.6 },
            { date: "M2", spend: 3200, conversions: 36, roas: 1.3, ctr: 0.9, cpc: 2.2 },
            { date: "M3", spend: 2900, conversions: 25, roas: 1.0, ctr: 0.6, cpc: 2.8 }
          ]
        }
      },
      {
        name: "Retargeting",
        status: "Active",
        objective: "Ventes",
        budget: 900,
        insights: {
          "7": [
            { date: "Lun", spend: 60, conversions: 10, roas: 5.5, ctr: 5.0, cpc: 0.15 },
            { date: "Mar", spend: 70, conversions: 12, roas: 5.8, ctr: 5.3, cpc: 0.14 },
            { date: "Mer", spend: 50, conversions: 9, roas: 5.3, ctr: 4.8, cpc: 0.16 },
            { date: "Jeu", spend: 80, conversions: 14, roas: 6.0, ctr: 5.5, cpc: 0.13 },
            { date: "Ven", spend: 75, conversions: 13, roas: 5.9, ctr: 5.4, cpc: 0.13 },
            { date: "Sam", spend: 65, conversions: 11, roas: 5.6, ctr: 5.1, cpc: 0.14 },
            { date: "Dim", spend: 70, conversions: 12, roas: 5.7, ctr: 5.2, cpc: 0.14 }
          ],
          "30": [
            { date: "S1", spend: 300, conversions: 52, roas: 5.5, ctr: 5.0, cpc: 0.16 },
            { date: "S2", spend: 360, conversions: 66, roas: 6.0, ctr: 5.6, cpc: 0.13 },
            { date: "S3", spend: 280, conversions: 48, roas: 5.3, ctr: 4.8, cpc: 0.17 },
            { date: "S4", spend: 420, conversions: 78, roas: 6.2, ctr: 5.8, cpc: 0.12 }
          ],
          "90": [
            { date: "M1", spend: 900, conversions: 160, roas: 5.5, ctr: 5.0, cpc: 0.16 },
            { date: "M2", spend: 1150, conversions: 220, roas: 6.3, ctr: 5.9, cpc: 0.12 },
            { date: "M3", spend: 1000, conversions: 180, roas: 5.8, ctr: 5.4, cpc: 0.14 }
          ]
        }
      }
    ]
  },

  "salle-sport-b": {
    campaigns: [
      {
        name: "Abonnement Été",
        status: "Active",
        objective: "Leads",
        budget: 600,
        insights: {
          "7": [
            { date: "Lun", spend: 120, conversions: 6, roas: 2.6, ctr: 2.3, cpc: 0.49 },
            { date: "Mar", spend: 150, conversions: 8, roas: 2.8, ctr: 2.5, cpc: 0.45 },
            { date: "Mer", spend: 110, conversions: 5, roas: 2.3, ctr: 2.0, cpc: 0.60 },
            { date: "Jeu", spend: 180, conversions: 10, roas: 3.0, ctr: 2.7, cpc: 0.40 },
            { date: "Ven", spend: 140, conversions: 7, roas: 2.5, ctr: 2.2, cpc: 0.52 },
            { date: "Sam", spend: 90, conversions: 4, roas: 2.1, ctr: 1.8, cpc: 0.72 },
            { date: "Dim", spend: 100, conversions: 6, roas: 2.4, ctr: 2.1, cpc: 0.58 }
          ],
          "30": [
            { date: "S1", spend: 700, conversions: 30, roas: 2.4, ctr: 2.0, cpc: 0.62 },
            { date: "S2", spend: 900, conversions: 38, roas: 2.8, ctr: 2.5, cpc: 0.45 },
            { date: "S3", spend: 650, conversions: 28, roas: 2.3, ctr: 1.9, cpc: 0.66 },
            { date: "S4", spend: 850, conversions: 36, roas: 2.9, ctr: 2.6, cpc: 0.43 }
          ],
          "90": [
            { date: "M1", spend: 2200, conversions: 95, roas: 2.5, ctr: 2.2, cpc: 0.55 },
            { date: "M2", spend: 2600, conversions: 120, roas: 3.0, ctr: 2.7, cpc: 0.39 },
            { date: "M3", spend: 2400, conversions: 105, roas: 2.7, ctr: 2.4, cpc: 0.48 }
          ]
        }
      },
      {
        name: "Essai Gratuit",
        status: "Active",
        objective: "Trafic",
        budget: 450,
        insights: {
          "7": [
            { date: "Lun", spend: 80, conversions: 2, roas: 1.5, ctr: 1.5, cpc: 1.2 },
            { date: "Mar", spend: 90, conversions: 3, roas: 1.7, ctr: 1.6, cpc: 1.1 },
            { date: "Mer", spend: 70, conversions: 1, roas: 1.2, ctr: 1.2, cpc: 1.4 },
            { date: "Jeu", spend: 110, conversions: 4, roas: 1.9, ctr: 1.8, cpc: 0.95 },
            { date: "Ven", spend: 95, conversions: 2, roas: 1.4, ctr: 1.3, cpc: 1.3 },
            { date: "Sam", spend: 60, conversions: 1, roas: 1.1, ctr: 1.0, cpc: 1.6 },
            { date: "Dim", spend: 70, conversions: 2, roas: 1.3, ctr: 1.1, cpc: 1.5 }
          ],
          "30": [
            { date: "S1", spend: 360, conversions: 9, roas: 1.4, ctr: 1.3, cpc: 1.3 },
            { date: "S2", spend: 420, conversions: 13, roas: 1.8, ctr: 1.7, cpc: 1.0 },
            { date: "S3", spend: 300, conversions: 6, roas: 1.1, ctr: 1.0, cpc: 1.7 },
            { date: "S4", spend: 460, conversions: 15, roas: 1.9, ctr: 1.8, cpc: 0.95 }
          ],
          "90": [
            { date: "M1", spend: 1050, conversions: 28, roas: 1.5, ctr: 1.4, cpc: 1.2 },
            { date: "M2", spend: 1300, conversions: 42, roas: 1.9, ctr: 1.8, cpc: 0.95 },
            { date: "M3", spend: 1150, conversions: 30, roas: 1.4, ctr: 1.2, cpc: 1.4 }
          ]
        }
      }
    ]
  },

  "boutique-c": {
    campaigns: [
      {
        name: "Collection Printemps",
        status: "Active",
        objective: "Ventes",
        budget: 1000,
        insights: {
          "7": [
            { date: "Lun", spend: 250, conversions: 18, roas: 4.2, ctr: 3.3, cpc: 0.35 },
            { date: "Mar", spend: 270, conversions: 20, roas: 4.4, ctr: 3.5, cpc: 0.33 },
            { date: "Mer", spend: 210, conversions: 15, roas: 3.9, ctr: 3.0, cpc: 0.40 },
            { date: "Jeu", spend: 300, conversions: 23, roas: 4.6, ctr: 3.7, cpc: 0.30 },
            { date: "Ven", spend: 260, conversions: 19, roas: 4.3, ctr: 3.4, cpc: 0.34 },
            { date: "Sam", spend: 170, conversions: 12, roas: 3.8, ctr: 2.9, cpc: 0.42 },
            { date: "Dim", spend: 190, conversions: 13, roas: 4.0, ctr: 3.1, cpc: 0.38 }
          ],
          "30": [
            { date: "S1", spend: 1100, conversions: 80, roas: 4.1, ctr: 3.2, cpc: 0.37 },
            { date: "S2", spend: 1300, conversions: 100, roas: 4.7, ctr: 3.8, cpc: 0.29 },
            { date: "S3", spend: 900, conversions: 65, roas: 3.7, ctr: 2.8, cpc: 0.45 },
            { date: "S4", spend: 1400, conversions: 110, roas: 4.8, ctr: 3.9, cpc: 0.28 }
          ],
          "90": [
            { date: "M1", spend: 3500, conversions: 260, roas: 4.2, ctr: 3.3, cpc: 0.35 },
            { date: "M2", spend: 4200, conversions: 340, roas: 4.9, ctr: 4.0, cpc: 0.27 },
            { date: "M3", spend: 3900, conversions: 300, roas: 4.5, ctr: 3.6, cpc: 0.31 }
          ]
        }
      }
    ]
  }
};

const getCompanyData = (companyId) => {
  return mockDataByCompany[companyId] || mockDataByCompany["restaurant-a"];
};

const calculateScore = ({ roas, ctr, cpc }) => {
  let score = 0;

  if (roas >= 4) score += 50;
  else if (roas >= 3) score += 40;
  else if (roas >= 2) score += 25;
  else score += 10;

  if (ctr >= 3) score += 25;
  else if (ctr >= 2) score += 15;
  else score += 5;

  if (cpc <= 0.3) score += 25;
  else if (cpc <= 0.6) score += 15;
  else score += 5;

  return score;
};

const average = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;

const generateRecommendation = (campaign) => {
  const score = campaign.score;

  if (campaign.cpc > 1 && campaign.ctr < 2) {
    return "CPC élevé + CTR faible : problème probable de créa ou de ciblage.";
  }

  if (campaign.roas >= 4 && campaign.ctr >= 3) {
    return "Très bonne campagne : elle peut être priorisée et progressivement scalée.";
  }

  if (score >= 80) {
    return "Campagne performante : augmenter progressivement le budget.";
  }

  if (score >= 50) {
    return "Campagne correcte : optimiser les audiences ou les créas.";
  }

  return "Campagne faible : revoir l’offre, le ciblage et les visuels.";
};

const generateAlerts = (campaign) => {
  const alerts = [];

  if (campaign.cpc > 1) alerts.push("CPC trop élevé");
  if (campaign.ctr < 2) alerts.push("CTR faible");
  if (campaign.roas < 2) alerts.push("ROAS insuffisant");

  return alerts;
};

const summarizeCampaign = (campaign, period = "7") => {
  const data = campaign.insights[period] || campaign.insights["7"];

  const spend = data.reduce((sum, day) => sum + day.spend, 0);
  const conversions = data.reduce((sum, day) => sum + day.conversions, 0);

  // CA calculé automatiquement
  const revenue = data.reduce((sum, day) => sum + (day.spend * day.roas), 0);

  // ROAS global recalculé correctement
  const roas = spend > 0 ? revenue / spend : 0;

  const ctr = average(data.map(day => day.ctr));
  const cpc = average(data.map(day => day.cpc));
  const cpm = average(data.map(day => day.spend)) / 10;

  const score = calculateScore({ roas, ctr, cpc });

  const summarized = {
    name: campaign.name,
    status: campaign.status,
    objective: campaign.objective,
    budget: campaign.budget,

    spend: Math.round(spend),
    revenue: Math.round(revenue),
    conversions: Math.round(conversions),

    impressions: Math.round(spend * 100),
    clicks: Math.round(conversions * 35),

    roas: Number(roas.toFixed(2)),
    ctr: Number(ctr.toFixed(2)),
    cpc: Number(cpc.toFixed(2)),
    cpm: Number(cpm.toFixed(2)),

    score
  };

  return {
    ...summarized,
    recommendation: generateRecommendation(summarized),
    alerts: generateAlerts(summarized)
  };
};

const getCampaigns = (companyId, period = "7") => {
  const company = getCompanyData(companyId);
  return company.campaigns.map(campaign => summarizeCampaign(campaign, period));
};

const getCampaignKpi = (name, companyId, period = "7") => {
  const campaign = getCompanyData(companyId).campaigns.find(c => c.name === name);

  if (!campaign) {
    return {
      spend: 0,
      revenue: 0,
      roas: 0,
      conversions: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0
    };
  }

  const summary = summarizeCampaign(campaign, period);

  return {
    spend: summary.spend,
    revenue: summary.revenue,
    roas: summary.roas,
    conversions: summary.conversions,
    ctr: summary.ctr,
    cpc: summary.cpc,
    cpm: summary.cpm
  };
};

const getKpiData = (period = "7", companyId) => {
  const campaigns = getCampaigns(companyId, period);

  const totalSpend = campaigns.reduce((sum, c) => sum + c.spend, 0);
  const totalRevenue = campaigns.reduce((sum, c) => sum + c.revenue, 0);
  const totalConversions = campaigns.reduce((sum, c) => sum + c.conversions, 0);

  return {
    spend: Math.round(totalSpend),
    revenue: Math.round(totalRevenue),
    conversions: Math.round(totalConversions),

    // ROAS global correct
    roas: totalSpend > 0
      ? Number((totalRevenue / totalSpend).toFixed(2))
      : 0,

    // Moyennes sur les ratios/coûts
    ctr: Number(average(campaigns.map(c => c.ctr)).toFixed(2)),
    cpc: Number(average(campaigns.map(c => c.cpc)).toFixed(2)),
    cpm: Number(average(campaigns.map(c => c.cpm)).toFixed(2))
  };
};

const getInsightsData = (period = "7", companyId) => {
  const company = getCompanyData(companyId);
  const campaigns = company.campaigns;
  const reference = campaigns[0].insights[period] || campaigns[0].insights["7"];

  return reference.map((day, index) => {
    const rows = campaigns.map(campaign => {
      const data = campaign.insights[period] || campaign.insights["7"];
      return data[index];
    });

    return {
  date: day.date,
  spend: Math.round(rows.reduce((sum, row) => sum + row.spend, 0)),
  conversions: Math.round(rows.reduce((sum, row) => sum + row.conversions, 0))
};
  });
};

const getCampaignInsights = (name, companyId, period = "7") => {
  const campaign = getCompanyData(companyId).campaigns.find(c => c.name === name);

  if (!campaign) {
    return getInsightsData(period, companyId);
  }

  return campaign.insights[period] || campaign.insights["7"];
};

const getScoreEvolution = (name, companyId, period = "7") => {
  if (name) {
    return getCampaignInsights(name, companyId, period).map(day => ({
      date: day.date,
      score: calculateScore(day)
    }));
  }

  const company = getCompanyData(companyId);
  const reference = company.campaigns[0].insights[period] || company.campaigns[0].insights["7"];

  return reference.map((day, index) => {
    const scores = company.campaigns.map(campaign => {
      const data = campaign.insights[period] || campaign.insights["7"];
      return calculateScore(data[index]);
    });

    return {
      date: day.date,
      score: Math.round(average(scores))
    };
  });
};

export {
  getKpiData,
  getInsightsData,
  getCampaigns,
  getCampaignInsights,
  getCampaignKpi,
  getScoreEvolution
};