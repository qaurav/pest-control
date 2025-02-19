module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#16a34a',
          main: '#166534',
          dark: '#15803d',
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
}
