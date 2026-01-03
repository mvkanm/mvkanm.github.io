module.exports = {
  content: [
    "./index.html",
    "./public/**/*.{html,js}"
  ],
  darkMode: "class",
  theme: {
      extend: {
        colors: {
          light: {
            lightText: '#1e1e1e',
            lightNavbar:  '#f9fafb',
            lightNavbarBorder: '#e5e5e5',
            lightBody:    '#f2f4f8',
            lightBorder: '#e5e7eb',
            lightBtnColor: '#edf2f8',
            black: '#000',
            white: '#fff',
            lightLinks: '#1e1e1e',
            lightFactsAboutMe: '#edf2f838',
            lightFactsAboutMeHover: '#00000012',
          },
          dark: {
            darkText: '#cecece',
            darkNavbar: '#151517',
            darkNavbarBorder: '#70707016',
            darkBody: '#000000',
            darkBorder: '#6e6e6e41',
            darkBtnColor: '#2b2c30',
            black: '#fff',
            white: '#151517',
            darkLinks: '#cecece',
            darkFactsAboutMe: '#ffffff12',
            darkFactsAboutMeHover: '#ffffff1f',
          }
        }
      },
  },
  plugins: [],
}