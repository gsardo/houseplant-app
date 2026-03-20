"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function FavoriteButton({ plantId }: { plantId: string }) {
  const { data: session } = useSession();
  const [favoriteId, setFavoriteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!session?.user) return;

    fetch("/api/favorites")
      .then((res) => res.json())
      .then((favorites) => {
        const match = favorites.find(
          (f: { plantId: string; id: string }) => f.plantId === plantId
        );
        if (match) setFavoriteId(match.id);
      })
      .catch(console.error);
  }, [session, plantId]);

  if (!session?.user) return null;

  const toggleFavorite = async () => {
    setLoading(true);
    try {
      if (favoriteId) {
        await fetch(`/api/favorites/${favoriteId}`, { method: "DELETE" });
        setFavoriteId(null);
      } else {
        const res = await fetch("/api/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plantId }),
        });
        const data = await res.json();
        setFavoriteId(data.id);
      }
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      disabled={loading}
      className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
      style={{
        background: favoriteId ? "rgba(239, 68, 68, 0.2)" : "rgba(255, 255, 255, 0.1)",
        color: favoriteId ? "#ef4444" : "white",
        borderColor: favoriteId ? "rgba(239, 68, 68, 0.3)" : "rgba(255, 255, 255, 0.2)",
      }}
    >
      {favoriteId ? "♥ Favourited" : "♡ Add to Favourites"}
    </button>
  );
}
