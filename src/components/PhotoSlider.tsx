"use client";
import { useState, useEffect } from "react";
import SafeImage from "./SafeImage";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?auto=format&fit=crop&w=1600&q=90",
    title: "האלשטאט",
    subtitle: "הכפר הכי יפה בעולם",
    day: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?auto=format&fit=crop&w=1600&q=90",
    title: "גרוסגלוקנר",
    subtitle: "הדרך הנופית הגדולה של אוסטריה",
    day: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1600&q=90",
    title: "מפלי קרימל",
    subtitle: "המפלים הגבוהים באירופה — 380 מטר",
    day: 8,
  },
  {
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=1600&q=90",
    title: "אינסברוק",
    subtitle: "עיר בירת טירול עם הגג הזהב",
    day: 10,
  },
  {
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=1600&q=90",
    title: "אגם אכן",
    subtitle: "הפיורד של טירול",
    day: 11,
  },
  {
    image: "https://images.unsplash.com/photo-1599140849279-1014532882fe?auto=format&fit=crop&w=1600&q=90",
    title: "זלצבורג",
    subtitle: "מוצרט, מוזיקה ומבצר על הגבעה",
    day: 6,
  },
];

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-80 md:h-[480px] overflow-hidden bg-[#0f1a14]">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <SafeImage
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 md:px-14 z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
          📅 יום {slide.day}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-1">{slide.title}</h2>
        <p className="text-white/80 text-base md:text-lg">{slide.subtitle}</p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              backgroundColor: i === current ? "#d4a017" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors text-xl"
      >
        ›
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors text-xl"
      >
        ‹
      </button>
    </section>
  );
}
