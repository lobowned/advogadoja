import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

const directionVariants = {
  up: { hidden: { y: 40 }, visible: { y: 0 } },
  down: { hidden: { y: -40 }, visible: { y: 0 } },
  left: { hidden: { x: -40 }, visible: { x: 0 } },
  right: { hidden: { x: 40 }, visible: { x: 0 } },
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: once,
  });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          ...directionVariants[direction].hidden,
        },
        visible: {
          opacity: 1,
          ...directionVariants[direction].visible,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
