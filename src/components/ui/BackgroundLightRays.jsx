import LightRays from "../ui/LightRays"; // adjust the path if needed
import Particles from "./Particles";
const BackgroundLightRays = () => {
  return (
    <div className="fixed inset-0  pointer-events-none">
      <LightRays lightSpread={1.1} fadeDistance={1.4} className="custom-rays" />
    </div>
  );
};

export default BackgroundLightRays;
