import { useRef } from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { useScroll, useTransform, motion } from "framer-motion";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <div className="bg-background text-white relative">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
      >
        <img
          className="sticky top-0 h-screen object-cover w-full"
          src="/img/napoleon.webp"
        />
      </motion.div>
      <Container className="pb-7 relative z-10 h-[--hero-height]">
        <motion.div
          className="flex flex-col items-start h-full justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <h1 className="text-5xl font-bold mb-10">
            All Apple Originals. <br /> Only on Apple TV+.
          </h1>
          <Button className="mb-16" size="large">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the Apple TV app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
