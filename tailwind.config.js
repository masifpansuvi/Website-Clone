// export default {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["'Source Sans 3'", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };
exports = {
  content: [
    "./index.html",
    "./src/*/.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["'Source Sans 3'", "system-ui", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    extend: {},
  },
  plugins: [],
};