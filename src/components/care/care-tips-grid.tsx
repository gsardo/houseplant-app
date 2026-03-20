import { CareTip } from "@/types/care";
import { CareTipCard } from "./care-tip-card";

export function CareTipsGrid({ tips }: { tips: CareTip[] }) {
  return (
    <section>
      <h3>Care Tips</h3>
      {/* Responsive grid: 1 col → 2 cols → 3 cols. First card spans 2 on lg. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div key={tip.id} className={index === 0 ? "lg:col-span-2" : ""}>
            <CareTipCard tip={tip} />
          </div>
        ))}
      </div>
    </section>
  );
}
