import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "17 ימים באוסטריה | מסע משפחתי מושלם",
  description: "מדריך מסע מלא לטיול משפחתי באוסטריה - זלצבורג וטירול. מפלים, טבע, מסלולים לילדים, מסעדות ועוד.",
  openGraph: {
    title: "17 ימים באוסטריה | מסע משפחתי מושלם",
    description: "מדריך מסע מלא לטיול משפחתי באוסטריה - זלצבורג וטירול",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Heebo', sans-serif" }}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
