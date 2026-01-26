import { Recommendation, Answers } from "./types";

type Difficulty = "beginner" | "intermediate" | "expert";
type Light = "low" | "medium" | "bright";

type Plant = {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty[];
  light: Light[];
  petSafe: boolean;
};

const plants: Plant[] = [
  {
    id: "1",
    title: "Snake Plant",
    difficulty: ["beginner", "intermediate", "expert"],
    light: ["low", "medium"],
    petSafe: true,
    description: "Nearly indestructible and tolerates low light",
  },
  {
    id: "2",
    title: "Monstera",
    difficulty: ["beginner", "intermediate"],
    light: ["medium", "bright"],
    petSafe: false,
    description: "Stunning leaves, easy to grow with indirect light",
  },
  {
    id: "3",
    title: "Spider Plant",
    difficulty: ["beginner"],
    light: ["low", "medium", "bright"],
    petSafe: true,
    description: "Tolerates neglect and safe for pets",
  },
  {
    id: "4",
    title: "Boston Fern",
    difficulty: ["beginner", "intermediate"],
    light: ["medium"],
    petSafe: true,
    description: "Pet-safe and loves humid spots with indirect light",
  },
  {
    id: "5",
    title: "Pothos",
    difficulty: ["beginner"],
    light: ["low", "medium"],
    petSafe: false,
    description: "Cascading vines that thrive in low light",
  },
  {
    id: "6",
    title: "Fiddle Leaf Fig",
    difficulty: ["expert"],
    light: ["bright"],
    petSafe: false,
    description: "Dramatic foliage, requires consistent care and bright light",
  },
  {
    id: "7",
    title: "Parlor Palm",
    difficulty: ["beginner", "intermediate"],
    light: ["low", "medium"],
    petSafe: true,
    description: "Elegant palm that's easy to care for and pet-friendly",
  },
  {
    id: "8",
    title: "Aloe Vera",
    difficulty: ["beginner", "intermediate"],
    light: ["medium", "bright"],
    petSafe: false,
    description: "Useful succulent that thrives with plenty of light",
  },
  {
    id: "9",
    title: "Calathea",
    difficulty: ["expert"],
    light: ["medium"],
    petSafe: true,
    description: "Stunning patterned leaves but demands high humidity and filtered water",
  },
  {
    id: "10",
    title: "Maidenhair Fern",
    difficulty: ["expert"],
    light: ["medium"],
    petSafe: true,
    description: "Delicate fronds that need consistent moisture and humidity",
  },
  {
    id: "11",
    title: "Alocasia",
    difficulty: ["expert"],
    light: ["medium", "bright"],
    petSafe: false,
    description: "Dramatic elephant ear leaves, needs humidity and careful watering",
  },
  {
    id: "12",
    title: "String of Pearls",
    difficulty: ["expert"],
    light: ["bright"],
    petSafe: false,
    description: "Unique trailing succulent that's easy to overwater",
  },
];

export function provideRecommendations(answers: Answers): Recommendation[] {
  const matches = plants.filter((plant) => {
    const matchesDifficulty = plant.difficulty.includes(
      answers.question1 as Difficulty
    );
    const matchesLight = plant.light.includes(answers.question2 as Light);
    const matchesPets = answers.question3 === "no" || plant.petSafe;

    return matchesDifficulty && matchesLight && matchesPets;
  });

  if (matches.length === 0) {
    return [
      {
        id: "fallback",
        title: "Spider Plant",
        description: "A great all-rounder that adapts to most conditions!",
      },
    ];
  }

  return matches.map(({ id, title, description }) => ({ id, title, description }));
}
