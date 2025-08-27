import { BRAND } from "../../config/brand";

export default function NetworkBlock() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    BRAND.mapQuery
  )}&output=embed`;

  return (
    <section className="bg-slate-50">
      <div className="container-xl pt-0 pb-4 sm:pt-2 sm:pb-6">
        {/* THEMED HEADER */}
        <div className="relative overflow-hidden rounded-2xl mb-6 sm:mb-8 ring-1 ring-slate-200">
          {/* dotted pattern overlay */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,.85) 1px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />
          {/* gradient strip */}
          <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 px-5 sm:px-7 py-7 sm:py-8">
            <div className="flex items-center gap-3">
              {/* pin icon (inline SVG so no library needed) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-none text-white/95"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Domestic Network
              </h2>
            </div>
            <p className="mt-2 text-slate-100/90 max-w-3xl leading-relaxed">
              Head Office in New Delhi. Reach us directly for partner-led engagement and
              on-ground delivery.
            </p>
          </div>
        </div>

        {/* CONTENT: address + contact + map */}
        <div className="grid gap-5 lg:grid-cols-[1fr,1.3fr] items-stretch">
          {/* Left — compact info card */}
          <div className="h-full">
            <div className="rounded-xl bg-white ring-1 ring-slate-200 p-5 shadow-sm h-full">
              <div className="text-sm font-semibold text-slate-900">New Delhi (HO)</div>

              <div className="mt-2 space-y-1.5 text-[15px] text-slate-700 leading-relaxed">
                {BRAND.addressLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}

                <div className="pt-2.5 flex flex-col sm:flex-row sm:items-center gap-2 text-[15px]">
                  <div>
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-blue-700 hover:text-blue-800"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <div>
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href={`tel:${BRAND.phoneHref}`}
                      className="text-blue-700 hover:text-blue-800"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
            <iframe
              title="Head Office Map"
              src={mapSrc}
              className="w-full h-[380px] sm:h-[400px] lg:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
