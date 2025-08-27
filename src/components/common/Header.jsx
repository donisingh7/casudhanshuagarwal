import { Link, NavLink } from "react-router-dom";
import { BRAND } from "../../config/brand";
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={BRAND.logo?.light || "/images/logo.jpg"}  
            alt="Firm Logo"
            className="h-9 w-auto"
            loading="eager"
            decoding="async"
          />
          <div>
            <div className="font-semibold leading-tight">{BRAND.displayName}</div>
            <div className="text-xs text-slate-500 -mt-0.5">{BRAND.tagline}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Industries", "/industries"],
            ["Insights", "/insights"],
            ["Careers", "/careers"],
            ["Contact", "/contact"],
          ].map(([label, to]) =>
            to === "/" ? (
              <Link key={to} to={to} className="hover:text-blue-700">
                {label}
              </Link>
            ) : (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  "hover:text-blue-700" + (isActive ? " text-blue-700 font-semibold" : "")
                }
              >
                {label}
              </NavLink>
            )
          )}
        </nav>

        <Link
          to="/contact"
          className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
        >
          Consult Now
        </Link>
      </div>
    </header>
  );
}
