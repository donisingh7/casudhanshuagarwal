import { useState } from "react"; 
import { BRAND } from "../../config/brand";

export default function Contact() {
  const [loading, setLoading] = useState(false); // NEW

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    BRAND.mapQuery
  )}&output=embed`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    try {
      setLoading(true); // NEW
      const API  = import.meta.env.VITE_API_URL || ""; // same-origin fallback
      const controller = new AbortController(); // optional timeout
      const t = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
        signal: controller.signal,
      });
      clearTimeout(t);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      alert("Message sent!");
      form.reset();
    } catch (err) {
      alert(`Failed to send message: ${err?.name === "AbortError" ? "Timed out" : err?.message || err}`);
    } finally {
      setLoading(false); // NEW
    }
  };

  return (
    <main className="bg-slate-50">
      {/* THEME HEADER */}
      <div className="bg-gradient-to-r from-[#0b2a5b] via-[#143a7a] to-[#1f4aa0] text-white">
        <div className="container-xl py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-white/80">We usually respond within one business day.</p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-8">
        <div className="container-xl grid md:grid-cols-2 gap-6">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-sm"
          >
            <div>
              <label className="sr-only">Full Name</label>
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full border rounded-lg p-3 focus:outline-none"
              />
            </div>

            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="sr-only">Phone</label>
                <input
                  name="phone"
                  placeholder="Phone"
                  className="w-full border rounded-lg p-3 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="sr-only">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your needs…"
                className="w-full border rounded-lg p-3 resize-y focus:outline-none"
              />
            </div>

            <button type="submit" disabled={loading} className={`btn-primary w-full mt-4 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
              {loading ? "Sending…" : "Send"}
            </button>
          </form>

          {/* Address + Map */}
          <aside className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <h2 className="font-semibold">Office</h2>
            <address className="not-italic mt-1 text-slate-600 space-y-1">
              {BRAND.addressLines.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </address>

            <div className="mt-4 h-64 w-full rounded-xl overflow-hidden ring-1 ring-slate-200">
              <iframe
                title="Office Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
                className="w-full h-full border-0"
              />
            </div>

            <div className="mt-4 text-sm text-slate-700 space-y-1">
              <div>
                <span className="font-medium">Email:</span>{" "}
                <a className="text-blue-700 hover:text-blue-800" href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </a>
              </div>
              <div>
                <span className="font-medium">Phone:</span>{" "}
                <a className="text-blue-700 hover:text-blue-800" href={`tel:${BRAND.phoneHref}`}>
                  {BRAND.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
