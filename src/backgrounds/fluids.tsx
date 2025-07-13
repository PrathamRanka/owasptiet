import { LavaLamp } from "@/ui/fluid-bob";

export function FluidBackground() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden">
     <LavaLamp/>
    </div>
  );
}