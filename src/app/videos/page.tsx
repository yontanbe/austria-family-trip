import Link from "next/link";

export const metadata = {
  title: "סרטוני יוטיוב | 17 ימים באוסטריה — משפחת בן חיים",
  description: "סרטוני יוטיוב מובילים על אוסטריה — מפלים, אגמים, ערים ומקומות שנבקר בהם",
};

const videoCategories = [
  {
    title: "מפלי קרימל",
    emoji: "💧",
    color: "#4a9eca",
    bg: "#f0f7ff",
    videos: [
      { title: "Krimml Waterfalls 4K — Austria's Highest Waterfall", search: "Krimml Waterfalls 4K Austria" },
      { title: "מפלי קרימל עם ילדים — המדריך המלא", search: "Krimml Wasserfall Österreich Familie" },
      { title: "Krimmler Wasserfälle — Vollständige Wanderung", search: "Krimmler Wasserfälle Wanderung 2024" },
    ],
  },
  {
    title: "האלשטאט",
    emoji: "🏘️",
    color: "#d4a017",
    bg: "#fffbf0",
    videos: [
      { title: "Hallstatt Austria 4K Drone — Most Beautiful Village", search: "Hallstatt Austria 4K drone" },
      { title: "האלשטאט — הכפר היפה בעולם", search: "Hallstatt הכי יפה אוסטריה" },
      { title: "Hallstatt Walking Tour — Full Village Guide", search: "Hallstatt walking tour guide 2024" },
    ],
  },
  {
    title: "גרוסגלוקנר",
    emoji: "🏔️",
    color: "#1a3d2b",
    bg: "#f0f7f3",
    videos: [
      { title: "Grossglockner High Alpine Road 4K Drive", search: "Grossglockner High Alpine Road 4K drive 2024" },
      { title: "הדרך הנופית הגדולה — גרוסגלוקנר", search: "Grossglockner Hochalpenstraße scenic drive" },
      { title: "Grossglockner mit der Familie", search: "Grossglockner Familie Kinder Österreich" },
    ],
  },
  {
    title: "אינסברוק",
    emoji: "🌟",
    color: "#cc3333",
    bg: "#fff5f5",
    videos: [
      { title: "Innsbruck Austria — Complete City Guide", search: "Innsbruck Austria city guide 2024" },
      { title: "Innsbruck Old Town Walking Tour 4K", search: "Innsbruck old town walking tour 4K" },
      { title: "Nordkette Cable Car — Innsbruck to 2300m", search: "Nordkette cable car Innsbruck 4K" },
    ],
  },
  {
    title: "אגם אכן",
    emoji: "🌊",
    color: "#4a9eca",
    bg: "#f0f7ff",
    videos: [
      { title: "Achensee Tirol — Austria's Most Beautiful Lake", search: "Achensee Tirol 4K drone" },
      { title: "AirRofan Rofan Seilbahn — Flying over Achensee", search: "AirRofan Rofan seilbahn Achensee" },
      { title: "Achensee mit Kindern — Familie Urlaub Tirol", search: "Achensee Kinder Familie Tirol" },
    ],
  },
  {
    title: "מפל שטויבן",
    emoji: "💧",
    color: "#1a3d2b",
    bg: "#f0f7f3",
    videos: [
      { title: "Stuibenfall — Highest Waterfall in Tyrol", search: "Stuibenfall Ötztal waterfall 4K" },
      { title: "Stuibenfall Hängebrücke — Suspended Bridge Walk", search: "Stuibenfall Hängebrücke Hike 2024" },
      { title: "מפל שטויבן עם גשרי המתכת", search: "Stuibenfall Hike Langenfeld Austria" },
    ],
  },
  {
    title: "Area 47 — פארק המים",
    emoji: "🏊",
    color: "#cc3333",
    bg: "#fff5f5",
    videos: [
      { title: "Area 47 Water Park — Extreme Fun in Tyrol", search: "Area 47 water park Austria 2024" },
      { title: "Area 47 Haiming — Complete Review", search: "Area 47 Haiming Tirol review" },
    ],
  },
  {
    title: "עמק הצילרטל",
    emoji: "🏔️",
    color: "#d4a017",
    bg: "#fffbf0",
    videos: [
      { title: "Zillertal Valley Austria — Stunning Alpine Drive", search: "Zillertal Valley Austria 4K 2024" },
      { title: "Mayrhofen Zillertal — Complete Guide", search: "Mayrhofen Zillertal guide Austria" },
      { title: "Zillertal mit Kindern — Familien Urlaub", search: "Zillertal Kinder Familie Urlaub Tirol" },
    ],
  },
  {
    title: "טרמה וספא",
    emoji: "♨️",
    color: "#4a9eca",
    bg: "#f0f7ff",
    videos: [
      { title: "Aqua Dome Längenfeld — Austria's Most Stunning Spa", search: "Aqua Dome Längenfeld Austria tour" },
      { title: "Therme Amadé — Water Park Salzburg", search: "Therme Amadé Altenmarkt water park" },
    ],
  },
  {
    title: "סברובסקי קריסטל",
    emoji: "💎",
    color: "#1a3d2b",
    bg: "#f0f7f3",
    videos: [
      { title: "Swarovski Crystal Worlds — Full Tour 4K", search: "Swarovski Crystal Worlds Wattens tour 4K" },
      { title: "Kristallwelten Wattens — Innsbruck Day Trip", search: "Swarovski Kristallwelten Wattens Tirol" },
    ],
  },
  {
    title: "ערים ותרבות",
    emoji: "🏙️",
    color: "#6b7280",
    bg: "#f5f5f5",
    videos: [
      { title: "Salzburg Austria 4K — City Guide", search: "Salzburg Austria 4K city guide 2024" },
      { title: "Hellbrunn Palace Trick Fountains — Salzburg", search: "Hellbrunn Palace trick fountains Salzburg" },
      { title: "Haus der Natur Salzburg — Natural History Museum", search: "Haus der Natur Salzburg museum tour" },
    ],
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3d2b] to-[#0f1a14] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-5xl mb-4">▶️</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">סרטוני יוטיוב</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            קישורים ישירים לסרטונים הטובים ביותר על כל מקום שנבקר בו — בעברית ובאנגלית
          </p>
          <div className="inline-flex gap-4">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 border border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-colors">
              ← חזרה לבית
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            לחצו על כל סרטון — הלחיצה תפתח את <strong>חיפוש יוטיוב</strong> עם תוצאות עדכניות לאותו מקום 🎬
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8">
          {videoCategories.map((cat) => (
            <div key={cat.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ backgroundColor: cat.bg, borderBottom: `3px solid ${cat.color}` }}
              >
                <span className="text-3xl">{cat.emoji}</span>
                <h2 className="text-xl font-black" style={{ color: cat.color }}>{cat.title}</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {cat.videos.map((video, i) => (
                  <a
                    key={i}
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.search)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-black"
                      style={{ backgroundColor: cat.color }}
                    >
                      ▶
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 group-hover:text-[#1a3d2b] transition-colors text-sm md:text-base truncate">
                        {video.title}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5 truncate">{video.search}</div>
                    </div>
                    <div className="flex-shrink-0 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <section className="py-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a3d2b] text-white font-bold rounded-full hover:bg-[#2d6b4a] transition-colors shadow-sm"
        >
          ← חזרה לתוכנית הטיול
        </Link>
      </section>
    </div>
  );
}
