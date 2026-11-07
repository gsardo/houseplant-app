import { careTips, commonProblems } from "@/data/care-tips";
import { CareTipsGrid } from "@/components/care/care-tips-grid";
import { ProblemsGrid } from "@/components/care/problems-grid";

export default function PlantCarePage() {
  return (
    <>
      <h2>Plant Care</h2>
      <CareTipsGrid tips={careTips} />
      <ProblemsGrid problems={commonProblems} />
    </>
  );
}
