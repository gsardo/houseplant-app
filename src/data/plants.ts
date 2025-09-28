import { Plant } from "@/types/plant";

export const plantsData: Plant[] = [
  {
    id: "1",
    commonName: "Cactus",
    botanicalName: "Cactaceae",
    image: "/plant-image.png",
    categories: {
      easyCare: true,
      petFriendly: false,
      succulent: true,
      lowLight: false,
    },
    careLevel: "easy",
    lightRequirement: "bright",
    wateringFrequency: "monthly",
  },
  {
    id: "2",
    commonName: "Fern",
    botanicalName: "Pteridium",
    image: "/plant-image.png",
    categories: {
      easyCare: false,
      petFriendly: true,
      succulent: false,
      lowLight: true,
    },
    careLevel: "moderate",
    lightRequirement: "low",
    wateringFrequency: "weekly",
  },
  {
    id: "3",
    commonName: "Monstera",
    botanicalName: "Monstera deliciosa",
    image: "/plant-image.png",
    categories: {
      easyCare: false,
      petFriendly: false,
      succulent: false,
      lowLight: true,
    },
    careLevel: "moderate",
    lightRequirement: "medium",
    wateringFrequency: "weekly",
  },
  {
    id: "4",
    commonName: "Crotus",
    botanicalName: "Codiaeum variegatum",
    image: "/plant-image.png",
    categories: {
      easyCare: false,
      petFriendly: false,
      succulent: false,
      lowLight: false,
    },
    careLevel: "challenging",
    lightRequirement: "bright",
    wateringFrequency: "weekly",
  },
  {
    id: "5",
    commonName: "Aloe Vera",
    botanicalName: "Aloe barbadensis",
    image: "/plant-image.png",
    categories: {
      easyCare: true,
      petFriendly: false,
      succulent: true,
      lowLight: false,
    },
    careLevel: "easy",
    lightRequirement: "bright",
    wateringFrequency: "bi-weekly",
  },
  {
    id: "6",
    commonName: "Peace Lily",
    botanicalName: "Spathiphyllum",
    image: "/plant-image.png",
    categories: {
      easyCare: false,
      petFriendly: true,
      succulent: false,
      lowLight: true,
    },
    careLevel: "moderate",
    lightRequirement: "low",
    wateringFrequency: "weekly",
  },
  {
    id: "7",
    commonName: "Snake Plant",
    botanicalName: "Sansevieria trifasciata",
    image: "/plant-image.png",
    categories: {
      easyCare: true,
      petFriendly: false,
      succulent: false,
      lowLight: true,
    },
    careLevel: "easy",
    lightRequirement: "low",
    wateringFrequency: "bi-weekly",
  },
  {
    id: "8",
    commonName: "Pothos",
    botanicalName: "Epipremnum aureum",
    image: "/plant-image.png",
    categories: {
      easyCare: true,
      petFriendly: false,
      succulent: false,
      lowLight: true,
    },
    careLevel: "easy",
    lightRequirement: "low",
    wateringFrequency: "weekly",
  },
];

// Helper functions for plant data operations
export const getPlantById = (id: string): Plant | undefined => {
  return plantsData.find((plant) => plant.id === id);
};

export const getPlantsByCategory = (
  categoryKey: keyof Plant["categories"]
): Plant[] => {
  return plantsData.filter((plant) => plant.categories[categoryKey]);
};

export const getPlantsByCareLevel = (
  careLevel: Plant["careLevel"]
): Plant[] => {
  return plantsData.filter((plant) => plant.careLevel === careLevel);
};

// Find plant by slug (created from commonName)
export const getPlantBySlug = (slug: string): Plant | undefined => {
  return plantsData.find((plant) => {
    const plantSlug = plant.commonName.toLowerCase().replace(/\s+/g, "-");
    return plantSlug === slug;
  });
};
