import { notFound } from "next/navigation";
import Link from "next/link";
import { days } from "@/data/days";
import { waterfalls } from "@/data/waterfalls";
import AttractionCard from "@/components/AttractionCard";
import RestaurantCard from "@/components/RestaurantCard";
import WaterfallCard from "@/components/WaterfallCard";

export function generateStaticParams() {
  return days.map((d) => ({ day: String(d.day) }));
}

export async function generateMetadata({ params }: { params: Promise<{ day: string }> }) {
  const { day: dayParam } = await params;
  const dayNum = parseInt(dayParam);
  const dayData = days.find((d) => d.day === dayNum);
  if (!dayData) return {};
  return {
    title: `יום ${dayData.day}: ${dayData.title} | אוסטריה`,
    description: dayData.description.slice(0, 150),
  };
}

const regionLabels: Record<string, { label: string; color: string; bg: string; emoji: string }> = {
  salzburg: { label: "זלצבורג", color: "#d4a017", bg: "#fffbf0", emoji: "🌟" },
  tyrol: { label: "טירול", color: "#4a9eca", bg: "#f0f7ff", emoji: "🏔️" },
  transit: { label: "מעבר", color: "#6b7280", bg: "#f5f5f5", emoji: "🚗" },
};

export default async function DayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: dayParam } = await params;
  const dayNum = parseInt(dayParam);
  const dayData = days.find((d) => d.day === dayNum);

  if (!dayData) return notFound();

  const prevDay = days.find((d) => d.day === dayNum - 1);
  const nextDay = days.find((d) => d.day === dayNum + 1);
  const region = regionLabels[dayData.region];
  const waterfallOfDay = dayData.waterfallOfDay
    ? waterfalls.find((w) => w.rank === dayData.waterfallOfDay)
    : null;

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={dayData.heroImage}
          alt={dayData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 max-w-7xl mx-auto w-full">
          {/* Navigation breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">בית</Link>
            <span>←</span>
            <span>לו&quot;ז</span>
            <span>←</span>
            <span className="text-white">יום {dayData.day}</span>
          </div>
          <div
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white w-fit mb-2"
            style={{ backgroundColor: region.color + "cc" }}
          >
            {region.emoji} {region.label}
          </div>
          <div className="text-white/80 text-sm font-medium mb-1">{dayData.subtitle}</div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            יום {dayData.day}: {dayData.title}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Day navigation */}
        <div className="flex items-center justify-between mb-8 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          {prevDay ? (
            <Link href={`/days/${prevDay.day}`} className="flex items-center gap-2 text-[#1a3d2b] hover:text-[#4a9eca] transition-colors group">
              <span className="text-lg">→</span>
              <div>
                <div className="text-xs text-gray-400">יום קודם</div>
                <div className="text-sm font-bold">{prevDay.title}</div>
              </div>
            </Link>
          ) : <div />}

          {/* Day dots */}
          <div className="hidden md:flex items-center gap-1">
            {days.map((d) => (
              <Link key={d.day} href={`/days/${d.day}`}>
                <div
                  className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: d.day === dayNum ? "#1a3d2b" : "#e5e7eb",
                    color: d.day === dayNum ? "white" : "#6b7280",
                  }}
                >
                  {d.day}
                </div>
              </Link>
            ))}
          </div>

          {nextDay ? (
            <Link href={`/days/${nextDay.day}`} className="flex items-center gap-2 text-[#1a3d2b] hover:text-[#4a9eca] transition-colors group text-left">
              <div>
                <div className="text-xs text-gray-400">יום הבא</div>
                <div className="text-sm font-bold">{nextDay.title}</div>
              </div>
              <span className="text-lg">←</span>
            </Link>
          ) : <div />}
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📖</span>
            <h2 className="font-bold text-[#1a3d2b] text-lg">על היום הזה</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{dayData.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {dayData.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#f0f7f3] text-[#1a3d2b] text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick info row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-xl font-black text-[#1a3d2b]">{dayData.attractions.length}</div>
            <div className="text-xs text-gray-500">אטרקציות</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl mb-1">🍽️</div>
            <div className="text-xl font-black text-[#1a3d2b]">{dayData.restaurants.length}</div>
            <div className="text-xs text-gray-500">מסעדות</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl mb-1">{region.emoji}</div>
            <div className="text-sm font-bold text-[#1a3d2b]">{region.label}</div>
            <div className="text-xs text-gray-500">אזור</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl mb-1">🗓️</div>
            <div className="text-xl font-black text-[#1a3d2b]">{dayData.day}/17</div>
            <div className="text-xs text-gray-500">יום</div>
          </div>
        </div>

        {/* Waterfall of the day */}
        {waterfallOfDay && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💧</span>
              <h2 className="text-2xl font-black text-[#1a3d2b]">מפל היום</h2>
            </div>
            <div className="max-w-lg">
              <WaterfallCard waterfall={waterfallOfDay} featured />
            </div>
          </div>
        )}

        {/* Attractions */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🎯</span>
            <h2 className="text-2xl font-black text-[#1a3d2b]">אטרקציות</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dayData.attractions.map((attraction, i) => (
              <AttractionCard key={i} attraction={attraction} />
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🍽️</span>
            <h2 className="text-2xl font-black text-[#1a3d2b]">איפה לאכול</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {dayData.restaurants.map((restaurant, i) => (
              <RestaurantCard key={i} restaurant={restaurant} />
            ))}
          </div>
        </div>

        {/* Practical info row */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {/* Accommodation */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🏡</span>
              <h3 className="font-bold text-[#1a3d2b]">לינה</h3>
            </div>
            <div className="text-sm font-semibold text-gray-800 mb-1">{dayData.accommodation.area}</div>
            <div className="text-xs text-gray-500 mb-2">{dayData.accommodation.recommendedType}</div>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">{dayData.accommodation.tip}</p>
            {dayData.accommodation.searchUrl && (
              <a
                href={dayData.accommodation.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 bg-[#1a3d2b] text-white text-xs font-semibold rounded-xl hover:bg-[#2d6b4a] transition-colors"
              >
                🔍 חפש לינה
              </a>
            )}
          </div>

          {/* Gas station */}
          {dayData.gasStation && (
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">⛽</span>
                <h3 className="font-bold text-[#1a3d2b]">תחנת דלק</h3>
              </div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{dayData.gasStation.name}</div>
              <div className="text-xs text-gray-500 mb-2">{dayData.gasStation.address}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{dayData.gasStation.tip}</p>
            </div>
          )}

          {/* Supermarket */}
          {dayData.supermarket && (
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🛒</span>
                <h3 className="font-bold text-[#1a3d2b]">סופרמרקט</h3>
              </div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{dayData.supermarket.name}</div>
              <div className="text-xs text-gray-500 mb-2">{dayData.supermarket.address}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{dayData.supermarket.tip}</p>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 justify-between">
          {prevDay ? (
            <Link
              href={`/days/${prevDay.day}`}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-[#1a3d2b] font-bold rounded-full hover:bg-[#f0f7f3] transition-colors shadow-sm"
            >
              <span>→</span>
              <span>יום {prevDay.day}: {prevDay.title}</span>
            </Link>
          ) : (
            <Link href="/" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-[#1a3d2b] font-bold rounded-full hover:bg-[#f0f7f3] transition-colors shadow-sm">
              <span>→</span><span>דף הבית</span>
            </Link>
          )}
          {nextDay ? (
            <Link
              href={`/days/${nextDay.day}`}
              className="flex items-center gap-2 px-6 py-3 bg-[#1a3d2b] text-white font-bold rounded-full hover:bg-[#2d6b4a] transition-colors shadow-sm"
            >
              <span>יום {nextDay.day}: {nextDay.title}</span>
              <span>←</span>
            </Link>
          ) : (
            <Link href="/" className="flex items-center gap-2 px-6 py-3 bg-[#1a3d2b] text-white font-bold rounded-full hover:bg-[#2d6b4a] transition-colors shadow-sm">
              <span>חזרה לבית</span><span>←</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
