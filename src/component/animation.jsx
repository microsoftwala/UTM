const fadeVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const fadeTransition = {
  duration: 0.6,
};

const popupVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "100%",
  },
};

const popupTransition = {
  type: "spring",
  duration: 0.9,
};

export default {
  fadeTransition,
  fadeVariants,
  popupTransition,
  popupVariants,
};
