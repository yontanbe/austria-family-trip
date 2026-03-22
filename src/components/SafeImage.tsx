"use client";
import { useState } from "react";

// Reliable Unsplash images with proper CDN params
// Format: photo-ID?auto=format&fit=crop&w=WIDTH&q=80
interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
}

// Map of topic to reliable gradient fallback colors
const fallbackGradients = [
  "linear-gradient(135deg, #1a3d2b 0%, #2d6b4a 50%, #4a9eca 100%)",
  "linear-gradient(135deg, #0f2018 0%, #1a3d2b 50%, #2d6b4a 100%)",
  "linear-gradient(135deg, #4a9eca 0%, #1a3d2b 50%, #0f2018 100%)",
  "linear-gradient(135deg, #d4a017 0%, #1a3d2b 50%, #4a9eca 100%)",
];

let fallbackIndex = 0;

export default function SafeImage({ src, alt, className, style, loading = "lazy" }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const [gradient] = useState(() => {
    const g = fallbackGradients[fallbackIndex % fallbackGradients.length];
    fallbackIndex++;
    return g;
  });

  if (failed) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center text-white/60 px-4">
          <div className="text-4xl mb-2">🏔️</div>
          <div className="text-sm font-medium">{alt}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
