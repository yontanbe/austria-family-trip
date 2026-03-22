import { waterfalls } from "@/data/waterfalls";
import WaterfallCard from "@/components/WaterfallCard";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

export const metadata = {
  title: "10 המפלים הטובים ביותר | אוסטריה",
  description: "מדריך מלא ל-10 המפלים המרשימים ביותר בזלצבורג וטירול — גובה, קושי, כתובות ומפות",
};

export default function WaterfallsPage() {
  const top3 = waterfalls.slice(0, 3);
  const rest = waterfalls.slice(3);

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <SafeImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80"
          alt="מפלים באוסטריה"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2018]/90 via-[#0f2018]/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#4a9eca]/30 backdrop-blur-sm border border-[#4a9eca]/40 text-white text-sm px-4 py-2 rounded-full mb-4">
              💧 מדריך מפלים
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-3">
              10 המפלים הטובים ביותר
            </h1>
            <p className="text-white/80 text-lg">
              זלצבורג וטירול — מדורגים לפי עוצמה, חוויה ומתאימות למשפחות
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro box */}
        <div className="bg-[#1a3d2b] text-white rounded-2xl p-6 mb-10">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-[#7ec8e3]">380m</div>
              <div className="text-white/70 text-sm">גובה הגדול ביותר (קרימל)</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#d4a017]">10</div>
              <div className="text-white/70 text-sm">מפלים ונקיקים</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#7ec8e3]">3</div>
              <div className="text-white/70 text-sm">אזורים שונים</div>
            </div>
          </div>
        </div>

        {/* Top 3 — Featured */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🏆</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1a3d2b]">המובחרים — Top 3</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {top3.map((wf) => (
              <WaterfallCard key={wf.rank} waterfall={wf} featured={wf.rank === 1} />
            ))}
          </div>
        </div>

        {/* Rest */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">💧</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1a3d2b]">המפלים הנוספים</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((wf) => (
              <WaterfallCard key={wf.rank} waterfall={wf} />
            ))}
          </div>
        </div>

        {/* Quick comparison table */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-black text-[#1a3d2b] text-xl">📋 טבלת השוואה מהירה</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#f0f7f3]">
                <tr>
                  <th className="py-3 px-4 text-right font-bold text-[#1a3d2b]">#</th>
                  <th className="py-3 px-4 text-right font-bold text-[#1a3d2b]">שם</th>
                  <th className="py-3 px-4 text-right font-bold text-[#1a3d2b]">גובה</th>
                  <th className="py-3 px-4 text-right font-bold text-[#1a3d2b]">קושי</th>
                  <th className="py-3 px-4 text-right font-bold text-[#1a3d2b]">זמן</th>
                  <th className="py-3 px-4 text-right font-bold text-[#1a3d2b]">יום במסלול</th>
                </tr>
              </thead>
              <tbody>
                {waterfalls.map((wf, i) => (
                  <tr key={wf.rank} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">
                      <span className="font-black text-[#1a3d2b]">#{wf.rank}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-[#1a3d2b]">{wf.hebrewName}</div>
                      <div className="text-xs text-gray-400">{wf.name}</div>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{wf.height}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        wf.difficulty === "קל" ? "bg-green-100 text-green-800" :
                        wf.difficulty === "בינוני" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>{wf.difficulty}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{wf.duration}</td>
                    <td className="py-3 px-4">
                      {wf.day ? (
                        <Link href={`/days/${wf.day}`} className="text-[#4a9eca] font-semibold hover:underline text-xs">
                          יום {wf.day}
                        </Link>
                      ) : (
                        <span className="text-gray-400 text-xs">לפי בחירה</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* General tips */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-black text-[#1a3d2b] text-xl mb-4">💡 טיפים כלליים למפלים</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "🧥", tip: "תמיד הביאו מעיל — גם ב-35 מעלות חם, ליד מפלים קר ולח." },
              { emoji: "👟", tip: "נעלי ספורט או טיול חובה — הסלעים רטובים ומחליקים." },
              { emoji: "📱", tip: "צלמו מוקדם — אחרי 10:00 יש הרבה תיירים." },
              { emoji: "☔", tip: "ימי גשם = מפלים יפים יותר ועמוסים פחות!" },
              { emoji: "🅿️", tip: "הגיעו ב-8:00 לחניה — שעת שיא מלאה בקיץ." },
              { emoji: "💧", tip: "הביאו בקבוק מים ריק — ממלאים אותו ממי המפל הנקיים!" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-[#f0f7f3] rounded-xl">
                <span className="text-lg flex-shrink-0">{item.emoji}</span>
                <p className="text-sm text-gray-700">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
