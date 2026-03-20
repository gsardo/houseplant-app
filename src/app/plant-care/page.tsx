import { careTips, commonProblems } from "@/data/care-tips";
import { CareTipsGrid } from "@/components/care/care-tips-grid";
import { ProblemsGrid } from "@/components/care/problems-grid";

export default function PlantCarePage() {
  return (
    <div className="care-page max-w-7xl mx-auto px-5 py-12 space-y-12">
      <h2>Plant Care</h2>
      <CareTipsGrid tips={careTips} />
      <ProblemsGrid problems={commonProblems} />
    </div>
  );
}
