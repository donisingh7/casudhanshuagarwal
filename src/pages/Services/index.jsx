import { useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  ShieldCheck, Calculator, IndianRupee, LineChart, FileCog, BriefcaseBusiness
} from "lucide-react";

const DETAILS = [
  {
    slug: "audit",
    title: "Audit & Assurance",
    Icon: ShieldCheck,
    image: "/services/audit.jpg",
    intro: "Independent audits with actionable recommendations for controls, compliance and governance.",
    bullets: [
      "Statutory audit (Companies Act) & Tax audit",
      "Internal / process / special audits, IFC",
      "Risk assessment, SOPs, management letter & remediation",
    ],
  },
  {
    slug: "direct-tax",
    title: "Direct Taxes",
    Icon: Calculator,
    image: "/services/direct-tax.jpg",
    intro: "Corporate & individual tax advisory, compliance and representation.",
    bullets: [
      "Return preparation & review, TDS/TCS advisory",
      "Assessments, appeals & opinions",
      "Withholding tax, cross-border issues, transfer pricing (basic)",
    ],
  },
  {
    slug: "gst",
    title: "Indirect Taxes (GST)",
    Icon: IndianRupee,
    image: "/services/gst.jpg",
    intro: "End-to-end GST registrations, returns, reconciliations and audits.",
    bullets: [
      "Registration, monthly/annual returns, e-invoice/e-way bill",
      "2A/2B reconciliations, refunds & LUT",
      "Health check, departmental audit support & litigation",
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    Icon: LineChart,
    image: "/services/business-advisory.jpg",
    intro: "Performance improvement, controls and transaction support.",
    bullets: [
      "SOPs & process redesign, dashboarding/MIS",
      "Working capital & cashflow improvement",
      "Diligence support, valuations (overview), ESG basics",
    ],
  },
  {
    slug: "roc-mca-compliance",
    title: "ROC/MCA Compliance",
    Icon: FileCog,
    image: "/services/roc-mca-compliance.jpg",
    intro: "Secretarial filings & event-based compliance for companies/LLPs.",
    bullets: [
      "AOC-4, MGT-7, DIR-3 KYC, PAS-3, SH-7, MGT-14",
      "Minutes & statutory registers, Board/AGM support",
      "XBRL & charge management",
    ],
  },
  {
    slug: "outsourced-accounting-cfo",
    title: "Outsourced Accounting & CFO",
    Icon: BriefcaseBusiness,
    image: "/services/outsourced-accounting-cfo.jpg",
    intro: "Full-stack finance: books, payroll, MIS and investor reporting.",
    bullets: [
      "Bookkeeping, AR/AP, payroll & compliance calendar",
      "Monthly MIS, variance analysis, budgeting",
      "Cashflow forecasting, board packs, KPIs",
    ],
  },
];

export default function ServicesIndex() {
  const { hash } = useLocation();
  const activeSlug = useMemo(() => (hash ? hash.replace("#", "") : ""), [hash]);

  useEffect(() => {
    if (!activeSlug) return;
    const el = document.getElementById(activeSlug);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeSlug]);

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container-xl">
        <h1 className="h2">Our Services</h1>
        <p className="mt-2 muted">Knowledge-led, partner-driven delivery across tax, audit and advisory.</p>

        <div className="mt-8 space-y-6">
          {DETAILS.map(({ slug, title, Icon, intro, bullets, image }) => (
            <article
              key={slug}
              id={slug}
              className={
                "rounded-2xl bg-white ring-1 ring-slate-200 p-6 sm:p-7 shadow-sm scroll-mt-28 " +
                (activeSlug === slug ? "ring-2 ring-blue-600" : "")
              }
            >
              {/* two-column layout */}
              <div className="grid md:grid-cols-[1fr_320px] gap-6 items-center">
                {/* LEFT: content */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl grid place-items-center bg-blue-700 text-white shrink-0">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xl font-semibold">{title}</h2>
                      <p className="mt-2 text-slate-600">{intro}</p>
                    </div>
                  </div>

                  <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
                    {bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>

                  <div className="mt-5 flex gap-3">
                    <Link to="/contact" className="btn-primary">Request Proposal</Link>
                    <a href="#top" className="btn-outline">Back to Top</a>
                  </div>
                </div>

                {/* RIGHT: image */}
                <figure className="order-first md:order-none">
                  <div className="h-40 sm:h-48 md:h-52 w-full rounded-xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
                    <img
                      src={image}
                      alt={`${title} illustration`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
