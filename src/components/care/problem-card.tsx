import { CommonProblem } from "@/types/care";

export function ProblemCard({ problem }: { problem: CommonProblem }) {
  return (
    <div className="bg-dark-100 rounded-2xl p-5 shadow-inner shadow-light-100/10">
      {/* Vertical grid: symptom header, cause body (grows), solution footer */}
      <div className="grid grid-rows-[auto_1fr_auto] gap-4 h-full">
        <div>
          <h4 className="text-white font-bold text-lg text-left mx-0 max-w-none mb-1">
            {problem.title}
          </h4>
          <p className="text-red-400 text-sm italic">{problem.symptom}</p>
        </div>

        <div>
          <p className="text-gray-100 text-sm leading-relaxed">
            <span className="text-white font-semibold">Cause: </span>
            {problem.cause}
          </p>
        </div>

        <div className="border-t border-white/10 pt-3">
          <p className="text-green-400 text-sm leading-relaxed">
            <span className="font-semibold">Solution: </span>
            {problem.solution}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {problem.affectedPlants.map((plant) => (
              <span
                key={plant}
                className="px-2 py-0.5 bg-white/10 text-white/70 rounded-full text-xs"
              >
                {plant}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
