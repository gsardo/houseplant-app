import { CareTip, CommonProblem } from "@/types/care";

export const careTips: CareTip[] = [
  {
    id: "1",
    icon: "💧",
    category: "watering",
    title: "The Finger Test",
    description:
      "Before watering, stick your finger about an inch into the soil. If it feels dry, it's time to water. If it's still moist, wait a few more days. Overwatering is the most common cause of houseplant death.",
    difficulty: "beginner",
  },
  {
    id: "2",
    icon: "☀️",
    category: "light",
    title: "Reading Light Conditions",
    description:
      "Hold your hand a foot above the surface where your plant sits. A sharp, well-defined shadow means bright light. A soft, fuzzy shadow means medium light. No shadow at all means low light.",
    difficulty: "beginner",
  },
  {
    id: "3",
    icon: "🪴",
    category: "soil",
    title: "Choosing the Right Soil Mix",
    description:
      "Most houseplants thrive in a well-draining potting mix. For succulents and cacti, add perlite or sand for extra drainage. For ferns and tropical plants, mix in peat moss to retain more moisture.",
    difficulty: "intermediate",
  },
  {
    id: "4",
    icon: "🌫️",
    category: "humidity",
    title: "Boosting Humidity Naturally",
    description:
      "Group tropical plants together to create a microclimate of higher humidity. You can also place pots on a tray filled with pebbles and water — as the water evaporates, it humidifies the air around your plants.",
    difficulty: "beginner",
  },
  {
    id: "5",
    icon: "🧪",
    category: "feeding",
    title: "Fertilising Schedule",
    description:
      "Feed most houseplants with a balanced liquid fertiliser every 2-4 weeks during spring and summer. Reduce or stop feeding in autumn and winter when growth slows. Always dilute to half strength to avoid root burn.",
    difficulty: "intermediate",
  },
  {
    id: "6",
    icon: "☀️",
    category: "light",
    title: "Rotating for Even Growth",
    description:
      "Rotate your plants a quarter turn each time you water them. This ensures all sides receive even light exposure and prevents your plant from growing lopsided as it leans toward the light source.",
    difficulty: "beginner",
  },
  {
    id: "7",
    icon: "🪴",
    category: "soil",
    title: "When to Repot",
    description:
      "If roots are circling the bottom of the pot, growing out of drainage holes, or the plant is drying out faster than usual, it's time to repot. Choose a pot only 1-2 inches larger than the current one.",
    difficulty: "advanced",
  },
];

export const commonProblems: CommonProblem[] = [
  {
    id: "1",
    title: "Yellow Leaves",
    symptom: "Leaves turning yellow, starting from the lower leaves",
    cause:
      "Usually caused by overwatering, but can also indicate nutrient deficiency or natural aging of lower leaves.",
    solution:
      "Check soil moisture before watering. Ensure the pot has drainage holes. If soil is soggy, let it dry out completely before watering again.",
    affectedPlants: ["Pothos", "Peace Lily", "Monstera"],
  },
  {
    id: "2",
    title: "Root Rot",
    symptom: "Mushy, dark brown or black roots with a foul smell",
    cause:
      "Caused by prolonged overwatering or poor drainage, leading to fungal infection in waterlogged roots.",
    solution:
      "Remove the plant from its pot, trim all affected roots with sterile scissors, and repot in fresh, well-draining soil. Reduce watering frequency.",
    affectedPlants: ["Snake Plant", "Aloe Vera", "Cactus"],
  },
  {
    id: "3",
    title: "Leggy Growth",
    symptom: "Long, stretched stems with sparse leaves and large gaps between leaf nodes",
    cause:
      "The plant is reaching toward a light source because it isn't receiving enough light in its current position.",
    solution:
      "Move the plant to a brighter location. Prune leggy stems to encourage bushier growth. Consider supplemental grow lights in darker rooms.",
    affectedPlants: ["Pothos", "Fern", "Monstera"],
  },
  {
    id: "4",
    title: "Brown Leaf Tips",
    symptom: "Dry, crispy brown edges or tips on leaves",
    cause:
      "Typically caused by low humidity, underwatering, or salt build-up from tap water or fertiliser.",
    solution:
      "Increase humidity around the plant, use filtered water, and flush the soil periodically to remove mineral build-up.",
    affectedPlants: ["Fern", "Peace Lily", "Snake Plant"],
  },
  {
    id: "5",
    title: "Pest Infestation",
    symptom: "Tiny white, green, or brown insects on leaves; sticky residue; webbing",
    cause:
      "Common pests like spider mites, mealybugs, and aphids are attracted to stressed or overwatered plants, especially indoors.",
    solution:
      "Isolate the affected plant. Wipe leaves with a damp cloth, then treat with neem oil or insecticidal soap. Check neighbouring plants for spread.",
    affectedPlants: ["Monstera", "Fern", "Crotus"],
  },
];

export const getCareTipsByCategory = (
  category: CareTip["category"]
): CareTip[] => {
  return careTips.filter((tip) => tip.category === category);
};

export const getProblemsByPlant = (plantName: string): CommonProblem[] => {
  return commonProblems.filter((problem) =>
    problem.affectedPlants.includes(plantName)
  );
};
