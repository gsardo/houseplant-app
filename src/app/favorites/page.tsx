import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function FavoritesPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const favorites = await prisma.favorite.findMany({
    where: { userId: session.user.id },
    include: { plant: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <h2>My Favourites</h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-100 mt-8">
          You haven&apos;t favourited any plants yet. Browse the encyclopedia
          and tap the heart to save plants here.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((fav: { id: string; plant: { commonName: string; image: string } }) => (
            <li key={fav.id}>
              <a
                href={`/details/${encodeURIComponent(fav.plant.commonName.toLowerCase().replace(/\s+/g, "-"))}`}
                className="plant-card block"
              >
                <img
                  src={fav.plant.image}
                  alt={fav.plant.commonName}
                  className="rounded-lg w-full"
                />
                <div className="content">
                  <h3>{fav.plant.commonName}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
