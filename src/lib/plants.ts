import { prisma } from "@/lib/prisma";

export async function getAllPlants() {
  return prisma.plant.findMany({ orderBy: { commonName: "asc" } });
}

export async function getPlantBySlug(slug: string) {
  const plants = await prisma.plant.findMany();
  return plants.find(
    (p: { commonName: string }) =>
      p.commonName.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export async function getPlantById(id: string) {
  return prisma.plant.findUnique({ where: { id } });
}
