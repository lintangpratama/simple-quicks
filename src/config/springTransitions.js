const taskTransitionConfig = {
  from: { opacity: 0, transform: "translateX(200%)" },
  enter: { opacity: 1, transform: "translateX(0%)" },
  leave: { opacity: 0, transform: "translateX(200%)" },
};

const inboxTransitionConfig = {
  from: { opacity: 0, transform: "translateX(100%)" },
  enter: { opacity: 1, transform: "translateX(0%)" },
  leave: { opacity: 0, transform: "translateX(100%)" },
};

const inboxModalTransitionConfig = {
  from: { opacity: 0, transform: "translateY(100%)" },
  enter: { opacity: 1, transform: "translateY(0%)" },
  leave: { opacity: 0, transform: "translateY(100%)" },
};

module.exports = {
  taskTransitionConfig,
  inboxTransitionConfig,
  inboxModalTransitionConfig,
};
