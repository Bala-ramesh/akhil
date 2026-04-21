// ─── BLOG POSTS DATA ──────────────────────────────────────────────────────
// Each post expands inline in the Blog section.
// To add a post: copy the template at the bottom and fill in your content.
// Posts render in the order they appear in this array.

export const BLOGS = [
  {
    title: "Rising Corporate Defaults: What the Credit Cycle Is Telling Us",

    context:
      "Global corporate default rates climbed to a post-GFC high in 2024, driven by the lagged effect of rapid rate rises on leveraged balance sheets. For credit analysts, this cycle provides a live case study in how monetary tightening flows through to borrower stress.",

    analysis:
      "The transmission mechanism from rate rise to default is not immediate — typically 18–30 months. Businesses with floating-rate debt on 3–5 year terms signed at near-zero rates in 2020–21 faced step-changes in debt service costs from 2023 onward. DSCR compression was most severe in rate-sensitive sectors: leveraged buyouts, commercial real estate, and consumer discretionary. A key analytical lesson: covenant headroom analysis at origination should include a +300bps rate stress, which many 2021-vintage deals did not model.",

    implications:
      "Credit analysts must rebuild rate sensitivity into standard underwriting templates. DSCR covenants set without rate stress are effectively untested. Portfolio monitoring should flag all floating-rate facilities with <1.2x DSCR at current rates.",

    takeaway:
      "The default cycle confirms that interest rate risk is credit risk. Build rate stress into every lending decision as a baseline, not a tail scenario.",
  },

  {
    title: "The Hidden Risk in 'Strong' EBITDA: Adjusted vs. Reported Earnings",

    context:
      "Management-adjusted EBITDA has become ubiquitous in credit submissions, with adjustments routinely adding 15–40% to reported earnings. For junior analysts, learning to challenge these adjustments is one of the most important credit skills.",

    analysis:
      "Common adjustments include non-recurring restructuring costs (which recur every 3 years on average in practice), SBC expensed below EBITDA, and capitalised costs that should be expensed. A 2023 study of 200 leveraged loan credits found that average management-adjusted EBITDA exceeded audited EBITDA by 22%. The practical implication: a deal presented at 4.5x leverage may be 5.5x on a clean basis — a material difference for covenant headroom and recovery analysis.",

    implications:
      "Always request a bridge from reported to adjusted EBITDA with supporting schedules. Apply an independent quality-of-earnings adjustment before spreading ratios. Covenant EBITDA definitions should align as closely as possible to audited figures.",

    takeaway:
      "Adjusted EBITDA is a starting point, not a conclusion. The analyst's job is to reconstruct a conservative, auditable earnings number before any ratio is calculated.",
  },

  {
    title: "Working Capital: The Cash Flow Metric Most Junior Analysts Miss",

    context:
      "Profit is not cash. This distinction — elementary in theory — is frequently missed in practice when businesses present strong P&L alongside tightening liquidity. Working capital analysis is the bridge between the two.",

    analysis:
      "A business growing revenue at 20% YoY will typically see trade receivables expand faster than payables unless actively managed — absorbing cash that does not appear on the income statement. The cash conversion cycle (DIO + DSO – DPO) is the cleanest single metric. Extending DPO beyond supplier payment terms inflates short-term liquidity but introduces supply chain risk and flags potential creditor stress. For SME lenders, a CCC deteriorating beyond 90 days is a reliable early-warning signal.",

    implications:
      "Always request an aged debtor and creditor ledger alongside management accounts. A tightening CCC, rising DSO, or creditor days above 90 should trigger a liquidity covenant or impose a borrowing base structure.",

    takeaway:
      "Working capital is where credit risk hides in profitable businesses. Spread the balance sheet change in working capital alongside EBITDA — always.",
  },

  // ── ADD NEW BLOG POSTS BELOW ───────────────────────────────────────────
  // {
  //   title: "",
  //   context: "",
  //   analysis: "",
  //   implications: "",
  //   takeaway: "",
  // },
];
