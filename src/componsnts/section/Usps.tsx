import { FadeIn } from "../FadeIn";
import { Container } from "../ui/Container";

export const Usps = () => {
  return (
    <Container className="text-4xl font-bold space-y-12 text-white py-36 max-w-[692px] z-10 relative">
      <FadeIn>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          Watch in 4K HDR video with immersive Spatial Audio.<sup>1</sup>
        </p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};
