"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface PlantOption {
  id: string;
  commonName: string;
}

export function UploadForm({ plants }: { plants: PlantOption[] }) {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark-100 rounded-2xl p-6 shadow-inner shadow-light-100/10 max-w-xl mx-auto mb-10"
    >
      <div className="flex flex-col gap-4">
        <label className="text-white text-sm font-medium">
          Plant
          <select
            name="plantId"
            required
            className="mt-1 w-full bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20"
          >
            <option value="">Select a plant...</option>
            {plants.map((p) => (
              <option key={p.id} value={p.id}>
                {p.commonName}
              </option>
            ))}
          </select>
        </label>

        <label className="text-white text-sm font-medium">
          Photo
          <input
            type="file"
            name="file"
            accept="image/*"
            required
            className="mt-1 w-full text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-white/10 file:text-white hover:file:bg-white/20"
          />
        </label>

        <label className="text-white text-sm font-medium">
          Caption (optional)
          <input
            type="text"
            name="caption"
            placeholder="e.g. Week 3 — new leaf unfurling"
            className="mt-1 w-full bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 placeholder-gray-100"
          />
        </label>

        <button
          type="submit"
          disabled={uploading}
          className="px-6 py-2 bg-white text-gray-800 font-medium rounded-full hover:scale-105 transition-all disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload Photo"}
        </button>
      </div>
    </form>
  );
}
