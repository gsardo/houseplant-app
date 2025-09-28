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
  careLevel: "Easy" | "Moderate" | "Challenging";
  lightRequirement: "Low" | "Medium" | "Bright";
  wateringFrequency: "Weekly" | "Fortnightly" | "Monthly";
}
