import "./care.css";
import { CareTip } from "@/types/care";
import { CareTipCard } from "./care-tip-card";

export function CareTipsGrid({ tips }: { tips: CareTip[] }) {
  return (
    <section>
      <h3>Care Tips</h3>
      <div id="care-tips-grid">
        {tips.map((tip) => (
          <CareTipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </section>
  );
}
