import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const [favCount, imageCount, recCount] = await Promise.all([
    prisma.favorite.count({ where: { userId: session.user.id } }),
    prisma.galleryImage.count({ where: { userId: session.user.id } }),
    prisma.userRecommendation.count({ where: { userId: session.user.id } }),
  ]);

  return (
    <div className="max-w-2xl mx-auto px-5 py-12">
      <h2>Profile</h2>

      <div className="bg-dark-100 rounded-2xl p-6 shadow-inner shadow-light-100/10 mt-6">
        <div className="flex items-center gap-4 mb-6">
          {session.user.image && (
            <img
              src={session.user.image}
              alt=""
              className="w-16 h-16 rounded-full"
            />
          )}
          <div>
            <h4 className="text-white font-bold text-lg text-left mx-0 max-w-none mb-0">
              {session.user.name}
            </h4>
            <p className="text-gray-100 text-sm">{session.user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <Link
            href="/favorites"
            className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all"
          >
            <p className="text-2xl font-bold text-white">{favCount}</p>
            <p className="text-gray-100 text-sm">Favourites</p>
          </Link>
          <Link
            href="/gallery"
            className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all"
          >
            <p className="text-2xl font-bold text-white">{imageCount}</p>
            <p className="text-gray-100 text-sm">Photos</p>
          </Link>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-2xl font-bold text-white">{recCount}</p>
            <p className="text-gray-100 text-sm">Recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
