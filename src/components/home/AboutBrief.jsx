export default function AboutBrief() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About the Firm</h2>
          <p className="mt-4 text-slate-600">
            Sudhanshu Agarwal & Associates is a partner-led Chartered Accountancy firm based in Delhi
            with presence across India. We bring multi-industry experience in audit, taxation and advisory.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <li className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white">10+ partners</li>
            <li className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white">150+ professionals</li>
            <li className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white">Decades of leadership</li>
            <li className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white">PAN-India network</li>
          </ul>
          <a
            href="/services"
            className="inline-flex mt-6 rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700"
          >
            Explore Services
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&w=1600&auto=format&fit=crop"
            alt="About"
            className="w-full h-[360px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
