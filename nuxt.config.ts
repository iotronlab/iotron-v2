// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      titleTemplate: "%s - Progressive Web Agency",
      title: "JetPax",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Progressive Web Agency",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: [],
  modules: [
    "@nuxtjs/google-fonts",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(
          vuetify({
            styles: { configFile: "assets/css/settings.scss" },
          })
          // {
          // styles: { configFile: 'assets/css/settings.scss' },
          // }
        )
      );
    },
  ],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "http://localhost:8000/",
      apiVersion: "http://localhost:8000/api/v1/",
      sanctumAuth: {
        baseUrl: "http://localhost:8000",
        endpoints: {
          csrf: "/sanctum/csrf-cookie",
          login: "/api/v1/login",
          logout: "/api/v1/logout",
          user: "/api/v1/user",
        },
        redirects: {
          home: "/",
          login: "/auth/sign-in",
          logout: "/",
        },
      },
    },
  },
  googleFonts: {
    download: false,
    families: {
      "Josefin Sans": {
        wght: [400, 700],
      },
      Poppins: {
        wght: [800],
      },
    },
  },

  build: {
    transpile: ['vuetify'],
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
});
