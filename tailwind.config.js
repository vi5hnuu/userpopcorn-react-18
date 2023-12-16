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
      boxShadow: {
        '3xl': 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
      }
    }
  },
  plugins: [],
}

