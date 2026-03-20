interface GalleryImageWithPlant {
  id: string;
  url: string;
  caption: string | null;
  createdAt: Date;
  plant: {
    commonName: string;
  };
}

export function ImageGrid({ images }: { images: GalleryImageWithPlant[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {images.map((image) => (
        <div
          key={image.id}
          className="bg-dark-100 rounded-2xl overflow-hidden shadow-inner shadow-light-100/10"
        >
          <img
            src={image.url}
            alt={image.caption || image.plant.commonName}
            className="w-full h-48 object-cover"
          />
          <div className="p-3">
            <p className="text-white text-sm font-medium">
              {image.plant.commonName}
            </p>
            {image.caption && (
              <p className="text-gray-100 text-xs mt-1">{image.caption}</p>
            )}
            <p className="text-gray-100 text-xs mt-1">
              {new Date(image.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
