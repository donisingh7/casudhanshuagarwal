import { Link } from "react-router-dom";

const INDUSTRIES = [
  { name: "Automobiles",              slug: "automobiles",              image: "/industries/automobiles.jpg" },
  { name: "Oil & Gas",                slug: "oil-gas",                  image: "/industries/oil-gas.jpg" },
  { name: "Information Technology",   slug: "information-technology",   image: "/industries/information-technology.jpg" },
  { name: "Media & Entertainment",    slug: "media-entertainment",      image: "/industries/media-entertainment.jpg" },
  { name: "Real Estate & Construction", slug: "real-estate-construction", image: "/industries/real-estate-construction.jpg" },
  { name: "Financial Sector",         slug: "financial-sector",         image: "/industries/financial-sector.jpg" },
  { name: "Telecom",                  slug: "telecom",                  image: "/industries/telecom.jpg" },
  { name: "Hospitality",              slug: "hospitality",              image: "/industries/hospitality.jpg" },
];

export default function IndustriesStrip() {
  return (
    <section id="industries" className="py-16 sm:py-20">
      <div className="container-xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="h2">Industries</h2>
            <p className="mt-2 muted">Deep domain familiarity across sectors.</p>
          </div>
          <Link to="/industries" className="hidden sm:inline text-sm font-semibold text-blue-700 hover:text-blue-800">
            View All →
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map(({ name, slug, image }) => (
            <Link
              key={slug}
              to={`/industries#${slug}`}                // ← goes to details on industries page
              className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white group hover:shadow-md transition"
            >
              <div className="relative h-36 sm:h-40">
                <img
                  src={image}
                  alt={`${name} industry`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
              </div>
              <div className="p-4 font-medium">{name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
