import Link from "next/link";
import { WaterfallData } from "@/data/types";

const difficultyColors = {
  "קל": { bg: "#d1fae5", text: "#065f46", emoji: "🟢" },
  "בינוני": { bg: "#fef3c7", text: "#92400e", emoji: "🟡" },
  "מאתגר": { bg: "#fee2e2", text: "#991b1b", emoji: "🔴" },
};

export default function WaterfallCard({ waterfall, featured = false }: { waterfall: WaterfallData; featured?: boolean }) {
  const diff = difficultyColors[waterfall.difficulty];

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 adventure-card ${featured ? "ring-2 ring-[#4a9eca]" : ""}`}>
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: featured ? "260px" : "200px" }}>
        <img
          src={waterfall.image}
          alt={waterfall.hebrewName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Rank number (decorative, behind content) */}
        <div className="waterfall-rank">{waterfall.rank}</div>

        {/* Top badges */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <div className="bg-[#1a3d2b] text-white px-3 py-1 rounded-full text-sm font-black">
            #{waterfall.rank}
          </div>
          {featured && (
            <div className="bg-[#d4a017] text-white px-2 py-1 rounded-full text-xs font-bold">
              ⭐ מומלץ
            </div>
          )}
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-3 right-3 left-3">
          <h3 className="text-white font-black text-xl leading-tight mb-1">
            {waterfall.hebrewName}
          </h3>
          <p className="text-white/70 text-sm">{waterfall.name}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[#7ec8e3] text-sm font-semibold">💧 {waterfall.height}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {waterfall.description}
        </p>

        {/* Metadata row */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className="px-2 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: diff.bg, color: diff.text }}
          >
            {diff.emoji} {waterfall.difficulty}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
            ⏱️ {waterfall.duration}
          </span>
          {waterfall.day && (
            <Link
              href={`/days/${waterfall.day}`}
              className="px-2 py-1 bg-[#e8f4ff] text-[#1a3d2b] rounded-full text-xs font-medium hover:bg-[#d0e8ff] transition-colors"
            >
              📅 יום {waterfall.day}
            </Link>
          )}
        </div>

        {/* Best time tip */}
        <div className="bg-[#f0f7f3] rounded-xl p-3 mb-4">
          <div className="text-xs font-bold text-[#1a3d2b] mb-1">⏰ מתי לבקר</div>
          <p className="text-xs text-gray-600">{waterfall.bestTime}</p>
        </div>

        {/* Pro tip */}
        <div className="border-r-4 border-[#4a9eca] pr-3 mb-4">
          <p className="text-xs text-gray-700 leading-relaxed">{waterfall.tip}</p>
        </div>

        {/* Must bring */}
        {waterfall.mustBring && waterfall.mustBring.length > 0 && (
          <div className="mb-4">
            <div className="text-xs font-bold text-gray-500 mb-2">🎒 חייבים להביא</div>
            <div className="flex flex-wrap gap-1">
              {waterfall.mustBring.map((item, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Parking tip */}
        <div className="text-xs text-gray-500 mb-4">
          <span className="font-semibold">🅿️ חניה: </span>{waterfall.parking}
        </div>

        {/* Map button */}
        <a
          href={waterfall.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-2.5 bg-[#1a3d2b] text-white text-sm font-semibold rounded-xl hover:bg-[#2d6b4a] transition-colors"
        >
          🗺️ פתח ב-Google Maps
        </a>
      </div>
    </div>
  );
}
