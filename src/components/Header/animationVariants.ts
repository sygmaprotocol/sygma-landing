
export const navbarVariants = {
    visible: {
      opacity: 1, y: 0
    },
    hidden: {
      opacity: 0, y: -50
    },
  
}

export const bgVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 1250px 35px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 1250px 35px)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      restDelta: 5,
      damping: 20,
    }
  }
};

export const menuVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
  open: {
    transition: {
      delay: 1,
      staggerChildren: 0.02,
      delayChildren: 0.2,
    }
  }
};

export const opacityVariants = {
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: 40}
    }
  },
  open: {
    opacity: 1,
    transition: { 
      delay: 1,
      y: { stiffness: 1000, velocity: -400}
    },
  }
}

export const menuItemVariants = {
  closed: {
    y: -25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000}
    }
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 20}
    }
  }
}

