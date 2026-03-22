import { practicalInfo } from "@/data/practical";
import Link from "next/link";

export const metadata = {
  title: "טיפים מעשיים | אוסטריה — דלק, סופרמרקטים, לינה",
  description: "כל מה שצריך לדעת לפני הטיול: תחנות דלק, סופרמרקטים, לינה, ויניאט וכרטיס זלצבורג",
};

export default function TipsPage() {
  const { gasStations, supermarkets, accommodation, salzburgerlandCard, vignette } = practicalInfo;

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3d2b] to-[#0f2018] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#7ec8e3] font-bold text-sm mb-3">🔧 מדריך מעשי</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">טיפים מעשיים לטיול</h1>
          <p className="text-white/80 text-lg">
            כל מה שצריך לדעת כדי לתכנן נכון — דלק, קניות, לינה ועוד
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Vignette - important warning first */}
        <section>
          <div className="bg-[#fff3cd] border-2 border-[#d4a017] rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">⚠️</div>
              <div>
                <h2 className="font-black text-[#8B6914] text-xl mb-2">
                  {vignette.title} — חובה!
                </h2>
                <p className="text-[#8B6914] mb-3">{vignette.description}</p>
                <div className="grid sm:grid-cols-3 gap-3 mb-3">
                  <div className="bg-white rounded-xl p-3 text-center">
                    <div className="font-black text-[#1a3d2b]">€9.90</div>
                    <div className="text-xs text-gray-600">10 ימים</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center">
                    <div className="font-black text-[#1a3d2b]">€29.00</div>
                    <div className="text-xs text-gray-600">חודשיים</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center">
                    <div className="font-black text-[#cc3333]">€120</div>
                    <div className="text-xs text-gray-600">קנס ללא!</div>
                  </div>
                </div>
                <div className="text-sm text-[#8B6914]">
                  <strong>איפה לקנות:</strong> {vignette.whereToGet}
                </div>
                <div className="text-sm text-[#8B6914] mt-1">
                  <strong>איך להשתמש:</strong> {vignette.howToUse}
                </div>
                <div className="mt-2 text-sm font-medium text-[#1a3d2b]">
                  💡 {vignette.tip}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SalzburgerLand Card */}
        <section>
          <div className="bg-gradient-to-r from-[#1a3d2b] to-[#2d6b4a] text-white rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🎫</div>
              <div className="flex-1">
                <h2 className="font-black text-2xl mb-2">{salzburgerlandCard.title}</h2>
                <p className="text-white/80 mb-4">{salzburgerlandCard.description}</p>
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="text-[#d4a017] font-black text-lg mb-1">
                    💶 {salzburgerlandCard.price}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-[#7ec8e3] font-bold mb-2">✅ כולל כניסה חינמית ל:</div>
                  <div className="grid sm:grid-cols-2 gap-1">
                    {salzburgerlandCard.includes.map((item, i) => (
                      <div key={i} className="text-sm text-white/80 flex items-center gap-1">
                        <span>•</span><span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-white/70">💡 {salzburgerlandCard.tip}</div>
                <div className="mt-3">
                  <a
                    href={salzburgerlandCard.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-[#d4a017] text-white font-bold rounded-full hover:bg-[#f0c040] transition-colors text-sm"
                  >
                    🌐 לאתר הרשמי
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gas Stations */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl">⛽</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1a3d2b]">{gasStations.title}</h2>
          </div>
          <p className="text-gray-600 mb-6">{gasStations.intro}</p>

          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {gasStations.chains.map((chain) => (
              <div key={chain.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{chain.logo}</span>
                  <h3 className="font-black text-[#1a3d2b] text-lg">{chain.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{chain.description}</p>
                <div className="bg-[#f0f7f3] rounded-xl p-3 mb-3">
                  <p className="text-xs text-[#1a3d2b]">💡 {chain.tip}</p>
                </div>
                <div className="text-xs text-gray-500">
                  <div>🕐 {chain.openHours}</div>
                  <div className="mt-1">💶 מחיר: {chain.priceLevel}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1a3d2b] mb-3">📋 טיפי דלק מהשטח</h3>
            <div className="space-y-2">
              {gasStations.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supermarkets */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl">🛒</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1a3d2b]">{supermarkets.title}</h2>
          </div>
          <p className="text-gray-600 mb-6">{supermarkets.intro}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {supermarkets.chains.map((chain) => (
              <div key={chain.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{chain.logo}</span>
                  <h3 className="font-black text-[#1a3d2b]">{chain.name}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-2">{chain.description}</p>
                <div className="bg-[#fffbf0] rounded-lg p-2 mb-2">
                  <div className="text-xs font-semibold text-[#8B6914] mb-1">🛍️ הכי טוב ל:</div>
                  <p className="text-xs text-gray-600">{chain.bestFor}</p>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>🕐 {chain.openHours}</div>
                  <div>💡 {chain.tip}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1a3d2b] mb-3">📋 טיפי קניות חשובים</h3>
            <div className="space-y-2">
              {supermarkets.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl">🏡</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1a3d2b]">{accommodation.title}</h2>
          </div>
          <p className="text-gray-600 mb-6">{accommodation.intro}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Salzburg base */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#d4a017]/30">
              <div className="text-[#d4a017] font-black text-lg mb-2">🌟 כוכב 1 — זלצבורג</div>
              <h3 className="font-black text-[#1a3d2b] text-xl mb-1">{accommodation.salzburgBase.area}</h3>
              <p className="text-sm text-gray-600 mb-3">{accommodation.salzburgBase.whyHere}</p>
              <div className="mb-3">
                <div className="text-xs font-bold text-[#1a3d2b] mb-2">✅ חייב להיות:</div>
                <div className="flex flex-wrap gap-1">
                  {accommodation.salzburgBase.mustHave.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-[#f0f7f3] text-[#1a3d2b] text-xs rounded-full">{item}</span>
                  ))}
                </div>
              </div>
              <div className="text-[#d4a017] font-bold text-sm mb-3">💶 {accommodation.salzburgBase.budgetRange}</div>
              <div className="text-xs text-gray-600 mb-4">💡 {accommodation.salzburgBase.tip}</div>
              <div className="flex gap-2">
                {accommodation.salzburgBase.searchSites.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-[#1a3d2b] text-white text-xs font-semibold rounded-xl hover:bg-[#2d6b4a] transition-colors"
                  >
                    {site.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Tyrol base */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#4a9eca]/30">
              <div className="text-[#4a9eca] font-black text-lg mb-2">🏔️ כוכב 2 — טירול</div>
              <h3 className="font-black text-[#1a3d2b] text-xl mb-1">{accommodation.tyrolBase.area}</h3>
              <p className="text-sm text-gray-600 mb-3">{accommodation.tyrolBase.whyHere}</p>
              <div className="mb-3">
                <div className="text-xs font-bold text-[#1a3d2b] mb-2">✅ חייב להיות:</div>
                <div className="flex flex-wrap gap-1">
                  {accommodation.tyrolBase.mustHave.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-[#f0f7ff] text-[#1a3d2b] text-xs rounded-full">{item}</span>
                  ))}
                </div>
              </div>
              <div className="text-[#4a9eca] font-bold text-sm mb-3">💶 {accommodation.tyrolBase.budgetRange}</div>
              <div className="text-xs text-gray-600 mb-4">💡 {accommodation.tyrolBase.tip}</div>
              <div className="flex gap-2">
                {accommodation.tyrolBase.searchSites.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-[#1a3d2b] text-white text-xs font-semibold rounded-xl hover:bg-[#2d6b4a] transition-colors"
                  >
                    {site.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* General tips */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1a3d2b] mb-3">📋 טיפי לינה חשובים</h3>
            <div className="space-y-2">
              {accommodation.generalTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back to home */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a3d2b] text-white font-bold text-lg rounded-full hover:bg-[#2d6b4a] transition-colors"
          >
            <span>→</span>
            <span>חזרה לדף הבית</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
