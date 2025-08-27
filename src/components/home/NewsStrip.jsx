import { Link } from "react-router-dom";
import { posts } from "../../data/insights.js"; 

export default function NewsStrip() {
  const cards = posts.slice(0, 3);

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + accent line */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            News &amp; Articles
          </h2>
          <div className="mt-2 h-1 w-28 rounded bg-yellow-400" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((p) => {
            const img = p.image || "/images/insights/default.jpg"; // fallback if you don't have an image on a post
            return (
              <article
                key={p.slug}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm transition-shadow hover:shadow-md"
              >
                <Link to={`/insights/${p.slug}`} className="block">
                  <img
                    src={img}
                    alt={p.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>

                <div className="p-6">
                  <Link
                    to={`/insights/${p.slug}`}
                    className="block text-xl font-semibold leading-snug text-slate-900 hover:text-blue-700"
                  >
                    {p.title}
                  </Link>

                  <p className="mt-3 text-[15px] text-slate-700 news-excerpt">
                    {p.excerpt}
                  </p>

                  <div className="mt-6">
                    <Link
                      to={`/insights/${p.slug}`}
                      className="inline-flex items-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-yellow-500"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-right">
          <Link
            to="/insights"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all →
          </Link>
        </div>
      </div>
    </section>
  );
}
