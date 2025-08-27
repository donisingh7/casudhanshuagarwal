import { useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";

const DETAILS = [
  {
    slug: "automobiles",
    title: "Automobiles",
    intro:
      "We support OEMs, component manufacturers and dealer networks on robust controls, tax and compliance with practical on-ground fixes.",
    points: [
      "Inventory & warranty controls; dealer/stock audits",
      "GST, TDS, incentives & subsidies advisory",
      "Plant SOPs, logistics checkpoints, after-sales processes",
      "Management reporting: P&L by model/region",
    ],
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    intro:
      "Downstream distributors, EPC contractors and service providers—project visibility and indirect-tax hygiene, end to end.",
    points: [
      "Project MIS, cost tracking & reconciliations",
      "E-invoice/e-way bill, classification & ITC management",
      "Contract risk review, documentation and billing flow",
      "Capex vs revenue checks, spares & consumables",
    ],
  },
  {
    slug: "information-technology",
    title: "Information Technology",
    intro:
      "For product, SaaS and IT/ITES—clean revenue recognition, export benefits and cross-border basics done right.",
    points: [
      "Revenue recognition & deferred revenue schedules",
      "Export benefits, LUT/refunds, FEMA/LRS basics",
      "Vendor/contractor compliance & TDS/GST mapping",
      "Basic transfer pricing, inter-company hygiene",
    ],
  },
  {
    slug: "media-entertainment",
    title: "Media & Entertainment",
    intro:
      "Studios, production houses and digital creators—project accounting, artist contracts and clear tax positions.",
    points: [
      "Artist contracts, TDS sections & GST classifications",
      "Project costing with POs and advances controls",
      "Royalty/rights accounting; platform reconciliations",
      "Petty cash & location expense hygiene",
    ],
  },
  {
    slug: "real-estate-construction",
    title: "Real Estate & Construction",
    intro:
      "Developers & contractors—project controls, RERA/GST filings and lender-ready reporting.",
    points: [
      "WIP/POC working; RA bill validation and retention",
      "RERA disclosures, ITC management and reconciliations",
      "Vendor onboarding and measurement controls",
      "Cashflow mapping and milestone collections",
    ],
  },
  {
    slug: "financial-sector",
    title: "Financial Sector",
    intro:
      "NBFCs, brokers and fintech—regulatory discipline with clear investor-grade MIS.",
    points: [
      "Lending/collections controls, KYC/AML basics",
      "Stat/Reg filings and tax positions",
      "Month-end close, provisioning & reconciliations",
      "Board packs: KPIs, cohort & variance analysis",
    ],
  },
  {
    slug: "telecom",
    title: "Telecom",
    intro:
      "ISPs and infra players—usage/revenue assurance and compliance reconciliations at scale.",
    points: [
      "Usage ↔ billing reconciliations; dispute logs",
      "Licence fee/AGR computations (overview)",
      "GST on interconnect/roaming; e-inv/e-way compliance",
      "Asset tracking and uptime reporting",
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    intro:
      "Hotels, QSRs and travel—front-office to backend finance with tight controls and daily visibility.",
    points: [
      "Recipe costing & yield; store controls",
      "OTA/platform reconciliations; TCS/TDS mapping",
      "Room/restaurant GST rate mapping & discounts",
      "Daily flash MIS, cash and variance checks",
    ],
  },
];

export default function Industries() {
  const { hash } = useLocation();
  const active = useMemo(() => (hash ? hash.replace("#", "") : ""), [hash]);

  useEffect(() => {
    if (!active) return;
    const el = document.getElementById(active);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  return (
    <main className="bg-slate-50">
      {/* Navy header (same as before) */}
      <div className="bg-gradient-to-r from-[#0b2a5b] via-[#143a7a] to-[#1f4aa0] text-white">
        <div className="container-xl py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Industries</h1>
          <p className="mt-2 text-white/80">
            Deep domain familiarity across sectors.
          </p>
        </div>
      </div>

      {/* Grid of industry boxes (like services) */}
      <section className="py-12 sm:py-16 bg-[#0b2a5b]">
        <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DETAILS.map(({ slug, title, intro, points }) => (
            <div
              key={slug}
              id={slug}
              className={
                "rounded-xl bg-white border-2 border-red-500 p-6 shadow-md transition " +
                (active === slug ? "ring-2 ring-blue-600" : "")
              }
            >
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
              <p className="mt-2 text-slate-700 text-sm">{intro}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
