import { CareTip } from "@/types/care";

export function CareTipCard({ tip }: { tip: CareTip }) {
  return (
    <article>
      <span>{tip.icon}</span>
      <h4>{tip.title}</h4>
      <span data-level={tip.difficulty}>{tip.difficulty}</span>
      <p>{tip.description}</p>
    </article>
  );
}
