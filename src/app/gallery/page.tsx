import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { UploadForm } from "@/components/gallery/upload-form";
import { ImageGrid } from "@/components/gallery/image-grid";

export default async function GalleryPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const images = await prisma.galleryImage.findMany({
    where: { userId: session.user.id },
    include: { plant: true },
    orderBy: { createdAt: "desc" },
  });

  const plants = await prisma.plant.findMany({
    orderBy: { commonName: "asc" },
  });

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
