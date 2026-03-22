import Link from "next/link";
import { DayData } from "@/data/types";

const regionLabels: Record<string, { label: string; color: string; emoji: string }> = {
  salzburg: { label: "זלצבורג", color: "#d4a017", emoji: "🌟" },
  tyrol: { label: "טירול", color: "#4a9eca", emoji: "🏔️" },
  transit: { label: "מעבר", color: "#6b7280", emoji: "🚗" },
};

interface DayCardProps {
  day: DayData;
  compact?: boolean;
}

export default function DayCard({ day, compact = false }: DayCardProps) {
  const region = regionLabels[day.region];

  return (
    <Link href={`/days/${day.day}`} className="block adventure-card group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: compact ? "160px" : "200px" }}>
          <img
            src={day.heroImage}
            alt={day.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Day number badge */}
          <div className="absolute top-3 right-3">
            <div className="day-badge text-white">
              {day.day}
            </div>
          </div>

          {/* Region badge */}
          <div
            className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: region.color + "dd" }}
          >
            {region.emoji} {region.label}
          </div>

          {/* Title on image */}
          <div className="absolute bottom-3 right-3 left-3">
            <div className="text-white/80 text-xs font-medium mb-1">{day.subtitle}</div>
            <h3 className="text-white font-bold text-lg leading-tight">{day.title}</h3>
          </div>
        </div>

        {/* Content */}
        {!compact && (
          <div className="p-4">
            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-3">
              {day.description.slice(0, 100)}...
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {day.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-[#f0f7f3] text-[#1a3d2b] text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Attractions count */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <span>🎯 {day.attractions.length} אטרקציות</span>
                <span>🍽️ {day.restaurants.length} מסעדות</span>
              </div>
              <span className="text-[#4a9eca] font-semibold group-hover:text-[#1a3d2b] transition-colors">
                פרטים ←
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
