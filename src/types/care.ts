export interface CareTip {
  id: string;
  icon: string;
  category: "watering" | "light" | "soil" | "humidity" | "feeding";
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

export interface CommonProblem {
  id: string;
  title: string;
  symptom: string;
  cause: string;
  solution: string;
  affectedPlants: string[];
}
