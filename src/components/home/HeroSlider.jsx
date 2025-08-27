import { useEffect, useRef, useState } from "react";

const slides = [
  {
    quote: "A true professional not only follows but loves the process.",
    author: "— Inspired",
    img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "— Wayne Gretzky",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    quote: "Sincerity and integrity are beyond measure.",
    author: "— Adapted",
    img: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="relative h-[64vh] sm:h-[72vh] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={s.img} alt="slide" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                  Trusted Advisors for Audit, Tax & Compliance
                </h1>
                <p className="mt-5 text-lg text-white/90">
                  Serving startups, SMEs, NGOs and enterprises with partner-led
                  engagement and rigorous delivery.
                </p>
                <blockquote className="mt-6 p-4 sm:p-6 rounded-xl bg-white/10 border border-white/15">
                  <p className="text-white/95 italic">“{s.quote}”</p>
                  <div className="text-white/80 text-sm mt-2">{s.author}</div>
                </blockquote>
                <div className="mt-6 flex gap-3">
                  <a
                    href="/contact"
                    className="rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90"
                  >
                    Book a Call
                  </a>
                  <a
                    href="/services"
                    className="rounded-lg border border-white/60 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
