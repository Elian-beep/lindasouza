// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
  devServer: {
    port: 8080,
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Linda Souza',
      meta: [{}],
      link: [
        { rel: '', type: 'image/png', href: '' }
      ]
    }
  }
})