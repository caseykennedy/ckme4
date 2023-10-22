export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.075, delayChildren: 0.03 * i },
  }),
};

export const staggerChild = {
  hidden: {
    opacity: 0,
    y: 16,
    rotateZ: 3,
    transition: {},
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      velocity: 6,
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export const revealVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -400, duration: 0.5, ease: "easeOut" },
    },
  },
  hidden: {
    y: 8,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -400, duration: 0.5, ease: "easeOut" },
    },
  },
};
