/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-main": "#333333",
        "blue-main": "#2F80ED",
        "floating-dark": "#4F4F4F",
        "input-brd": "rgba(130, 130, 130, 1)",
        "self-chat": "rgba(238, 220, 255, 1)",
        "chat-2": "rgba(252, 238, 211, 1)",
        modal: "rgba(189, 189, 189, 1)",
        inbox: "rgba(135, 133, 255, 1)",
        task: "rgba(248, 183, 107, 1)",
      },
    },
  },
  plugins: [],
};
