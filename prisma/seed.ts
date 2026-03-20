import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

const plants = [
  {
    id: "1",
    commonName: "Cactus",
    botanicalName: "Cactaceae",
    image: "/plant-image.png",
    careLevel: "Easy",
    lightRequirement: "Bright",
    wateringFrequency: "Monthly",
    easyCare: true,
    petFriendly: false,
    succulent: true,
    lowLight: false,
  },
  {
    id: "2",
    commonName: "Fern",
    botanicalName: "Pteridium",
    image: "/plant-image.png",
    careLevel: "Moderate",
    lightRequirement: "Low",
    wateringFrequency: "Weekly",
    easyCare: false,
    petFriendly: true,
    succulent: false,
    lowLight: true,
  },
  {
    id: "3",
    commonName: "Monstera",
    botanicalName: "Monstera deliciosa",
    image: "/plant-image.png",
    careLevel: "Moderate",
    lightRequirement: "Medium",
    wateringFrequency: "Weekly",
    easyCare: false,
    petFriendly: false,
    succulent: false,
    lowLight: true,
  },
  {
    id: "4",
    commonName: "Crotus",
    botanicalName: "Codiaeum variegatum",
    image: "/plant-image.png",
    careLevel: "Challenging",
    lightRequirement: "Bright",
    wateringFrequency: "Weekly",
    easyCare: false,
    petFriendly: false,
    succulent: false,
    lowLight: false,
  },
  {
    id: "5",
    commonName: "Aloe Vera",
    botanicalName: "Aloe barbadensis",
    image: "/plant-image.png",
    careLevel: "Easy",
    lightRequirement: "Bright",
    wateringFrequency: "Fortnightly",
    easyCare: true,
    petFriendly: false,
    succulent: true,
    lowLight: false,
  },
  {
    id: "6",
    commonName: "Peace Lily",
    botanicalName: "Spathiphyllum",
    image: "/plant-image.png",
    careLevel: "Moderate",
    lightRequirement: "Low",
    wateringFrequency: "Weekly",
    easyCare: false,
    petFriendly: true,
    succulent: false,
    lowLight: true,
  },
  {
    id: "7",
    commonName: "Snake Plant",
    botanicalName: "Sansevieria trifasciata",
    image: "/plant-image.png",
    careLevel: "Easy",
    lightRequirement: "Low",
    wateringFrequency: "Fortnightly",
    easyCare: true,
    petFriendly: false,
    succulent: false,
    lowLight: true,
  },
  {
    id: "8",
    commonName: "Pothos",
    botanicalName: "Epipremnum aureum",
    image: "/plant-image.png",
    careLevel: "Easy",
    lightRequirement: "Low",
    wateringFrequency: "Weekly",
    easyCare: true,
    petFriendly: false,
    succulent: false,
    lowLight: true,
  },
];

async function main() {
  for (const plant of plants) {
    await prisma.plant.upsert({
      where: { id: plant.id },
      update: plant,
      create: plant,
    });
  }
  console.log("Seeded 8 plants");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
