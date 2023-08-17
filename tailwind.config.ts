import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const theme = {
  primary: "#ff5eda",
  secondary: "#292929",
  accent: "#31b8ec",
  info: "#38bdf8",
  success: "#4ade80",
  warning: "#facc15",
  error: "#fb7185",
};

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
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
} satisfies Config;
