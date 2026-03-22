import { Attraction } from "@/data/types";
import SafeImage from "@/components/SafeImage";

const tagColors: Record<string, string> = {
  "מפל": "#4a9eca",
  "נקיק": "#4a9eca",
  "אגם": "#4a9eca",
  "טבע": "#1a3d2b",
  "פארק": "#2d6b4a",
  "מוזיאון": "#6b4c9e",
  "היסטוריה": "#8B6914",
  "עיר": "#d4a017",
  "ייחודי": "#e07b39",
  "אקשן": "#cc3333",
  "מים": "#4a9eca",
  "ספא": "#9e6b4c",
  "נוף": "#1a3d2b",
  "חיות": "#5a8a3c",
  "ארמון": "#8B6914",
  "גינה": "#2d6b4a",
  "חוויה ייחודית": "#e07b39",
  "כפר": "#6b7280",
  "קניות": "#d4a017",
};

export default function AttractionCard({ attraction }: { attraction: Attraction }) {
  const tagColor = tagColors[attraction.tag || ""] || "#6b7280";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 adventure-card">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <SafeImage
          src={attraction.image}
          alt={attraction.hebrewName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        {attraction.tag && (
          <div
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: tagColor }}
          >
            {attraction.tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-[#1a3d2b] text-lg mb-0.5">{attraction.hebrewName}</h3>
        <p className="text-gray-400 text-xs mb-3 font-medium">{attraction.name}</p>

        {/* Tip */}
        <div className="bg-[#f0f7f3] rounded-xl p-3 mb-4">
          <div className="flex items-start gap-2">
            <span className="text-lg mt-0.5">💡</span>
            <p className="text-sm text-[#1a3d2b] leading-relaxed">{attraction.tip}</p>
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4">
          {attraction.openHours && (
            <div className="flex items-center gap-1.5">
              <span>🕐</span>
              <span>{attraction.openHours}</span>
            </div>
          )}
          {attraction.price && (
            <div className="flex items-center gap-1.5">
              <span>💶</span>
              <span className="font-medium text-[#1a3d2b]">{attraction.price}</span>
            </div>
          )}
        </div>

        {/* Address + Map */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <span>📍</span>
          <span className="truncate">{attraction.address}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={attraction.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-[#1a3d2b] text-white text-xs font-semibold rounded-xl hover:bg-[#2d6b4a] transition-colors"
          >
            🗺️ פתח במפה
          </a>
          {attraction.website && (
            <a
              href={attraction.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 border border-[#1a3d2b] text-[#1a3d2b] text-xs font-semibold rounded-xl hover:bg-[#f0f7f3] transition-colors"
            >
              🌐 אתר רשמי
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
