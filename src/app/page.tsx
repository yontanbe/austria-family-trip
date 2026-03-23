import Link from "next/link";
import { days } from "@/data/days";
import { waterfalls } from "@/data/waterfalls";
import DayCard from "@/components/DayCard";
import WaterfallCard from "@/components/WaterfallCard";
import SafeImage from "@/components/SafeImage";
import PhotoSlider from "@/components/PhotoSlider";

const stats = [
  { value: "17", label: "ימי טיול", emoji: "📅" },
  { value: "2", label: "אזורים", emoji: "🗺️" },
  { value: "10", label: "מפלים", emoji: "💧" },
  { value: "30+", label: "אטרקציות", emoji: "🎯" },
];

const salzburgDays = days.filter((d) => d.region === "salzburg");
const tyrolDays = days.filter((d) => d.region === "tyrol");
const top3Waterfalls = waterfalls.slice(0, 3);

const videoLinks = [
  {
    title: "מפלי קרימל",
    subtitle: "המפלים הגבוהים באירופה — 380 מטר",
    emoji: "💧",
    color: "#4a9eca",
    bg: "#f0f7ff",
    search: "Krimml Waterfalls Austria 4K",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "האלשטאט",
    subtitle: "הכפר היפה בעולם",
    emoji: "🏘️",
    color: "#d4a017",
    bg: "#fffbf0",
    search: "Hallstatt Austria village 4K drone",
    image: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "גרוסגלוקנר",
    subtitle: "הדרך הנופית הגדולה של אוסטריה",
    emoji: "🏔️",
    color: "#1a3d2b",
    bg: "#f0f7f3",
    search: "Grossglockner High Alpine Road Austria drive 4K",
    image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "אינסברוק",
    subtitle: "עיר בירת טירול",
    emoji: "🌟",
    color: "#cc3333",
    bg: "#fff5f5",
    search: "Innsbruck Austria city guide 4K",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=600&q=80",
  },
];

const budgetItems = [
  { category: "כניסות ואטרקציות", icon: "🎯", daily: "€30-60", total: "€500-900", tip: "SalzburgerLand Card חוסך עד €150 בזלצבורג" },
  { category: "אוכל", icon: "🍽️", daily: "€50-80", total: "€850-1,360", tip: "קנו ב-SPAR לבוקר, מסעדה לצהריים" },
  { category: "לינה", icon: "🏡", daily: "€120-180", total: "€2,040-3,060", tip: "דירת נופש עדיפה — מטבח + כביסה" },
  { category: "דלק ונסיעות", icon: "⛽", daily: "€30-50", total: "€510-850", tip: "ויניאט כביש מהיר — €11.50 ל-10 ימים" },
  { category: "חניות", icon: "🚗", daily: "€5-20", total: "€85-340", tip: "רוב האטרקציות יש חניה €3-8" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=90)",
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full pb-16 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span>✈️</span>
              <span>טיול משפחתי | זלצבורג + טירול | אוגוסט</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              17 ימים<br />
              <span className="text-[#7ec8e3]">באוסטריה</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-3">
              המסע של משפחת בן חיים
            </p>
            <p className="text-base text-white/70 mb-10 max-w-2xl">
              מפלים עצומים, טבע פראי, הרפתקאות לילדים ואוכל מדהים — מדריך יומי מלא לטיול שלא ישכחו
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/days/1"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a3d2b] text-white font-bold text-lg rounded-full hover:bg-[#2d6b4a] transition-all shadow-2xl"
              >
                <span>🗓️</span>
                <span>לו&quot;ז יומי</span>
              </Link>
              <Link
                href="/waterfalls"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/50 text-white font-bold text-lg rounded-full hover:bg-white/30 transition-all"
              >
                <span>💧</span>
                <span>10 המפלים</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/60 text-xs gap-2">
          <span>גלול למטה</span>
          <div className="w-0.5 h-8 bg-white/30 rounded animate-bounce"></div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1a3d2b] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-1">{stat.emoji}</div>
                <div className="text-2xl font-black text-[#d4a017]">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO SLIDER — Highlights */}
      <PhotoSlider />

      {/* TWO STARS */}
      <section className="py-16 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3d2b] mb-3">
              שתי &ldquo;כוכבות&rdquo; — הבסיסים שלנו
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              כדי לא להשתגע מאריזות — אנחנו נעים בין שני בסיסי לינה קבועים
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden h-64 adventure-card">
              <SafeImage
                src="https://images.unsplash.com/photo-1599140849279-1014532882fe?auto=format&fit=crop&w=800&q=80"
                alt="זלצבורג"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-[#d4a017] text-2xl font-black mb-1">🌟 כוכב ראשון</div>
                <h3 className="text-white font-black text-3xl mb-1">זלצבורג</h3>
                <p className="text-white/80 text-sm mb-2">ימים 1-8 | Flachau / Wagrain</p>
                <div className="flex gap-2">
                  {salzburgDays.map((d) => (
                    <Link
                      key={d.day}
                      href={`/days/${d.day}`}
                      className="w-8 h-8 bg-[#d4a017] rounded-full text-white text-xs font-bold flex items-center justify-center hover:bg-[#f0c040] transition-colors"
                    >
                      {d.day}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-64 adventure-card">
              <SafeImage
                src="https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=80"
                alt="טירול"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-[#4a9eca] text-2xl font-black mb-1">🏔️ כוכב שני</div>
                <h3 className="text-white font-black text-3xl mb-1">טירול</h3>
                <p className="text-white/80 text-sm mb-2">ימים 9-16 | Zillertal / Mayrhofen</p>
                <div className="flex gap-2">
                  {tyrolDays.map((d) => (
                    <Link
                      key={d.day}
                      href={`/days/${d.day}`}
                      className="w-8 h-8 bg-[#4a9eca] rounded-full text-white text-xs font-bold flex items-center justify-center hover:bg-[#7ec8e3] transition-colors"
                    >
                      {d.day}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SALZBURG DAYS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-[#d4a017] font-bold text-sm mb-1">🌟 כוכב ראשון</div>
              <h2 className="text-2xl md:text-3xl font-black text-[#1a3d2b]">זלצבורג — ימים 1-8</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {salzburgDays.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>
        </div>
      </section>

      {/* TRANSIT BANNER */}
      <section className="py-8 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1a3d2b] to-[#2d6b4a] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">🚗</div>
              <div className="text-white font-bold text-lg">יום 8</div>
            </div>
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-white font-black text-2xl mb-2">מעבר לטירול דרך מפלי קרימל</h3>
              <p className="text-white/80 text-sm mb-4">המפלים הגבוהים באירופה — 380 מטר, 3 מפלסים.</p>
              <Link href="/days/8" className="inline-flex items-center gap-2 px-5 py-2 bg-[#d4a017] text-white font-bold rounded-full hover:bg-[#f0c040] transition-colors text-sm">
                <span>💧</span><span>פרטי היום</span>
              </Link>
            </div>
            <div className="hidden md:block flex-shrink-0 text-6xl">🌊</div>
          </div>
        </div>
      </section>

      {/* TYROL DAYS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-[#4a9eca] font-bold text-sm mb-1">🏔️ כוכב שני</div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1a3d2b]">טירול — ימים 9-16</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tyrolDays.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>
        </div>
      </section>

      {/* LAKES SECTION */}
      <section className="py-16 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-[#4a9eca] font-bold text-sm mb-1">🌊 אגמים</div>
              <h2 className="text-2xl md:text-3xl font-black text-[#1a3d2b]">6 אגמים מדהימים בדרך</h2>
            </div>
            <Link href="/lakes" className="hidden md:flex items-center gap-2 px-5 py-2 bg-[#4a9eca] text-white font-bold rounded-full hover:bg-[#3b8ab5] transition-colors text-sm">
              כל האגמים →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
            {[
              { name: "האלשטאט", day: 5, image: "1573108724029-4c46571d6490", desc: "הכפר הכי מצולם — יושב על שפת האגם", href: "/days/5" },
              { name: "אגם אכן", day: 11, image: "1455156218388-5e61b526818b", desc: "הפיורד של טירול — ענק ודרמטי", href: "/days/11" },
              { name: "גוסאו", day: 5, image: "1506905925346-21bda4d32df4", desc: "קרחון Dachstein ברקע — מדהים", href: "/days/5" },
            ].map((lake) => (
              <Link key={lake.name} href={lake.href} className="relative rounded-2xl overflow-hidden h-52 adventure-card block group">
                <SafeImage
                  src={`https://images.unsplash.com/photo-${lake.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={lake.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <div className="text-white font-black text-xl mb-0.5">{lake.name}</div>
                  <div className="text-white/80 text-xs">{lake.desc}</div>
                </div>
                <div className="absolute top-3 left-3 bg-[#4a9eca] text-white text-xs font-bold px-2 py-1 rounded-full">
                  יום {lake.day}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center md:hidden">
            <Link href="/lakes" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4a9eca] text-white font-bold rounded-full hover:bg-[#3b8ab5] transition-colors">
              כל 6 האגמים →
            </Link>
          </div>
        </div>
      </section>

      {/* WATERFALLS */}
      <section className="py-16 bg-[#0f1a14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[#4a9eca] font-bold text-sm mb-2">💧 מפלים</div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">10 המפלים הטובים ביותר</h2>
            <p className="text-gray-400 max-w-lg mx-auto">מפלי קרימל, שטויבן, גולינג ועוד — מדורגים לפי עוצמה וחוויה</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {top3Waterfalls.map((wf) => (
              <WaterfallCard key={wf.rank} waterfall={wf} featured={wf.rank === 1} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/waterfalls" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#4a9eca] text-[#4a9eca] font-bold text-lg rounded-full hover:bg-[#4a9eca] hover:text-white transition-all">
              <span>💧</span><span>כל 10 המפלים</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BUDGET SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[#d4a017] font-bold text-sm mb-2">💰 תקציב</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3d2b] mb-3">עלויות משוערות לטיול</h2>
            <p className="text-gray-600">תחשיב ל-4 נפשות (2 מבוגרים + 2 ילדים) • 17 ימים</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {budgetItems.map((item) => (
              <div key={item.category} className="bg-[#faf8f3] rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-[#1a3d2b]">{item.category}</h3>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">יומי</span>
                  <span className="font-bold text-[#1a3d2b]">{item.daily}</span>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-500">סה״כ 17 ימים</span>
                  <span className="font-bold text-[#d4a017]">{item.total}</span>
                </div>
                <div className="text-xs text-gray-500 bg-white rounded-lg p-2">💡 {item.tip}</div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#1a3d2b] to-[#2d6b4a] rounded-2xl p-6 text-white">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-xs text-white/60 mb-1">סה״כ מינימום</div>
                <div className="text-3xl font-black text-[#d4a017]">€3,985</div>
                <div className="text-xs text-white/60">לא כולל טיסות</div>
              </div>
              <div>
                <div className="text-xs text-white/60 mb-1">סה״כ ממוצע</div>
                <div className="text-3xl font-black text-white">€5,500</div>
                <div className="text-xs text-white/60">לא כולל טיסות</div>
              </div>
              <div>
                <div className="text-xs text-white/60 mb-1">טיסות (הלוך-חזור)</div>
                <div className="text-3xl font-black text-[#4a9eca]">€2,000-4,000</div>
                <div className="text-xs text-white/60">4 כרטיסים</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS SECTION — YouTube Search Links */}
      <section className="py-16 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-red-500 font-bold text-sm mb-2">▶️ יוטיוב</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3d2b] mb-3">השראה מהדרך</h2>
            <p className="text-gray-600">לחצו על כל מקום לראות סרטונים על ביקורים אמיתיים שם</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {videoLinks.map((v) => (
              <a
                key={v.title}
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(v.search)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 adventure-card block"
              >
                <div className="relative h-44">
                  <SafeImage src={v.image} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform shadow-lg">
                      ▶
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-1">{v.emoji}</div>
                  <h3 className="font-bold text-[#1a3d2b] mb-1">{v.title}</h3>
                  <p className="text-xs text-gray-500">{v.subtitle}</p>
                  <div className="mt-3 text-xs font-semibold text-red-500">חפש ביוטיוב →</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <Link href="/videos" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-500 text-red-500 font-bold text-lg rounded-full hover:bg-red-500 hover:text-white transition-all">
              <span>▶️</span><span>כל הסרטונים לפי מקום</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ROUTE MAP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-[#1a3d2b] font-bold text-sm mb-2">🗺️ מפה</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3d2b] mb-3">המסלול שלנו</h2>
            <p className="text-gray-600">מסלול 17 הימים — מזלצבורג לטירול ובחזרה</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100" style={{ height: 400 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m58!1m12!1m3!1d709960.2!2d12.9!3d47.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x477472e0c4bdedeb%3A0xa5cef77c8b0cbf0!2sFlachau%2C+Austria!3m2!1d47.347!2d13.386!4m5!1s0x4776c9b7d7d4e5c1%3A0x6ceeb6a63d7e18!2sHallstatt%2C+Austria!3m2!1d47.5622!2d13.6493!4m5!1s0x477a6f3a93bc5f8d%3A0xd1fb3a4c4b3c4a8!2sSalzburg%2C+Austria!3m2!1d47.8095!2d13.055!4m5!1s0x477f27ba6d0b3dbd%3A0xa6d5f3f574d5c90!2sKrimml%2C+Austria!3m2!1d47.225!2d12.1703!4m5!1s0x479d6e7c1c9e6b1b%3A0x6a8db4ea4a8f5c0!2sMayrhofen%2C+Austria!3m2!1d47.1671!2d11.8644!4m5!1s0x479d3b82e7c91e49%3A0x29c228fb99e63f9e!2sInnsbruck%2C+Austria!3m2!1d47.2692!2d11.4041!5e0!3m2!1she!2sil!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מסלול הטיול באוסטריה"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-5">
            {[
              { label: "פלכאו", emoji: "🏡", days: "1-7" },
              { label: "האלשטאט", emoji: "🏘️", days: "5" },
              { label: "זלצבורג", emoji: "🎵", days: "6" },
              { label: "קרימל", emoji: "💧", days: "8" },
              { label: "מיירהופן", emoji: "🏔️", days: "9-16" },
            ].map((stop) => (
              <div key={stop.label} className="bg-[#faf8f3] rounded-xl p-3 text-center border border-gray-100">
                <div className="text-2xl mb-1">{stop.emoji}</div>
                <div className="font-bold text-[#1a3d2b] text-sm">{stop.label}</div>
                <div className="text-xs text-gray-400">יום {stop.days}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL PREVIEW */}
      <section className="py-16 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3d2b] mb-3">מה שחייבים לדעת לפני</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "⛽", title: "תחנות דלק", desc: "OMV ו-AGIP בכל מקום. תדלקו לפני עמקים!", color: "#e07b39" },
              { emoji: "🛒", title: "סופרמרקטים", desc: "SPAR, Hofer, Lidl — זול ואיכותי. ראשון = סגור!", color: "#1a3d2b" },
              { emoji: "🏡", title: "לינה", desc: "דירות Ferienwohnung — מטבח + חיסכון. הזמינו מוקדם!", color: "#4a9eca" },
              { emoji: "🎫", title: "כרטיס זלצבורג", desc: "SalzburgerLand Card — חוסך עשרות יורו. חובה!", color: "#d4a017" },
            ].map((item) => (
              <Link key={item.title} href="/tips" className="block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm adventure-card text-center hover:border-[#1a3d2b] transition-colors">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-[#1a3d2b] text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <div className="mt-3 text-xs font-semibold" style={{ color: item.color }}>קרא עוד →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
