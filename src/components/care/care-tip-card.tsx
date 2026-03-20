import { CareTip } from "@/types/care";

const difficultyColors: Record<CareTip["difficulty"], string> = {
  beginner: "bg-green-500/20 text-green-400",
  intermediate: "bg-yellow-500/20 text-yellow-400",
  advanced: "bg-red-500/20 text-red-400",
};

export function CareTipCard({ tip }: { tip: CareTip }) {
  return (
    <div className="bg-dark-100 rounded-2xl p-5 shadow-inner shadow-light-100/10">
      {/* Internal grid: icon + title row, then description */}
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-x-3 gap-y-2">
        <span className="text-3xl row-span-2 self-center">{tip.icon}</span>

        <div className="flex items-center gap-2">
          <h4 className="text-white font-bold text-lg text-left mx-0 max-w-none mb-0">
            {tip.title}
          </h4>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[tip.difficulty]}`}
          >
            {tip.difficulty}
          </span>
        </div>

        <p className="text-gray-100 text-sm leading-relaxed">
          {tip.description}
        </p>
      </div>
    </div>
  );
}
