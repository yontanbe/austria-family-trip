import Link from "next/link";
import { days } from "@/data/days";
import { waterfalls } from "@/data/waterfalls";
import DayCard from "@/components/DayCard";
import WaterfallCard from "@/components/WaterfallCard";
import VideoEmbed from "@/components/VideoEmbed";
import SafeImage from "@/components/SafeImage";

const stats = [
  { value: "17", label: "ימי טיול", emoji: "📅" },
  { value: "2", label: "אזורים", emoji: "🗺️" },
  { value: "10", label: "מפלים", emoji: "💧" },
  { value: "30+", label: "אטרקציות", emoji: "🎯" },
];

const salzburgDays = days.filter((d) => d.region === "salzburg");
const tyrolDays = days.filter((d) => d.region === "tyrol");
const top3Waterfalls = waterfalls.slice(0, 3);

const videos = [
  {
    videoId: "kQOjB5GWJPU",
    title: "אוסטריה עם ילדים — מה שחייבים לדעת",
    description: "טיפים ממשפחות שעשו את הטיול",
  },
  {
    videoId: "9D9eTM-BGKQ",
    title: "מפלי קרימל — המפלים הגבוהים באירופה",
    description: "מסלול שלם עם ילדים",
  },
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
              המסע המשפחתי המושלם
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
                src="https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?auto=format&fit=crop&w=800&q=80"
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

      {/* VIDEOS */}
      <section className="py-16 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[#cc3333] font-bold text-sm mb-2">▶️ יוטיוב</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3d2b] mb-3">השראה מהדרך</h2>
            <p className="text-gray-600">סרטונים מטיולים דומים — לדעת מה מחכה לכם</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((v) => (
              <VideoEmbed key={v.videoId} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL PREVIEW */}
      <section className="py-16 bg-white">
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
