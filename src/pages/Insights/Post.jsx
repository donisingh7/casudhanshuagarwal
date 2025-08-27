import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "@/data/insights.js"; 

export default function Post() {
  const { slug } = useParams();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <main className="container-xl py-12">
        <h1 className="h2">Post not found</h1>
        <div className="mt-2">
          <Link to="/insights" className="text-blue-700 font-semibold">← Back to Insights</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">
      {/* header theme */}
      <div className="bg-gradient-to-r from-[#0b2a5b] via-[#143a7a] to-[#1f4aa0] text-white">
        <div className="container-xl py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{post.title}</h1>
          <p className="mt-2 text-white/80">{post.date} • {post.read}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags?.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border border-white/30 text-white/90 px-2.5 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <article className="container-xl py-8 prose max-w-none prose-slate">
        {post.sections?.map(({ h, bullets }) => (
          <section key={h} className="mb-6">
            <h2 className="text-xl font-semibold">{h}</h2>
            {bullets && (
              <ul className="mt-2 list-disc pl-5">
                {bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-8">
          <Link to="/insights" className="text-blue-700 font-semibold">← Back to Insights</Link>
        </div>
      </article>
    </main>
  );
}
