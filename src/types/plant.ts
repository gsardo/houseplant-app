export interface Plant {
  id: string;
  commonName: string;
  botanicalName: string;
  image: string;
  categories: {
    easyCare: boolean;
    petFriendly: boolean;
    succulent: boolean;
    lowLight: boolean;
  };
  careLevel: "easy" | "moderate" | "challenging";
  lightRequirement: "low" | "medium" | "bright";
  wateringFrequency: "weekly" | "bi-weekly" | "monthly";
}
