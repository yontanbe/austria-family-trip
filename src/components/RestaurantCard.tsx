import { Restaurant } from "@/data/types";

const priceColors: Record<string, { color: string; label: string }> = {
  "€": { color: "#2d6b4a", label: "זול" },
  "€€": { color: "#d4a017", label: "בינוני" },
  "€€€": { color: "#cc5500", label: "יקר" },
};

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const price = priceColors[restaurant.priceRange] || priceColors["€€"];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm adventure-card">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🍽️</span>
            <h3 className="font-bold text-[#1a3d2b] text-base">{restaurant.name}</h3>
          </div>
          <p className="text-gray-500 text-xs">{restaurant.type}</p>
        </div>
        <div
          className="flex-shrink-0 text-sm font-black px-2 py-1 rounded-lg"
          style={{ color: price.color, backgroundColor: price.color + "18" }}
        >
          {restaurant.priceRange}
        </div>
      </div>

      {/* Recommended dish */}
      <div className="bg-[#fffbf0] border border-[#f0d060] rounded-xl p-3 mb-3">
        <div className="text-xs font-bold text-[#8B6914] mb-1">🍴 מנה מומלצת</div>
        <p className="text-sm text-[#5c4a00] font-medium">{restaurant.dish}</p>
      </div>

      {/* Tip */}
      <div className="flex items-start gap-2 mb-3">
        <span className="text-base mt-0.5">💬</span>
        <p className="text-xs text-gray-600 leading-relaxed">{restaurant.tip}</p>
      </div>

      {/* Address + map link */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 flex-1 min-w-0">
          <span>📍</span>
          <span className="truncate">{restaurant.address}</span>
        </div>
        {restaurant.googleMapsUrl && (
          <a
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-xs text-[#4a9eca] hover:text-[#1a3d2b] font-semibold mr-2 transition-colors"
          >
            מפה →
          </a>
        )}
      </div>
    </div>
  );
}
