import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f1a14] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🏔️</span>
              <div>
                <div className="font-black text-lg text-white">17 ימים באוסטריה</div>
                <div className="text-sm text-[#4a9eca]">המסע המשפחתי המושלם</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              מדריך טיול מלא לאוסטריה עם ילדים — זלצבורג וטירול. מפלים, טבע, הרפתקאות, ואוכל מדהים.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#d4a017] mb-3">קישורים מהירים</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">🏠 דף הבית</Link></li>
              <li><Link href="/days/1" className="hover:text-white transition-colors">📅 לו&quot;ז יומי</Link></li>
              <li><Link href="/waterfalls" className="hover:text-white transition-colors">💧 10 המפלים הטובים</Link></li>
              <li><Link href="/tips" className="hover:text-white transition-colors">🔧 טיפים מעשיים</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">🖼️ גלריה</Link></li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="font-bold text-[#4a9eca] mb-3">אזורים</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="text-[#d4a017]">🌟</span> זלצבורג — ימים 1-8</li>
              <li><span className="text-[#4a9eca]">🏔️</span> טירול — ימים 9-16</li>
              <li><span className="text-white">✈️</span> יום 17 — פרידה</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
              <div>📍 בסיס 1: Flachau / Wagrain</div>
              <div>📍 בסיס 2: Zillertal / Mayrhofen</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            בהשראת ערוץ היוטיוב{" "}
            <a href="https://www.youtube.com/@pukkatravellers262" target="_blank" rel="noopener noreferrer" className="text-[#4a9eca] hover:underline">
              Pukka Travellers
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span>נבנה עם</span>
            <span className="text-red-400">❤️</span>
            <span>+ React + Tailwind</span>
          </div>
          <div>© 2024 אוסטריה — המסע המשפחתי</div>
        </div>
      </div>
    </footer>
  );
}
