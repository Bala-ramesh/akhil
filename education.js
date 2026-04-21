// ─── EDUCATION DATA ───────────────────────────────────────────────────────
// Supports multiple entries (e.g. degree + master's later).
// Each entry renders as its own card in the Education section.
// Add entries to the array in reverse-chronological order (newest first).

export const EDUCATION = [
  {
    degree: "BSc Economics with Finance",
    institution: "University of Leeds",
    dates: "2021 – 2024",
    grade: "First Class Honours (Predicted)",

    modules: [
      "Corporate Finance",
      "Financial Accounting",
      "Risk Management",
      "Econometrics",
      "Fixed Income Markets",
      "Banking & Financial Intermediation",
    ],

    dissertation:
      "The Predictive Power of Altman Z-Score in UK SME Credit Default (Grade: 78%)",

    certifications: [
      "CFA Level 1 Candidate (Dec 2025 sitting)",
      "Bloomberg Market Concepts (BMC)",
      "CISI Introduction to Securities & Investment",
    ],
  },

  // ── ADD FURTHER EDUCATION ENTRIES BELOW ───────────────────────────────
  // {
  //   degree: "",
  //   institution: "",
  //   dates: "",
  //   grade: "",
  //   modules: [],
  //   dissertation: "",      // Set to "" or omit if not applicable
  //   certifications: [],
  // },
];
