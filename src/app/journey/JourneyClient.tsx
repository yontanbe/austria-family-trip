"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { days } from "@/data/days";
import { cities, allRestaurants, weeks } from "@/data/journeyData";

type TabType = "overview" | "weekly" | "addresses" | "restaurants" | "cities";

const regionColors: Record<string, string> = {
  salzburg: "#d4a017",
  tyrol: "#4a9eca",
  transit: "#6b7280",
};

const regionEmoji: Record<string, string> = {
  salzburg: "🌟",
  tyrol: "🏔️",
  transit: "🚗",
};

// Car animation along a route
function AnimatedRoute({ activeDay }: { activeDay: number }) {
  const totalDays = 17;
  const progress = ((activeDay - 1) / (totalDays - 1)) * 100;

  // Route waypoints as SVG path percentages (simplified Austria west→east→tyrol)
  const routePoints = [
    { x: 52, y: 35 }, // Salzburg Airport
    { x: 48, y: 42 }, // Flachau
    { x: 45, y: 50 }, // Hallein/Werfen
    { x: 43, y: 52 }, // St. Johann
    { x: 35, y: 60 }, // Grossglockner
    { x: 42, y: 40 }, // Hallstatt
    { x: 50, y: 32 }, // Salzburg City
    { x: 48, y: 42 }, // Back base
    { x: 28, y: 55 }, // Krimml
    { x: 22, y: 48 }, // Zillertal
    { x: 18, y: 38 }, // Innsbruck
    { x: 20, y: 30 }, // Achensee
    { x: 15, y: 50 }, // Ötztal
    { x: 12, y: 45 }, // Area 47
    { x: 22, y: 38 }, // Waidring
    { x: 20, y: 32 }, // Leutasch
    { x: 18, y: 48 }, // Aqua Dome
    { x: 18, y: 38 }, // Innsbruck Airport
  ];

  const currentPoint = routePoints[Math.min(activeDay - 1, routePoints.length - 1)];

  return (
    <div className="relative w-full bg-[#0f2018] rounded-2xl overflow-hidden" style={{ height: "280px" }}>
      {/* Austria SVG Map Background */}
      <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full opacity-20">
        {/* Simplified Austria outline */}
        <path
          d="M 5,45 L 10,35 L 20,30 L 35,28 L 50,25 L 65,28 L 80,32 L 90,38 L 92,45 L 88,55 L 75,58 L 60,60 L 45,58 L 30,60 L 18,58 L 8,52 Z"
          fill="#1a3d2b"
          stroke="#2d6b4a"
          strokeWidth="0.5"
        />
        {/* Mountain icons */}
        {[{x:25,y:45},{x:40,y:40},{x:55,y:42},{x:70,y:44}].map((m,i)=>(
          <text key={i} x={m.x} y={m.y} fontSize="4" fill="#4a9eca" opacity="0.6">▲</text>
        ))}
        {/* Lake icons */}
        <ellipse cx="42" cy="42" rx="2" ry="1" fill="#4a9eca" opacity="0.4"/>
        <ellipse cx="20" cy="30" rx="2.5" ry="1" fill="#4a9eca" opacity="0.4"/>
      </svg>

      {/* Route line */}
      <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full">
        {/* Full route (faded) */}
        <polyline
          points={routePoints.map(p => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="rgba(212,160,23,0.3)"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        {/* Completed route */}
        <polyline
          points={routePoints.slice(0, activeDay).map(p => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Day dots */}
        {routePoints.slice(0, 17).map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={i === activeDay - 1 ? "2.5" : "1.2"}
            fill={i < activeDay ? "#d4a017" : i === activeDay - 1 ? "#ffffff" : "#4a9eca55"}
            stroke={i === activeDay - 1 ? "#d4a017" : "none"}
            strokeWidth="0.8"
          />
        ))}
        {/* Car (animated) */}
        <g transform={`translate(${currentPoint.x - 2.5},${currentPoint.y - 2.5})`}>
          <rect width="5" height="4" rx="1" fill="#d4a017"/>
          <rect x="0.5" y="-1" width="4" height="2" rx="0.5" fill="#d4a017"/>
          <circle cx="1.2" cy="4" r="1" fill="#0f1a14"/>
          <circle cx="3.8" cy="4" r="1" fill="#0f1a14"/>
          <text x="2.5" y="3" fontSize="2.5" textAnchor="middle" fill="#0f1a14">🚗</text>
        </g>
      </svg>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-[#d4a017] transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Current location label */}
      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2 text-white text-xs">
        <div className="font-black text-[#d4a017]">יום {activeDay} / 17</div>
        <div className="font-medium">{days[activeDay - 1]?.title}</div>
        <div className="text-white/60 text-xs">{progress.toFixed(0)}% הושלם</div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-3 flex items-center gap-3 text-xs">
        <div className="flex items-center gap-1 text-[#d4a017]"><span>●</span><span>ביקרנו</span></div>
        <div className="flex items-center gap-1 text-white/40"><span>○</span><span>עתידי</span></div>
      </div>

      {/* Map title */}
      <div className="absolute top-3 left-3 text-white/40 text-xs font-bold">🗺️ מסלול אוסטריה</div>
    </div>
  );
}

// Day timeline item
function DayItem({ day, isActive, onClick }: {
  day: typeof days[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const color = regionColors[day.region];
  return (
    <div
      className={`flex items-start gap-3 cursor-pointer group transition-all ${isActive ? "opacity-100" : "opacity-70 hover:opacity-90"}`}
      onClick={onClick}
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm transition-all shadow-md"
          style={{
            backgroundColor: isActive ? color : "#374151",
            transform: isActive ? "scale(1.15)" : "scale(1)",
            boxShadow: isActive ? `0 0 16px ${color}88` : "none",
          }}
        >
          {day.day}
        </div>
        {day.day < 17 && (
          <div
            className="w-0.5 h-8 mt-1"
            style={{ backgroundColor: isActive ? color + "88" : "#374151" }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-4 ${isActive ? "text-white" : "text-gray-400"}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold" style={{ color }}>
            {regionEmoji[day.region]} {day.subtitle}
          </span>
        </div>
        <div className="font-bold text-base leading-tight mb-1">{day.title}</div>
        {isActive && (
          <div className="text-gray-300 text-xs leading-relaxed mb-2 line-clamp-2">
            {day.description.slice(0, 120)}...
          </div>
        )}
        {isActive && (
          <div className="flex flex-wrap gap-1 mb-2">
            {day.tags.slice(0, 4).map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/80">
                {tag}
              </span>
            ))}
          </div>
        )}
        {isActive && (
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>🎯 {day.attractions.length} אטרקציות</span>
            <span>🍽️ {day.restaurants.length} מסעדות</span>
            <Link
              href={`/days/${day.day}`}
              className="text-[#4a9eca] font-bold hover:text-[#7ec8e3] mr-auto"
            >
              פרטים מלאים →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function JourneyClient() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [activeDay, setActiveDay] = useState(1);
  const [restaurantFilter, setRestaurantFilter] = useState("הכל");
  const [cityFilter, setCityFilter] = useState("הכל");
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-play animation
  const startAnimation = () => {
    if (isAnimating) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsAnimating(false);
      return;
    }
    setIsAnimating(true);
    setActiveDay(1);
    intervalRef.current = setInterval(() => {
      setActiveDay(prev => {
        if (prev >= 17) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsAnimating(false);
          return 17;
        }
        return prev + 1;
      });
    }, 800);
  };

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const tabs: { id: TabType; label: string; emoji: string }[] = [
    { id: "overview", label: "ציר זמן", emoji: "📅" },
    { id: "weekly", label: "שבועי/חודשי", emoji: "📆" },
    { id: "addresses", label: "כל הכתובות", emoji: "📍" },
    { id: "restaurants", label: "מסעדות", emoji: "🍽️" },
    { id: "cities", label: "ערים", emoji: "🏘️" },
  ];

  const priceFilters = ["הכל", "€", "€€", "€€€"];
  const cityFiltersOptions = ["הכל", "זלצבורג", "טירול", "גרמניה"];

  return (
    <div className="min-h-screen bg-[#0f1a14] text-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0a1208] to-[#0f1a14] pt-8 pb-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-[#4a9eca] text-sm font-bold mb-2">📖 יומן מסע</div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            17 ימים באוסטריה
            <span className="text-[#d4a017]"> — משפחת בן חיים</span>
          </h1>
          <p className="text-white/60 text-sm mb-6">
            לו&quot;ז מלא, מפה אינטראקטיבית, כל הכתובות ומסעדות במקום אחד
          </p>

          {/* Animated Route Map */}
          <div className="mb-4">
            <AnimatedRoute activeDay={activeDay} />
          </div>

          {/* Day selector + play button */}
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={startAnimation}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                isAnimating
                  ? "bg-[#cc3333] text-white"
                  : "bg-[#d4a017] text-[#0f1a14]"
              }`}
            >
              {isAnimating ? "⏹ עצור" : "▶ הפעל מסלול"}
            </button>
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-1 pb-1">
                {days.map(d => (
                  <button
                    key={d.day}
                    onClick={() => setActiveDay(d.day)}
                    className="flex-shrink-0 w-8 h-8 rounded-full text-xs font-bold transition-all"
                    style={{
                      backgroundColor: d.day === activeDay
                        ? regionColors[d.region]
                        : d.day < activeDay
                        ? regionColors[d.region] + "44"
                        : "#1a3d2b",
                      color: d.day === activeDay ? "white" : "rgba(255,255,255,0.7)",
                    }}
                  >
                    {d.day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-[#0f1a14]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#1a3d2b] text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* ===== TAB: OVERVIEW (Timeline) ===== */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Timeline */}
            <div>
              <h2 className="text-xl font-black mb-4 text-[#d4a017]">📅 ציר זמן יומי</h2>
              <div className="space-y-0">
                {days.map(day => (
                  <DayItem
                    key={day.day}
                    day={day}
                    isActive={day.day === activeDay}
                    onClick={() => setActiveDay(day.day)}
                  />
                ))}
              </div>
            </div>

            {/* Active Day Detail */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              {(() => {
                const day = days[activeDay - 1];
                const color = regionColors[day.region];
                return (
                  <div className="bg-[#1a2e1f] rounded-2xl overflow-hidden border border-white/10">
                    {/* Day Hero */}
                    <div className="relative h-48">
                      <img
                        src={day.heroImage}
                        alt={day.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1f] to-transparent"></div>
                      <div className="absolute bottom-3 right-4">
                        <div className="text-white/60 text-xs">{day.subtitle}</div>
                        <h3 className="text-white font-black text-2xl">יום {day.day}: {day.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {day.description}
                      </p>

                      {/* Attractions */}
                      <div className="mb-4">
                        <div className="text-xs font-bold text-[#d4a017] mb-2">🎯 אטרקציות היום</div>
                        {day.attractions.map((a, i) => (
                          <div key={i} className="flex items-start gap-2 py-2 border-b border-white/5 last:border-0">
                            <span className="text-sm mt-0.5">📌</span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-white">{a.hebrewName}</div>
                              <div className="text-xs text-white/50 truncate">{a.address}</div>
                              <div className="text-xs text-white/60 mt-0.5">{a.tip}</div>
                            </div>
                            <a
                              href={a.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 text-[#4a9eca] text-xs font-bold hover:text-[#7ec8e3]"
                            >
                              🗺️
                            </a>
                          </div>
                        ))}
                      </div>

                      {/* Restaurants */}
                      <div className="mb-4">
                        <div className="text-xs font-bold text-[#4a9eca] mb-2">🍽️ לאכול היום</div>
                        {day.restaurants.map((r, i) => (
                          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                            <span className="text-sm">🥗</span>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-medium text-white">{r.name}</span>
                              <span className="text-xs text-white/50 mr-2">— {r.dish}</span>
                            </div>
                            <span className="text-xs font-bold text-[#d4a017]">{r.priceRange}</span>
                          </div>
                        ))}
                      </div>

                      {/* Practical */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {day.gasStation && (
                          <div className="bg-white/5 rounded-xl p-2 text-center">
                            <div className="text-lg">⛽</div>
                            <div className="text-xs text-white/60">דלק</div>
                            <div className="text-xs text-white font-medium truncate">{day.gasStation.name}</div>
                          </div>
                        )}
                        {day.supermarket && (
                          <div className="bg-white/5 rounded-xl p-2 text-center">
                            <div className="text-lg">🛒</div>
                            <div className="text-xs text-white/60">סופר</div>
                            <div className="text-xs text-white font-medium truncate">{day.supermarket.name}</div>
                          </div>
                        )}
                        <div className="bg-white/5 rounded-xl p-2 text-center">
                          <div className="text-lg">🏡</div>
                          <div className="text-xs text-white/60">לינה</div>
                          <div className="text-xs text-white font-medium truncate">{day.accommodation.area.split("/")[0]}</div>
                        </div>
                      </div>

                      <Link
                        href={`/days/${day.day}`}
                        className="block text-center py-3 bg-[#1a3d2b] text-white font-bold rounded-xl hover:bg-[#2d6b4a] transition-colors text-sm"
                        style={{ borderColor: color, borderWidth: "1px" }}
                      >
                        📄 פרטים מלאים ליום {day.day} →
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ===== TAB: WEEKLY ===== */}
        {activeTab === "weekly" && (
          <div>
            <h2 className="text-xl font-black mb-6 text-white">📆 תצוגה שבועית / חודשית</h2>

            {/* Month overview */}
            <div className="bg-[#1a2e1f] rounded-2xl p-6 mb-8 border border-white/10">
              <h3 className="font-bold text-[#d4a017] text-lg mb-4">🗓️ תצוגת חודש — אוגוסט</h3>
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                {["א", "ב", "ג", "ד", "ה", "ו", "ש"].map(d => (
                  <div key={d} className="text-white/40 font-bold py-1">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {/* Padding for start of August (assuming starts on Thursday = index 4) */}
                {[0,1,2,3].map(i => <div key={`pad-${i}`} />)}
                {Array.from({length: 31}, (_, i) => i + 1).map(date => {
                  const tripDay = date >= 1 && date <= 17 ? date : null;
                  const dayData = tripDay ? days[tripDay - 1] : null;
                  const color = dayData ? regionColors[dayData.region] : null;
                  return (
                    <div
                      key={date}
                      className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs cursor-pointer transition-all ${
                        tripDay ? "hover:opacity-90" : "opacity-30"
                      }`}
                      style={{
                        backgroundColor: color ? color + "33" : "#1a3d2b33",
                        border: tripDay ? `1px solid ${color}55` : "1px solid transparent",
                      }}
                      onClick={() => {
                        if (tripDay) { setActiveDay(tripDay); setActiveTab("overview"); }
                      }}
                    >
                      <span className="text-white/80 font-bold">{date}</span>
                      {tripDay && (
                        <span className="text-xs" style={{ color: color || "white" }}>
                          {regionEmoji[dayData?.region || "transit"]}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 mt-4 text-xs">
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#d4a017]/30 border border-[#d4a017]/50 inline-block"></span><span className="text-white/60">🌟 זלצבורג (ימים 1-8)</span></div>
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#4a9eca]/30 border border-[#4a9eca]/50 inline-block"></span><span className="text-white/60">🏔️ טירול (ימים 9-17)</span></div>
              </div>
            </div>

            {/* Weekly cards */}
            {weeks.map(week => (
              <div key={week.week} className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm"
                    style={{ backgroundColor: week.color }}
                  >
                    {week.week}
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg">{week.title}</h3>
                    <p className="text-white/50 text-xs">בסיס: {week.base}</p>
                  </div>
                </div>
                <div className="bg-[#1a2e1f] rounded-2xl p-4 mb-2 border border-white/10">
                  <p className="text-white/70 text-sm mb-4">{week.theme}</p>
                  <div className="grid grid-cols-7 gap-2">
                    {week.days.map(dayNum => {
                      const d = days[dayNum - 1];
                      return (
                        <button
                          key={dayNum}
                          onClick={() => { setActiveDay(dayNum); setActiveTab("overview"); }}
                          className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-center"
                        >
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
                            style={{ backgroundColor: week.color }}
                          >
                            {dayNum}
                          </div>
                          <div className="text-white/60 text-xs leading-tight line-clamp-2">{d?.title}</div>
                          <div className="text-xs">{regionEmoji[d?.region || "transit"]}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== TAB: ALL ADDRESSES ===== */}
        {activeTab === "addresses" && (
          <div>
            <h2 className="text-xl font-black mb-6 text-white">📍 כל הכתובות במקום אחד</h2>
            <div className="space-y-4">
              {days.map(day => (
                <div key={day.day} className="bg-[#1a2e1f] rounded-2xl overflow-hidden border border-white/10">
                  <div
                    className="px-5 py-3 flex items-center gap-3"
                    style={{ backgroundColor: regionColors[day.region] + "33" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                      style={{ backgroundColor: regionColors[day.region] }}
                    >
                      {day.day}
                    </div>
                    <div>
                      <div className="font-black text-white">יום {day.day}: {day.title}</div>
                      <div className="text-white/50 text-xs">{day.subtitle}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      {day.attractions.map((a, i) => (
                        <div key={i} className="flex items-start gap-2 py-1.5 border-b border-white/5 last:border-0">
                          <span className="text-sm flex-shrink-0 mt-0.5">🎯</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-white">{a.hebrewName}</div>
                            <div className="text-xs text-white/50">{a.address}</div>
                            {a.openHours && <div className="text-xs text-white/40">🕐 {a.openHours}</div>}
                            {a.price && <div className="text-xs text-[#d4a017]">💶 {a.price}</div>}
                          </div>
                          <a
                            href={a.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 px-2 py-1 bg-[#4a9eca]/20 text-[#4a9eca] rounded-lg text-xs font-bold hover:bg-[#4a9eca]/30 transition-colors"
                          >
                            🗺️ מפה
                          </a>
                        </div>
                      ))}
                      {/* Accommodation */}
                      <div className="flex items-start gap-2 py-1.5">
                        <span className="text-sm flex-shrink-0 mt-0.5">🏡</span>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">{day.accommodation.area}</div>
                          <div className="text-xs text-white/50">{day.accommodation.recommendedType}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== TAB: RESTAURANTS ===== */}
        {activeTab === "restaurants" && (
          <div>
            <h2 className="text-xl font-black mb-4 text-white">🍽️ כל המסעדות — 17 ימים</h2>

            {/* Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
              {priceFilters.map(f => (
                <button
                  key={f}
                  onClick={() => setRestaurantFilter(f)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    restaurantFilter === f
                      ? "bg-[#d4a017] text-[#0f1a14]"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allRestaurants
                .filter(r => restaurantFilter === "הכל" || r.price === restaurantFilter)
                .map((r, i) => (
                  <div key={i} className="bg-[#1a2e1f] rounded-2xl p-4 border border-white/10 adventure-card">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-xs font-bold mb-0.5" style={{ color: regionColors[r.day <= 8 ? "salzburg" : "tyrol"] }}>
                          {regionEmoji[r.day <= 8 ? "salzburg" : "tyrol"]} יום {r.day} — {r.city}
                        </div>
                        <h3 className="font-bold text-white text-base">{r.name}</h3>
                        <div className="text-white/50 text-xs">{r.type}</div>
                      </div>
                      <span className="text-[#d4a017] font-black text-sm">{r.price}</span>
                    </div>
                    <div className="bg-[#d4a017]/10 rounded-xl p-2 mb-3">
                      <div className="text-xs text-[#d4a017] font-bold">🍴 מנה מומלצת</div>
                      <div className="text-sm text-white/80 font-medium">{r.dish}</div>
                    </div>
                    <div className="text-xs text-white/40 flex items-center gap-1">
                      <span>📍</span><span>{r.address}</span>
                    </div>
                    <div className="mt-2">
                      <Link href={`/days/${r.day}`} className="text-xs text-[#4a9eca] hover:text-[#7ec8e3] font-semibold">
                        → לפרטי יום {r.day}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ===== TAB: CITIES ===== */}
        {activeTab === "cities" && (
          <div>
            <h2 className="text-xl font-black mb-4 text-white">🏘️ ערים ועיירות — מידע מעמיק</h2>

            {/* Region filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
              {cityFiltersOptions.map(f => (
                <button
                  key={f}
                  onClick={() => setCityFilter(f)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    cityFilter === f
                      ? "bg-[#1a3d2b] text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {cities
                .filter(c => {
                  if (cityFilter === "הכל") return true;
                  if (cityFilter === "זלצבורג") return c.region.includes("זלצבורג");
                  if (cityFilter === "טירול") return c.region.includes("טירול");
                  if (cityFilter === "גרמניה") return c.name.includes("Mittenwald");
                  return true;
                })
                .map((city, i) => (
                  <div key={i} className="bg-[#1a2e1f] rounded-2xl p-5 border border-white/10 adventure-card">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-black text-white text-lg">{city.hebrewName}</h3>
                        <div className="text-white/40 text-xs">{city.name}</div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-[#4a9eca]">
                          {city.region}
                          {city.altitude && <span>· ⛰️ {city.altitude}</span>}
                          {city.population && <span>· 👥 {city.population}</span>}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {city.days.map(d => (
                          <Link
                            key={d}
                            href={`/days/${d}`}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white transition-colors hover:opacity-80"
                            style={{ backgroundColor: d <= 8 ? "#d4a017" : "#4a9eca" }}
                          >
                            {d}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mb-4">{city.description}</p>

                    {/* Must See */}
                    <div className="mb-3">
                      <div className="text-xs font-bold text-[#d4a017] mb-1.5">⭐ חובה לראות</div>
                      <ul className="space-y-1">
                        {city.mustSee.slice(0, 3).map((item, j) => (
                          <li key={j} className="text-xs text-white/70 flex items-start gap-1.5">
                            <span className="text-[#d4a017] flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Local food */}
                    <div className="mb-3">
                      <div className="text-xs font-bold text-[#4a9eca] mb-1.5">🍴 אוכל מקומי</div>
                      <div className="flex flex-wrap gap-1">
                        {city.localFood.slice(0, 2).map((food, j) => (
                          <span key={j} className="text-xs bg-[#4a9eca]/15 text-[#7ec8e3] px-2 py-0.5 rounded-full">{food.split(" — ")[0]}</span>
                        ))}
                      </div>
                    </div>

                    {/* Practical row */}
                    <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-white/40 mb-0.5">⛽</div>
                        <div className="text-white/70 text-xs leading-tight">{city.nearestGas.split(",")[0]}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-white/40 mb-0.5">🛒</div>
                        <div className="text-white/70 text-xs leading-tight">{city.nearestSupermarket.split(",")[0]}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-white/40 mb-0.5">🅿️</div>
                        <div className="text-white/70 text-xs leading-tight">{city.parking.split(" ")[0]} {city.parking.split(" ")[1]}</div>
                      </div>
                    </div>

                    {/* Local tip */}
                    <div className="bg-[#1a3d2b]/50 rounded-xl p-3 mb-3">
                      <div className="text-xs font-bold text-[#7ec8e3] mb-1">💡 טיפ מקומי</div>
                      <p className="text-xs text-white/70">{city.localTip}</p>
                    </div>

                    <a
                      href={city.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-2 bg-[#1a3d2b] text-white text-xs font-semibold rounded-xl hover:bg-[#2d6b4a] transition-colors"
                    >
                      🗺️ פתח ב-Google Maps
                    </a>
                  </div>
                ))}
            </div>
          </div>
        )}

      </div>

      {/* Back to home */}
      <div className="max-w-6xl mx-auto px-4 pb-12 text-center">
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3d2b] text-white font-bold rounded-full hover:bg-[#2d6b4a] transition-colors">
          <span>→</span><span>חזרה לדף הבית</span>
        </Link>
      </div>
    </div>
  );
}
