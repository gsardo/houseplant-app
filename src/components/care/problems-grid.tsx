import { CommonProblem } from "@/types/care";
import { ProblemCard } from "./problem-card";

export function ProblemsGrid({ problems }: { problems: CommonProblem[] }) {
  return (
    <section>
      <h3>Common Problems</h3>
      {/* Asymmetric grid with varied col-span values */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {problems.map((problem, index) => (
          <div
            key={problem.id}
            className={
              index === 0
                ? "md:col-span-4"
                : index <= 2
                  ? "md:col-span-2"
                  : "md:col-span-2"
            }
          >
            <ProblemCard problem={problem} />
          </div>
        ))}
      </div>
    </section>
  );
}
