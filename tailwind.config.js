/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary": "#6741d9",
        "primary-light": "#7950f2",
        "sky": "#dee2e6",
        "sky-dark": "#adb5bd",
        "gray-100": "#343a40",
        "gray-500": "#2b3035",
        "gray-900": "#212529",
        "red": "#fa5252",
        "red-dark": "#e03131",
      },
      fontFamily: {
        "popsans": ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
    }
  },
  plugins: [],
}

