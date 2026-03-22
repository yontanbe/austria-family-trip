import Link from "next/link";
import SafeImage from "@/components/SafeImage";

export const metadata = {
  title: "אגמים | 17 ימים באוסטריה — משפחת בן חיים",
  description: "האגמים היפים ביותר שנבקר בהם — האלשטאט, גוסאו, אכן, יגרזה ועוד",
};

const lakes = [
  {
    name: "Hallstatter See",
    hebrewName: "אגם האלשטאט",
    region: "זלצבורג — Salzkammergut",
    day: 5,
    image: "https://images.unsplash.com/photo-AwXz7lGkOqM?auto=format&fit=crop&w=800&q=80",
    description: "האגם הכי מצולם באוסטריה — הכפר האלשטאט יושב על שפתו ונשקף בשלמות במים. מראה אחד מהיפים שתראו בחייכם.",
    color: "#4a9eca",
    altitude: "508 מטר",
    size: "8.6 קמ\"ר",
    tip: "הגיעו ב-8:00 לפני ההמונים. נקודת התצפית ברכבל נותנת את הזווית הטובה ביותר.",
    activities: ["שייט בסירה", "ביקור בכפר", "רכבל לנקודת תצפית"],
    parking: "חניון בתשלום — €6 ליום",
    googleMapsUrl: "https://maps.google.com/?q=Hallstatter+See+4830+Austria",
    featured: true,
  },
  {
    name: "Gosausee",
    hebrewName: "אגם גוסאו",
    region: "זלצבורג — Gosau",
    day: 5,
    image: "https://images.unsplash.com/photo-ELZleqyQcQE?auto=format&fit=crop&w=800&q=80",
    description: "הסוד שהתיירים מפספסים: יפה פי עשרה מהאלשטאט! קרחון Dachstein ברקע מוסיף קסם של אחר עולם.",
    color: "#1a3d2b",
    altitude: "933 מטר",
    size: "1.6 קמ\"ר",
    tip: "שכרו סירה (€15/30 דקות). ישיבה על שפת האגם עם נוף לקרחון — פיקניק מושלם.",
    activities: ["שכירת סירה", "הליכה מסביב לאגם", "נוף לקרחון Dachstein"],
    parking: "חניון €5",
    googleMapsUrl: "https://maps.google.com/?q=Gosausee+4824+Gosau",
    featured: false,
  },
  {
    name: "Achensee",
    hebrewName: "אגם אכן",
    region: "טירול — Achenkirch",
    day: 11,
    image: "https://images.unsplash.com/photo-LcMLt2tE4kY?auto=format&fit=crop&w=800&q=80",
    description: "הפיורד של טירול — האגם הגדול ביותר בטירול, ממשיך למרחק עם הרים ירוקים בשני הצדדים. נראה יותר כמו נורווגיה מאשר אוסטריה.",
    color: "#4a9eca",
    altitude: "929 מטר",
    size: "6.8 קמ\"ר",
    tip: "רכבת קיטור שנוסעת לאורך האגם, שכירת אופניים בחוף, ורכבל Rofan שמרחף מעליו.",
    activities: ["רכבת קיטור", "שכירת אופניים", "AirRofan גלישת עיט", "שחייה"],
    parking: "חניה חינמית ליד עמדת הסירות",
    googleMapsUrl: "https://maps.google.com/?q=Achensee+6215+Achenkirch+Tirol",
    featured: true,
  },
  {
    name: "Jägersee",
    hebrewName: "אגם יגרזה",
    region: "זלצבורג — Kleinarl",
    day: 1,
    image: "https://images.unsplash.com/photo-LcMLt2tE4kY?auto=format&fit=crop&w=800&q=80",
    description: "הסוד של המקומיים — אגם קטן, שקט ופסטורלי ממש ליד בסיס הלינה. הליכה נינוחה של 45 דקות סביבו מושלמת ליום הגעה.",
    color: "#d4a017",
    altitude: "1,100 מטר",
    size: "0.16 קמ\"ר",
    tip: "לעת ערב האגם זוהר בצהוב-כסף. ברבורים! מקומיים מגיעים עם בירה ביום שישי.",
    activities: ["הליכה מסביב לאגם", "תצפית על ברבורים", "פיקניק"],
    parking: "חניה חינמית",
    googleMapsUrl: "https://maps.google.com/?q=Jagersee+Kleinarl+Salzburg",
    featured: false,
  },
  {
    name: "Zell am See",
    hebrewName: "אגם זל אם זה",
    region: "זלצבורג — Zell am See",
    day: 8,
    image: "https://images.unsplash.com/photo-UV3RF73x-v0?auto=format&fit=crop&w=800&q=80",
    description: "עיירת נופש נהדרת על שפת אגם כחול שמקיף הרים — עצירת ביניים אידיאלית ביום המעבר מזלצבורג לטירול.",
    color: "#1a3d2b",
    altitude: "757 מטר",
    size: "4.7 קמ\"ר",
    tip: "תעצרו ל-1-2 שעות בעיירה — קפה על שפת האגם ותמונות מדהימות. רכבל Schmittenhöhe עם נוף פנורמי.",
    activities: ["קפה על שפת האגם", "שחייה", "רכבל Schmittenhöhe"],
    parking: "חניה בתשלום במרכז העיר",
    googleMapsUrl: "https://maps.google.com/?q=Zell+am+See+Austria",
    featured: false,
  },
  {
    name: "Klammsee",
    hebrewName: "אגם קלאמזה",
    region: "זלצבורג — Kaprun",
    day: null,
    image: "https://images.unsplash.com/photo-a9qsM5Z1Sbg?auto=format&fit=crop&w=800&q=80",
    description: "הפרס בסוף נקיק זיגמונד טון — אגם שקט ורגוע עם מגרש פיקניק מושלם. נגיש בקלות לכל המשפחה.",
    color: "#6b7280",
    altitude: "800 מטר",
    size: "קטן",
    tip: "הגיעו עם פיקניק! מגרש יפה ליד האגם עם שולחנות ומקומות ישיבה.",
    activities: ["פיקניק", "הליכה קצרה", "נקיק זיגמונד טון בדרך"],
    parking: "חניה בכפר Kaprun",
    googleMapsUrl: "https://maps.google.com/?q=Klammsee+Kaprun+Salzburg",
    featured: false,
  },
];

export default function LakesPage() {
  const featured = lakes.filter((l) => l.featured);
  const rest = lakes.filter((l) => !l.featured);

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <SafeImage
          src="https://images.unsplash.com/photo-LcMLt2tE4kY?auto=format&fit=crop&w=1600&q=90"
          alt="אגמי אוסטריה"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 md:px-14">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
            🌊 אגמים
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-2">האגמים שלנו</h1>
          <p className="text-white/80 text-lg">6 אגמים מדהימים בדרך — כל אחד ייחודי בצורתו</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-1">🌊</div>
            <div className="text-2xl font-black text-[#1a3d2b]">6</div>
            <div className="text-xs text-gray-500">אגמים</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-1">🏔️</div>
            <div className="text-2xl font-black text-[#1a3d2b]">929m</div>
            <div className="text-xs text-gray-500">הגובה הממוצע</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-1">🏊</div>
            <div className="text-2xl font-black text-[#1a3d2b]">22°C</div>
            <div className="text-xs text-gray-500">טמפרטורת מים באוגוסט</div>
          </div>
        </div>

        {/* Featured lakes */}
        <h2 className="text-2xl font-black text-[#1a3d2b] mb-6">אגמים מובילים</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featured.map((lake) => (
            <div key={lake.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 adventure-card">
              <div className="relative h-56">
                <SafeImage src={lake.image} alt={lake.hebrewName} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: lake.color + "cc" }}>
                    🌊 {lake.hebrewName}
                  </div>
                </div>
                {lake.day && (
                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-2 py-1 rounded-full">
                    יום {lake.day}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-black text-[#1a3d2b] text-xl">{lake.hebrewName}</h3>
                    <div className="text-xs text-gray-400">{lake.region}</div>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <div>גובה: {lake.altitude}</div>
                    <div>שטח: {lake.size}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{lake.description}</p>
                <div className="bg-[#f0f7f3] rounded-xl p-3 mb-4">
                  <div className="text-xs font-semibold text-[#1a3d2b] mb-1">💡 טיפ</div>
                  <div className="text-xs text-gray-600">{lake.tip}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lake.activities.map((act) => (
                    <span key={act} className="px-2 py-1 bg-[#f0f7f3] text-[#1a3d2b] text-xs rounded-full font-medium">{act}</span>
                  ))}
                </div>
                <a
                  href={lake.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 bg-[#1a3d2b] text-white text-xs font-bold rounded-xl hover:bg-[#2d6b4a] transition-colors"
                >
                  🗺️ פתח במפה
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of lakes */}
        <h2 className="text-2xl font-black text-[#1a3d2b] mb-6">עוד אגמים בדרך</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {rest.map((lake) => (
            <div key={lake.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 adventure-card">
              <div className="relative h-40">
                <SafeImage src={lake.image} alt={lake.hebrewName} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 right-3">
                  <div className="text-white font-black text-sm">{lake.hebrewName}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-400 mb-2">{lake.region}</div>
                <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">{lake.description}</p>
                <div className="text-xs text-[#4a9eca] font-semibold mb-3">💡 {lake.tip}</div>
                <a
                  href={lake.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-1.5 bg-[#f0f7f3] text-[#1a3d2b] text-xs font-bold rounded-lg hover:bg-[#1a3d2b] hover:text-white transition-colors"
                >
                  🗺️ מפה
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Swimming tips */}
        <div className="bg-gradient-to-r from-[#4a9eca] to-[#1a3d2b] rounded-2xl p-6 text-white">
          <h3 className="font-black text-xl mb-4">🏊 טיפים לשחייה באגמים</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { emoji: "🌡️", tip: "טמפרטורת מים: 18-22°C באוגוסט — ניתן לשחות!" },
              { emoji: "👙", tip: "הביאו בגדי ים — רוב האגמים מאפשרים שחייה חינמית" },
              { emoji: "⏰", tip: "הגיעו מוקדם בבוקר — פחות תיירים, מים רגועים יותר" },
              { emoji: "🚿", tip: "אחוזי מקלחות ציבוריות ליד רוב האגמים הגדולים" },
              { emoji: "🦆", tip: "ברבורים וברווזים — ילדים מתחברים! הביאו לחם" },
              { emoji: "📸", tip: "שעת הזהב (06:00-08:00) — השתקפויות הכי יפות" },
            ].map((item) => (
              <div key={item.tip} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <span className="text-sm text-white/90">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <section className="py-8 text-center">
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
