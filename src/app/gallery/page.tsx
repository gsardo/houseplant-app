import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { UploadForm } from "@/components/gallery/upload-form";
import { ImageGrid } from "@/components/gallery/image-grid";

export default async function GalleryPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const images: never[] = [];
  const plants: never[] = [];

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <h2>Plant Gallery</h2>
      <p className="text-center text-gray-100 mb-8">
        Track your plants&apos; growth by uploading photos over time.
      </p>

      <UploadForm plants={plants} />

      {images.length === 0 ? (
        <p className="text-center text-gray-100 mt-8">
          No photos yet. Upload your first plant photo above.
        </p>
      ) : (
        <ImageGrid images={images} />
      )}
    </div>
  );
}
