import { m, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { pageTransition } from "@/lib/motion-variants";

interface PageTransitionProps {
  children: ReactNode;
  variant?: keyof typeof pageTransition;
  className?: string;
}

const PageTransition = ({ 
  children, 
  variant = "slideUp",
  className = ""
}: PageTransitionProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  // If user prefers reduced motion, render without animations
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = pageTransition[variant];
  
  return (
    <m.div
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </m.div>
  );
};

export default PageTransition;
