export default function CtaBand() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold">Looking for a partner-led approach?</h2>
        <p className="mt-2 text-white/90">Get a tailored proposal for your audit, taxation or advisory needs.</p>
        <a
          href="/contact"
          className="inline-flex rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold mt-6 hover:bg-white/90"
        >
          Request Proposal
        </a>
      </div>
    </section>
  );
}
