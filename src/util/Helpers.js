// STATS HELPERS
export function calcAccuracy(cor, ans) {
  return ans === 0 ? 0 : Math.round((cor / ans) * 100);
}

export function calcTrueAccuracy(scr, ans, pts) {
  return ans === 0 ? 0 : Math.round((scr / pts) * 100);
}

// MODAL HELPERS
export function getModalColor(type) {
  return type === "correct" ? "green" : type === "incorrect" ? "red" : "";
}

export function getModalWidth(type) {
  return type === "welcome" ? "" : "small-modal";
}

// GAME HELPERS
export function getDiffLevel(numAns) {
  if (numAns > 8) return 5;
  else if (numAns > 6) return 4;
  else if (numAns > 4) return 3;
  else if (numAns > 2) return 2;
  else return 1;
}

// MODAL ANIMATION
export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 400,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
