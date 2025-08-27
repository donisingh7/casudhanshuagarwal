// src/pages/About.jsx
import { Target, Eye, Users2, ShieldCheck, BriefcaseBusiness } from "lucide-react";
import { BRAND } from "../config/brand";

export default function About() {
  return (
    <main className="bg-slate-50">
      {/* HERO with background image + gradient overlay */}
      <section className="relative isolate">
        <div
          className="h-56 sm:h-64 md:h-72 lg:h-80 w-full bg-center bg-cover"
          style={{ backgroundImage: "url(/about/hero.jpg)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a5b]/95 via-[#143a7a]/90 to-[#6b2bb7]/70" />
        <div className="absolute inset-0">
          <div className="container-xl h-full flex items-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">ABOUT</h1>
              <p className="mt-2 text-2xl sm:text-3xl font-medium">{BRAND.displayName}</p>
              <p className="mt-1 text-slate-100/90">Chartered Accountants • New Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="py-10 sm:py-12">
        <div className="container-xl grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <article className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 sm:p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Who We Are</h2>
            <p className="mt-3 text-slate-700">
              {BRAND.displayName} is a partner-led firm of Chartered Accountants based in New Delhi,
              delivering assurance, tax and advisory services with strong process discipline and
              practical, business-first advice. We serve startups, SMEs, NGOs and mid-market
              enterprises across India.
            </p>
            <p className="mt-3 text-slate-700">
              Our core practices include <em>Audit &amp; Assurance</em>, <em>Direct Taxes</em>,
              <em> Indirect Taxes (GST)</em>, <em>Business Advisory</em>,
              <em> ROC/MCA Compliance</em> and <em>Outsourced Accounting &amp; CFO</em> services.
              We bring senior attention throughout the engagement—from planning to delivery and
              post-implementation reviews—so leaders can make better, faster decisions.
            </p>
            <p className="mt-3 text-slate-700">
              Head Office:{" "}
              <span className="font-medium">
                Office – 205, 2<sup>nd</sup> Floor, Plot No-25, Vardhman Arihant Bhawan,
                KP Block Commercial Complex, Pitampura, New Delhi – 110034
              </span>.
            </p>

            {/* quick facts (compact) */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <Fact label="Years of Trust" value="2018—present" />
              <Fact label="Core Service Lines" value="6+" />
              <Fact label="Partner-led Engagements" value="100%" />
            </div>
          </article>

          <aside className="rounded-2xl bg-white ring-1 ring-slate-200 p-4 sm:p-5 shadow-sm">
            <figure className="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
              <img
                src="/about/founder.jpg"
                alt="Our partner-led practice"
                className="w-full h-80 object-cover"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </figure>
            <figcaption className="mt-3 text-sm text-slate-600">
              Partner-led engagement with rigorous delivery—our founding principle since day one.
            </figcaption>

            {/* Firm at a Glance */}
            <div className="mt-5 rounded-xl bg-slate-50 ring-1 ring-slate-200 p-4 text-sm">
              <div className="font-semibold text-slate-900">Firm at a Glance</div>
              <div className="mt-2 text-slate-700 leading-relaxed">
                <div className="mt-1">
                  <span className="font-medium">Email:</span>{" "}
                  <a href={`mailto:${BRAND.email}`} className="text-blue-700 hover:text-blue-800">
                    {BRAND.email}
                  </a>
                </div>
                <div className="mt-1">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href={`tel:${BRAND.phoneHref}`} className="text-blue-700 hover:text-blue-800">
                    {BRAND.phone}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-6">
        <div className="container-xl grid md:grid-cols-2 gap-6">
          <Card>
            <div className="h-11 w-11 rounded-xl bg-blue-700 text-white grid place-items-center">
              <Target size={20} />
            </div>
            <h3 className="mt-3 font-semibold">Our Mission</h3>
            <p className="mt-2 text-slate-700">
              To deliver reliable, actionable and timely assurance, tax and advisory services by
              combining deep technical knowledge with robust SOPs—so clients operate with clarity,
              compliance and confidence.
            </p>
          </Card>

          <Card>
            <div className="h-11 w-11 rounded-xl bg-blue-700 text-white grid place-items-center">
              <Eye size={20} />
            </div>
            <h3 className="mt-3 font-semibold">Our Vision</h3>
            <p className="mt-2 text-slate-700">
              To be a trusted long-term partner for growing businesses and institutions, known for
              integrity, practical advice and measurable outcomes.
            </p>
          </Card>
        </div>
      </section>

      {/* VALUES / WHY US */}
      <section className="py-6 pb-12">
        <div className="container-xl">
          <h2 className="text-xl font-semibold">What We Stand For</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Value
              icon={ShieldCheck}
              title="Integrity & Independence"
              text="Uncompromising ethics and objectivity in every assignment."
            />
            <Value
              icon={BriefcaseBusiness}
              title="Partner-Led Delivery"
              text="Senior oversight throughout—planning to closure."
            />
            <Value
              icon={Users2}
              title="Client-Centred"
              text="Clear communication, predictable timelines and outcomes."
            />
            <Value
              icon={ShieldCheck}
              title="Process Discipline"
              text="SOPs, checklists and reviews to ensure consistent quality."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- presentational helpers ---------- */
function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 sm:p-7 shadow-sm">
      {children}
    </div>
  );
}

function Value({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-5 shadow-sm">
      <div className="h-10 w-10 rounded-lg bg-blue-700 text-white grid place-items-center">
        <Icon size={18} />
      </div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-slate-700">{text}</p>
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 ring-1 ring-slate-200 p-4">
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
