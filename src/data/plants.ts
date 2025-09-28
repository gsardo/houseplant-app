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
    careLevel: "Easy",
    lightRequirement: "Bright",
    wateringFrequency: "Monthly",
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
    careLevel: "Moderate",
    lightRequirement: "Low",
    wateringFrequency: "Weekly",
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
    careLevel: "Moderate",
    lightRequirement: "Medium",
    wateringFrequency: "Weekly",
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
    careLevel: "Challenging",
    lightRequirement: "Bright",
    wateringFrequency: "Weekly",
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
    careLevel: "Easy",
    lightRequirement: "Bright",
    wateringFrequency: "Fortnightly",
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
    careLevel: "Moderate",
    lightRequirement: "Low",
    wateringFrequency: "Weekly",
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
    careLevel: "Easy",
    lightRequirement: "Low",
    wateringFrequency: "Fortnightly",
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
    careLevel: "Easy",
    lightRequirement: "Low",
    wateringFrequency: "Weekly",
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
