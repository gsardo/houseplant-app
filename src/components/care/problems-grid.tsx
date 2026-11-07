import { CommonProblem } from "@/types/care";
import { ProblemCard } from "./problem-card";

export function ProblemsGrid({ problems }: { problems: CommonProblem[] }) {
  return (
    <section>
      <h3>Common Problems</h3>
      <div id="problems-grid">
        {problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </section>
  );
}
