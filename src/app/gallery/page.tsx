import Link from "next/link";

export const metadata = {
  title: "גלריה | 17 ימים באוסטריה",
  description: "תמונות מהטיול המשפחתי באוסטריה — זלצבורג, טירול, מפלים, נוף אלפיני",
};

const photos = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    caption: "מפלי קרימל — 380 מטר, הגבוהים באירופה",
    region: "מעבר",
    day: 8,
  },
  {
    src: "https://images.unsplash.com/photo-1599140849279-1014532882fe?w=800&q=80",
    caption: "זלצבורג — העיר העתיקה",
    region: "זלצבורג",
    day: 6,
  },
  {
    src: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?w=800&q=80",
    caption: "הרי האלפים — הנוף הבלתי נשכח",
    region: "טירול",
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    caption: "האלשטאט — הכפר הכי מצולם בעולם",
    region: "זלצבורג",
    day: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
    caption: "מפל שטויבן — 159 מטר, עם גשרים תלויים",
    region: "טירול",
    day: 12,
  },
  {
    src: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?w=800&q=80",
    caption: "כביש גרוסגלוקנר — הדרך היפה באירופה",
    region: "זלצבורג",
    day: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?w=800&q=80",
    caption: "עולם הקריסטלים סברובסקי",
    region: "טירול",
    day: 10,
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    caption: "יערות הטחב הקסומים — מפל גולינג",
    region: "זלצבורג",
  },
  {
    src: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
    caption: "אגם אכן — הפיורד של טירול",
    region: "טירול",
    day: 11,
  },
  {
    src: "https://images.unsplash.com/photo-1561551782-44ab3b5b4acb?w=800&q=80",
    caption: "אינסברוק — העיר ההיסטורית",
    region: "טירול",
    day: 10,
  },
  {
    src: "https://images.unsplash.com/photo-1548032885-b5e38734688a?w=800&q=80",
    caption: "מכרות המלח הליין",
    region: "זלצבורג",
    day: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1609016267669-c51e8e8f6e88?w=800&q=80",
    caption: "טירול — אגמים ירוקים",
    region: "טירול",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    caption: "פארק מים — Aqua Dome",
    region: "טירול",
    day: 16,
  },
  {
    src: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    caption: "טירת הוהנוורפן",
    region: "זלצבורג",
    day: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
    caption: "פארקים על הרים — טירול",
    region: "טירול",
  },
  {
    src: "https://images.unsplash.com/photo-1569000188889-8d4ee80ccce2?w=800&q=80",
    caption: "נקיק ליכטנשטיין — גשרים בתוך הסלע",
    region: "זלצבורג",
    day: 3,
  },
];

const regionColors: Record<string, string> = {
  "זלצבורג": "#d4a017",
  "טירול": "#4a9eca",
  "מעבר": "#6b7280",
};

export default function GalleryPage() {
  const salzburgPhotos = photos.filter(p => p.region === "זלצבורג");
  const tyrolPhotos = photos.filter(p => p.region === "טירול");
  const transitPhotos = photos.filter(p => p.region === "מעבר");

  return (
    <div className="min-h-screen bg-[#0f1a14] text-white">
      {/* Hero */}
      <section className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="גלריה"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-[#7ec8e3] font-bold text-sm mb-2">🖼️ גלריה</div>
          <h1 className="text-4xl md:text-5xl font-black">17 ימים בתמונות</h1>
          <p className="text-white/70 mt-2">אוסטריה — זלצבורג וטירול</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Transit / Waterfalls highlight */}
        {transitPhotos.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#6b7280] inline-block"></span>
              <h2 className="text-xl font-black text-white">💧 מפלים ומעברים</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {transitPhotos.map((photo, i) => (
                <PhotoCard key={i} photo={photo} regionColors={regionColors} />
              ))}
            </div>
          </section>
        )}

        {/* Salzburg */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#d4a017] inline-block"></span>
            <h2 className="text-xl font-black text-white">🌟 זלצבורג — ימים 1-8</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {salzburgPhotos.map((photo, i) => (
              <PhotoCard key={i} photo={photo} regionColors={regionColors} />
            ))}
          </div>
        </section>

        {/* Tyrol */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#4a9eca] inline-block"></span>
            <h2 className="text-xl font-black text-white">🏔️ טירול — ימים 9-16</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tyrolPhotos.map((photo, i) => (
              <PhotoCard key={i} photo={photo} regionColors={regionColors} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a3d2b] text-white font-bold text-lg rounded-full hover:bg-[#2d6b4a] transition-colors"
          >
            <span>→</span><span>חזרה לדף הבית</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function PhotoCard({
  photo,
  regionColors,
}: {
  photo: { src: string; caption: string; region: string; day?: number };
  regionColors: Record<string, string>;
}) {
  const color = regionColors[photo.region] || "#6b7280";
  return (
    <div className="relative rounded-2xl overflow-hidden adventure-card group cursor-pointer">
      <div className="relative h-56">
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: color + "cc" }}
        >
          {photo.region}
        </div>
        {photo.day && (
          <Link
            href={`/days/${photo.day}`}
            className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white bg-black/50 hover:bg-black/80 transition-colors"
          >
            יום {photo.day}
          </Link>
        )}
      </div>
      <div className="p-3 bg-[#1a3d2b]/80 backdrop-blur-sm">
        <p className="text-white text-sm font-medium">{photo.caption}</p>
      </div>
    </div>
  );
}
