import { CommonProblem } from "@/types/care";

export function ProblemCard({ problem }: { problem: CommonProblem }) {
  return (
    <article>
      <h4>{problem.title}</h4>
      <p><em>{problem.symptom}</em></p>
      <p><strong>Cause: </strong>{problem.cause}</p>
      <p><strong>Solution: </strong>{problem.solution}</p>
      <ul>
        {problem.affectedPlants.map((plant) => (
          <li key={plant}>{plant}</li>
        ))}
      </ul>
    </article>
  );
}
