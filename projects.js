// ─── PROJECTS DATA ────────────────────────────────────────────────────────
// To add a new project: copy one object below, paste it at the end of the
// array, and fill in your details. The page renders them in order.
//
// riskTag options: "High" | "Medium" | "Low"
// recommendation options: "Approve" | "Monitor" | "Reject"

export const PROJECTS = [
  {
    title: "SME Retail Chain Credit Assessment",
    industry: "Retail / SME",
    insight: "Identified covenant breach risk 18 months before default event",
    riskTag: "High",

    summary:
      "Conducted a full credit review of a UK-based retail SME with £4.2m turnover applying for a £750k working capital facility. Analysed three years of audited accounts, management accounts, and cash flow projections amid post-pandemic recovery pressure.",

    outcome:
      "Current ratio declined from 1.4x to 0.9x over 24 months. DSCR fell to 0.87x, below the 1.15x covenant threshold. Gross margin compression of 6.2 percentage points identified as primary driver of deterioration.",

    tools: [
      "Excel modelling",
      "Ratio analysis",
      "Cash flow forecasting",
      "Stress testing",
      "Financial statement analysis",
    ],

    recommendation: "Monitor",

    keyRisks: [
      "DSCR below covenant at 0.87x — breach likely within 2 quarters under base case",
      "Inventory build-up increasing net working capital cycle by 34 days",
      "Single-supplier concentration: 62% of COGS from one vendor",
      "Management accounts show £180k unrecognised creditor liability",
    ],

    reasoning:
      "Facility not recommended in current form. Recommend restructured facility with monthly covenant monitoring, personal guarantee, and 12-month lock-in on discretionary capex. Re-evaluate upon two consecutive quarters of DSCR recovery above 1.10x.",
  },

  {
    title: "Manufacturing Company Debt Refinancing",
    industry: "Manufacturing / Mid-market",
    insight: "Free cash flow strength masked by capitalised R&D — adjusted EBITDA 23% lower",
    riskTag: "Medium",

    summary:
      "Evaluated a £6.8m term loan refinancing for a precision engineering firm serving the aerospace sector. The business presented strong headline EBITDA but required adjusted analysis to strip non-recurring items and capitalised development costs.",

    outcome:
      "Adjusted EBITDA of £1.2m vs. reported £1.56m. Leverage ratio of 5.7x adjusted (vs. 4.4x unadjusted). Interest coverage of 2.1x. Order book visibility of 14 months provided partial offset to leverage concerns.",

    tools: [
      "Excel modelling",
      "Ratio analysis",
      "Cash flow forecasting",
      "Financial statement analysis",
    ],

    recommendation: "Approve",

    keyRisks: [
      "Leverage elevated at 5.7x adjusted EBITDA — above preferred 5.0x threshold",
      "Customer concentration: top 3 clients account for 74% of revenue",
      "Capital-intensive model; maintenance capex of £380k p.a. constrains FCF",
    ],

    reasoning:
      "Recommend approval with conditions: 5.5x leverage covenant step-down schedule, quarterly management accounts, and cross-default clause. Strong order book and long-standing client relationships justify approval above standard leverage limit.",
  },

  {
    title: "Property Developer Bridging Facility",
    industry: "Real Estate / Development",
    insight: "LTV sensitivity analysis revealed 15% stress scenario breaches security cover",
    riskTag: "High",

    summary:
      "Assessed a £1.1m short-term bridging facility for a residential developer completing a 6-unit scheme in the South East. Exit route dependent on full unit sales within 9 months of practical completion.",

    outcome:
      "GDV of £2.4m at base case yields LTV of 45.8%. Under a 15% GDV stress (aligned to 2008 correction magnitude), LTV rises to 53.9% — breaching the 50% security covenant. Loan-to-cost of 68% remains within policy.",

    tools: [
      "Excel modelling",
      "Stress testing",
      "Cash flow forecasting",
      "Ratio analysis",
    ],

    recommendation: "Reject",

    keyRisks: [
      "Single exit route — no refinance fallback if sales velocity disappoints",
      "Developer has one prior project; limited track record at this scale",
      "GDV stress breach at 15% decline — below historical regional stress scenarios",
      "Planning uplift risk on two units still pending discharge of conditions",
    ],

    reasoning:
      "Decline in current structure. Would reconsider with GDV stress covenant reset to 55% LTV, phased drawdown tied to construction milestones, and QS monitoring. Alternatively, require presales of ≥2 units prior to first drawdown.",
  },

  {
    title: "Technology Start-up Venture Debt",
    industry: "Technology / VC-backed",
    insight: "Runway analysis showed 7-month buffer insufficient without Series B confirmation",
    riskTag: "Medium",

    summary:
      "Reviewed a £500k venture debt facility for a SaaS business with ARR of £820k, growing at 85% YoY. Business is pre-profit with VC backing from a Tier 2 fund. Repayment reliant on Series B close within 9 months.",

    outcome:
      "Monthly burn rate of £95k gives 8.4 months of runway at draw. ARR growth trajectory supports a £6–8m Series B valuation range. NRR of 118% indicates strong product-market fit. However, 3 of 5 largest customers are on month-to-month contracts.",

    tools: [
      "Cash flow forecasting",
      "Ratio analysis",
      "Financial statement analysis",
      "Stress testing",
    ],

    recommendation: "Approve",

    keyRisks: [
      "Repayment dependent on Series B close — binary risk event",
      "Month-to-month contracts for 41% of ARR creates churn exposure",
      "Burn rate increasing QoQ as headcount scales ahead of revenue",
    ],

    reasoning:
      "Approve with warrant coverage of 0.5% and Series B milestone covenant (close within 9 months or facility becomes immediately callable). Strong KPI profile and investor syndicate quality partially mitigate pre-profit risk.",
  },

  // ── ADD NEW PROJECTS BELOW ─────────────────────────────────────────────
  // {
  //   title: "",
  //   industry: "",
  //   insight: "",
  //   riskTag: "High" | "Medium" | "Low",
  //   summary: "",
  //   outcome: "",
  //   tools: [],
  //   recommendation: "Approve" | "Monitor" | "Reject",
  //   keyRisks: [],
  //   reasoning: "",
  // },
];
