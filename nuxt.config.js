// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      titleTemplate: '%s - Progressive Web Agency',
      title: 'iotron',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Progressive Web Agency',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  // css: ['/assets/styles.css'],
  modules: [
    '@nuxtjs/google-fonts',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        config.plugins.push(
          vuetify()
        )
      )
    },
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'http://localhost:8000/',
      apiVersion: 'http://localhost:8000/api/',
      sanctumAuth: {
        baseUrl: 'http://localhost:8000',
        endpoints: {
          csrf: '/sanctum/csrf-cookie',
        },
        redirects: {
          home: '/',
        },
      },
    },
  },
  // google fonts
  googleFonts: {
    families: {
      'IBM+Plex+Mono': true,
      Charmonman: true,
      'Atkinson+Hyperlegible': true,
    },
  },

  build: {
    transpile: ['vuetify', 'gsap'],
    // analyze: {
    //   analyzerMode: 'static',
    // },

    // postcss: {
    //   postcssOptions: {
    //     plugins: {
    //       tailwindcss: {},
    //       autoprefixer: {},
    //     },
    //   },
    // },
  },
})
