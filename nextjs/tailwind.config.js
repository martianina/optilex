/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["class", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#FFDD00", // Gold color
          "primary-content": "#FFFFFF", // White text on primary
          secondary: "#FFDD00", // Very dark navy for secondary elements
          "secondary-content": "#E6E6E6", // Light grayscale for helper text
          accent: "#FFDD00", // Bright gold accent color
          "accent-content": "#000000", // black text on accent
          neutral: "#0D1B2A", // Very dark navy for all neutral backgrounds
          "neutral-content": "#E6E6E6", // Light grayscale text
          "base-100": "#0B132B", // Very dark navy for background
          "base-200": "#0B132B", // Same dark navy for consistency
          "base-300": "#162950", // navy
          "base-content": "#E6E6E6", // Light grayscale text
          info: "#00BFFF", // Teal for info
          success: "#34EEB6", // Green for success
          warning: "#FFCF72", // Yellow/gold for warning
          error: "#FF8863", // Red for error

          "--rounded-btn": "9999rem", // Make buttons fully rounded

          ".navbar": {
            "background-color": "#0B132B", // Blend navbar with very dark navy background
          },

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
