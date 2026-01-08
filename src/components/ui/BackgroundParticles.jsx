import LightRays from "../ui/LightRays"; // adjust the path if needed
import Particles from "./Particles";
const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0  pointer-events-none">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={150}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default BackgroundParticles;
