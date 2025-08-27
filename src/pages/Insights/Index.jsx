import { Link } from "react-router-dom";
import { posts } from "../../data/insights.js"; 

export default function InsightsIndex() {
  return (
    <main className="bg-slate-50">
      {/* header theme */}
      <div className="bg-gradient-to-r from-[#0b2a5b] via-[#143a7a] to-[#1f4aa0] text-white">
        <div className="container-xl py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Insights</h1>
          <p className="mt-2 text-white/80">
            Practical updates on tax, audit and compliance — written for busy founders and finance leaders.
          </p>
        </div>
      </div>

      {/* list */}
      <section className="py-8">
        <div className="container-xl space-y-4">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <Link
                  to={`/insights/${p.slug}`}
                  className="text-lg sm:text-xl font-semibold leading-snug hover:text-blue-700"
                >
                  {p.title}
                </Link>
                <div className="hidden sm:block text-sm text-slate-500 whitespace-nowrap">
                  {p.date} • {p.read}
                </div>
              </div>

              <div className="sm:hidden mt-1 text-sm text-slate-500">
                {p.date} • {p.read}
              </div>

              <p className="mt-2 text-[15px] text-slate-700">{p.excerpt}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  to={`/insights/${p.slug}`}
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
