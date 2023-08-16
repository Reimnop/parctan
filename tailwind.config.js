const theme = {
  primary: "#ff5eda",
  secondary: "#292929",
  accent: "#31b8ec",
  info: "#38bdf8",
  success: "#4ade80",
  warning: "#facc15",
  error: "#fb7185",
};

function generateAnimations(animations) {
  const animation = {};
  const keyframes = {};
  for (const [anim, kfs] of Object.entries(animations)) {
    for (const [animName, values] of Object.entries(kfs)) {
      animation[animName] = `${anim} ${animName}`;
      keyframes[animName] = values;
    }
  }
  return { animation, keyframes };
}

const animations = generateAnimations({
  "1s cubic-bezier(0.85, 0, 0.15, 1) 0s infinite alternate both running": {
    "root-1-editor": {
      "0%": { opacity: "50%" },
      "100%": { transform: "scale(1.05) rotate(2deg) translate(1em, -1.1em)" },
    },
  },
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      animation: {
        ...animations.animation
      },
      keyframes: {
        ...animations.keyframes
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...theme,
          neutral: "#d6d3d1",
          "base-100": "#f5f5f4",
        },
        dark: {
          ...theme,
          neutral: "#292524",
          "base-100": "#1c1917",
        },
      },
    ],
  },
};
