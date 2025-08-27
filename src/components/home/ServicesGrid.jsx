import { Link } from "react-router-dom";
import {
  ShieldCheck, Calculator, IndianRupee, LineChart, FileCog, BriefcaseBusiness
} from "lucide-react";

const SERVICES = [
  { title: "Audit & Assurance", desc: "Statutory, tax, internal and special audits with actionable recommendations.", Icon: ShieldCheck, slug: "audit" },
  { title: "Direct Taxes", desc: "Corporate & individual taxation, opinions, assessments, litigation support.", Icon: Calculator, slug: "direct-tax" },
  { title: "Indirect Taxes (GST)", desc: "Registrations, returns, reconciliations, audits and health checks.", Icon: IndianRupee, slug: "gst" },
  { title: "Business Advisory", desc: "SOPs, process redesign, risk advisory, transaction support, valuations.", Icon: LineChart, slug: "business-advisory" },
  { title: "ROC/MCA Compliance", desc: "Annual filings, director KYC, XBRL, share allotments and secretarial.", Icon: FileCog, slug: "roc-mca-compliance" },
  { title: "Outsourced Accounting & CFO", desc: "Books, payroll, MIS, cashflow and investor reporting.", Icon: BriefcaseBusiness, slug: "outsourced-accounting-cfo" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50">
      <div className="container-xl">
        <h2 className="h2">Our Services</h2>
        <p className="mt-2 muted">Knowledge-led, partner-driven delivery across tax, audit and advisory.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ title, desc, Icon, slug }) => (
            <div key={slug} className="rounded-2xl p-6 bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-blue-700 text-white shadow-sm">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>

              <Link to={`/services#${slug}`} className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
