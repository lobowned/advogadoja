// Framer Motion animation variants

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const blurReveal = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const hoverLift = {
  y: -5,
  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const tapScale = {
  scale: 0.95
};

// Page Transition Variants
export const pageTransition = {
  fade: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  },
  scale: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.02, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } 
    },
    exit: { 
      opacity: 0, 
      x: 20, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  }
};

// Hero-specific variants
export const heroReveal = {
  hidden: { 
    opacity: 0, 
    scale: 0.5, 
    filter: "blur(30px)",
    y: -50 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    y: 0,
    transition: { 
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      scale: { type: "spring", damping: 15, stiffness: 100 }
    }
  }
};

export const heroTitle = {
  hidden: { 
    opacity: 0, 
    y: 60,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { 
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const heroStagger = {
  hidden: {},
  visible: {
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

export const heroBadge = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 15 
    }
  }
};

export const heroAvatar = {
  hidden: { 
    opacity: 0, 
    scale: 0, 
    y: 30 
  },
  visible: (i: number) => ({ 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      delay: 0.6 + (i * 0.05), 
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  })
};
