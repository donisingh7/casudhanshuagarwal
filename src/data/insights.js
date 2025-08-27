// src/data/insights.js

export const posts = [
  {
    slug: "itr-deadlines-prepare",
    title: "ITR Deadlines & What To Prepare",
    date: "2025-04-15",
    read: "4 min read",
    excerpt:
      "Key due dates and a quick checklist for individuals & small businesses to avoid last-minute rush.",
    tags: ["Income Tax", "Compliance"],
    // simple content structure you can extend
    sections: [
      {
        h: "Key due dates (summary)",
        bullets: [
          "Individuals & HUF (not audited): 31 July",
          "Audit cases: 31 October",
          "Transfer pricing (Form 3CEB): 30 November",
          "Belated/revised return: 31 December",
        ],
      },
      {
        h: "What to keep ready",
        bullets: [
          "Form 16, Form 26AS and AIS/TIS reconciliation",
          "Savings/FD interest, capital gains statements (broker/AMC)",
          "Rent receipts/HRA, housing-loan interest, 80C/80D/other proofs",
          "Bank statements for the year (if business income)",
        ],
      },
      {
        h: "Quick tips",
        bullets: [
          "Match dividend, interest and TDS as per AIS/TIS.",
          "Disclose all bank accounts; verify pre-filled data before submit.",
          "E-verify the return within the statutory timeline.",
        ],
      },
    ],
  },

  {
    slug: "gst-health-check-quick-wins",
    title: "GST Health Check: 5 Quick Wins",
    date: "2025-03-12",
    read: "3 min read",
    excerpt:
      "Five simple checks to safeguard input tax credit and reduce compliance risk.",
    tags: ["GST", "Compliance"],
    sections: [
      {
        h: "1) Reconcile GSTR-2B vs books",
        bullets: [
          "Follow up on missing vendor invoices; block ITC where vendor not compliant.",
        ],
      },
      {
        h: "2) Verify HSN/SAC & place of supply",
        bullets: [
          "Correct rate mapping avoids short-payment and notices.",
        ],
      },
      {
        h: "3) E-invoice & e-way bill hygiene",
        bullets: [
          "Ensure thresholds/IRN coverage; fix cancellations & duplicates.",
        ],
      },
      {
        h: "4) RCM & ineligible ITC",
        bullets: [
          "Track RCM on services; reverse/claim re-credit with interest where needed.",
        ],
      },
      {
        h: "5) Output vs GSTR-1 vs GSTR-3B",
        bullets: [
          "Monthly tie-outs reduce future audit adjustments.",
        ],
      },
    ],
  },
];

export const postsBySlug = Object.fromEntries(posts.map(p => [p.slug, p]));
export const getPostBySlug = (slug) => postsBySlug[slug];
