/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC6600',
        text: '#212121',
        white: '#FFFFFF',
        bg_light: '#FFF0E1',
        bg_light_transparent: '#FFF0E1',
        card_bg: '#D9D9D9',
      }
    },
  },
plugins: [],
}

