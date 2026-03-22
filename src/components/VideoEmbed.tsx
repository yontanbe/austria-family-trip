export default function VideoEmbed({
  videoId,
  title,
  description,
}: {
  videoId: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 adventure-card">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#1a3d2b] mb-1">{title}</h3>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
}
