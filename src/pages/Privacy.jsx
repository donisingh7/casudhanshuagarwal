import { BRAND } from "../config/brand";

const LAST_UPDATED = "23 Aug 2025";

export default function Privacy() {
  const addressHtml = BRAND.addressLines.join(", ");

  return (
    <main className="bg-slate-50">
      {/* Themed header */}
      <div className="container-xl pt-2 pb-6">
        <div className="relative overflow-hidden rounded-2xl mb-6 ring-1 ring-slate-200">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,.9) 1px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />
          <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 px-6 sm:px-8 py-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-slate-100/90">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 sm:p-8 space-y-8">
          <section id="overview" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">1) Overview</h2>
            <p className="text-slate-700 leading-relaxed">
              {BRAND.displayName} (“we”, “us”, “our”) respects your privacy. This policy
              explains what personal information we collect, how we use it, whom we share it
              with, and the rights available to you. It is intended to be compliant with
              applicable Indian laws including the Information Technology Act, SPDI Rules, and
              the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
          </section>

          <section id="what-we-collect" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              2) Information we collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <span className="font-medium">Contact details</span> you submit via our
                contact form (name, email, phone) and the message you provide.
              </li>
              <li>
                <span className="font-medium">Career applications</span> you email or submit
                (name, contact details, CV/resume, cover letter, experience and education).
              </li>
              <li>
                <span className="font-medium">Client information</span> shared with us for
                professional engagements (which may include financial and regulatory data)
                handled under confidentiality.
              </li>
              <li>
                <span className="font-medium">Usage data & cookies</span> such as pages
                visited, device/browser information, and approximate location derived from IP.
                We may use basic analytics and embedded services (e.g., Google Maps).
              </li>
            </ul>
          </section>

          <section id="how-we-use" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              3) How we use your information
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>To respond to your enquiries and provide requested services.</li>
              <li>To evaluate and process job applications.</li>
              <li>To perform our contracts with clients and comply with legal obligations.</li>
              <li>To improve our website, content and user experience.</li>
              <li>
                To communicate important updates, only where permitted (you can opt-out any
                time).
              </li>
            </ul>
          </section>

          <section id="lawful-basis" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              4) Lawful bases for processing
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We process personal data on one or more of the following grounds:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>your consent (e.g., contact form submissions);</li>
              <li>performance of a contract or steps prior to entering a contract;</li>
              <li>compliance with legal/regulatory obligations; and</li>
              <li>legitimate interests (e.g., security, preventing misuse).</li>
            </ul>
          </section>

          <section id="sharing" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              5) Sharing & disclosures
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We do <span className="font-medium">not sell</span> your personal information.
              We may share limited data with trusted service providers that help us operate
              the site and deliver services—for example: secure hosting, email delivery,
              analytics, and embedded services such as{" "}
              <span className="whitespace-nowrap">Google Maps</span> (their privacy policies
              apply when you interact with those embeds). We may also disclose information
              where required by law, regulation or professional standards.
            </p>
          </section>

          <section id="international" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              6) International transfers
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Some processors may store data outside India. When that occurs, we take
              reasonable steps to ensure an adequate level of protection consistent with
              applicable law and contractually require appropriate safeguards.
            </p>
          </section>

          <section id="retention" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">7) Retention</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                Contact enquiries: typically retained for up to <span className="font-medium">12 months</span>.
              </li>
              <li>
                Career applications: up to <span className="font-medium">24 months</span>{" "}
                (or less if you ask us to delete earlier), unless required longer by law.
              </li>
              <li>
                Client engagement data: retained in line with statutory, regulatory and
                professional requirements.
              </li>
            </ul>
          </section>

          <section id="security" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              8) Security measures
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We implement reasonable technical and organizational measures to protect
              personal information against unauthorized access, alteration or disclosure.
              However, no method of transmission or storage is completely secure.
            </p>
          </section>

          <section id="your-rights" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">9) Your rights</h2>
            <p className="text-slate-700 leading-relaxed">
              Subject to applicable law, you may have rights to access, correct, update,
              delete, or withdraw consent for your personal information. To exercise your
              rights, contact us using the details below. We may need to verify your identity
              before responding.
            </p>
          </section>

          <section id="cookies" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">10) Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              We may use cookies or similar technologies for essential site functions and
              basic analytics. You can control cookies through your browser settings; blocking
              some cookies may impact functionality.
            </p>
          </section>

          <section id="children" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              11) Children’s privacy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our website and services are intended for adults. We do not knowingly collect
              personal information from children.
            </p>
          </section>

          <section id="updates" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              12) Changes to this policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this policy from time to time. The “Last updated” date above
              indicates the most recent revision. Material changes will be highlighted on
              this page.
            </p>
          </section>

          <section id="contact" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              13) How to contact us / Grievance Officer
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-2">
              <div className="font-medium">{BRAND.displayName}</div>
              <div dangerouslySetInnerHTML={{ __html: addressHtml }} />
              <div>
                <span className="font-medium">Email:</span>{" "}
                <a href={`mailto:${BRAND.email}`} className="text-blue-700 hover:text-blue-800">
                  {BRAND.email}
                </a>
              </div>
              <div>
                <span className="font-medium">Phone:</span>{" "}
                <a href={`tel:${BRAND.phoneHref}`} className="text-blue-700 hover:text-blue-800">
                  {BRAND.phone}
                </a>
              </div>
              <p className="text-slate-600">
                You may address privacy-related requests to our Grievance Officer at the email
                above. We will respond in accordance with applicable law.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
