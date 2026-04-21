// ─── SKILLS DATA ──────────────────────────────────────────────────────────
// Organised into category groups. Each group renders as its own card column.
// To add a new category: add a new key to the object with an array of skills.
// To add a skill: add a { name, detail } object to the relevant array.

export const SKILLS = {
  Technical: [
    {
      name: "Excel",
      detail: "Financial modelling, DCF, LBO templates, scenario analysis",
    },
    {
      name: "Python",
      detail: "Pandas for data cleaning, basic financial analysis scripts",
    },
    {
      name: "SQL",
      detail: "Data extraction and aggregation for portfolio reporting",
    },
    {
      name: "Power BI",
      detail: "Dashboard creation for credit portfolio monitoring",
    },
    // Add more technical skills here
  ],

  "Credit Analysis": [
    {
      name: "Credit risk analysis",
      detail: "Assessing probability of default and loss given default",
    },
    {
      name: "Financial statement review",
      detail: "P&L, balance sheet, cash flow — 3-statement integrated model",
    },
    {
      name: "Ratio analysis",
      detail: "Leverage, coverage, liquidity, profitability ratios",
    },
    {
      name: "Cash flow analysis",
      detail: "Free cash flow, DSCR, working capital cycle analysis",
    },
    {
      name: "Covenant analysis",
      detail: "Setting, monitoring, and stress testing financial covenants",
    },
    // Add more credit skills here
  ],

  Analytical: [
    {
      name: "Scenario & stress testing",
      detail: "Base / downside / severe stress modelling",
    },
    {
      name: "Risk assessment",
      detail: "Qualitative and quantitative risk identification and sizing",
    },
    {
      name: "Decision-making",
      detail: "Structuring recommendations under uncertainty and time pressure",
    },
    {
      name: "Report writing",
      detail: "Credit papers, investment memos, risk summaries",
    },
    // Add more analytical skills here
  ],

  // ── ADD NEW SKILL CATEGORIES BELOW ────────────────────────────────────
  // "New Category": [
  //   { name: "", detail: "" },
  // ],
};
