import React from "react";

const TESTIMONIALS = [
  {
    name: "Mr. Ramkrishan Gupta",
    rating: 5,
    quote:
      "They simplified our compliance and turned things around before year-end. Clear timelines, zero surprises.",
  },
  {
    name: "Mr. Kailash Jindal",
    rating: 5,
    quote:
      "Partner-led delivery was evident—senior attention on every milestone and practical recommendations we could implement the next day.",
  },
  {
    name: "Ms. Kanika Gupta",
    rating: 5,
    quote:
      "Their GST health check recovered input credits we had missed and set up controls that actually stick.",
  },
  {
    name: "Mrs. Pooja Bansal",
    rating: 5,
    quote:
      "We rely on them for audits and SOP design; the process is thorough yet remarkably smooth for our teams.",
  },
  {
    name: "Mr. Doni Singh Agrawal",
    rating: 5,
    quote:
      "Straight answers, clean reporting, and measurable results—exactly what a growing business needs.",
  },
  {
    name: "Mr. Tarun Jindal",
    rating: 5,
    quote:
      "Their financial advice has been extremely practical and growth-focused. We now have a clearer roadmap for scaling with confidence.",
  },
  {
    name: "Mrs. Krishn Lata Gupta",
    rating: 5,
    quote:
      "Outstanding GST-related services—timely filings, proactive guidance, and strong support that saved us both time and cost.",
  },
  {
    name: "Mr. Lakhmi Chand Gupta",
    rating: 5,
    quote:
      "Their ITR services are smooth, accurate, and hassle-free. We feel confident every return is filed with absolute compliance.",
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
    </div>
  );
}

function InitialsBadge({ name }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
  return (
    <div className="w-12 h-12 rounded-full bg-blue-700/80 text-white grid place-items-center font-semibold">
      {initials || "SA"}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 md:py-20 bg-blue-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(90%_60%_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white relative">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Testimonials
          </h2>
          <p className="mt-3 text-blue-100/90">
            What our clients say about partnering with us.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={idx}
              className="bg-white text-slate-700 rounded-2xl shadow-md ring-1 ring-slate-200/60 p-6 flex flex-col gap-4 transition hover:shadow-lg"
            >
              <StarRow count={t.rating ?? 5} />
              {t.quote ? (
                <p className="text-[15px] leading-6 text-slate-600">“{t.quote}”</p>
              ) : null}
              <div className="mt-2 flex items-center gap-3">
                <InitialsBadge name={t.name} />
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-blue-100/70 text-sm lg:hidden">
          Swipe to see more →
        </div>
      </div>
    </section>
  );
}
