import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import {} from "@mdi/js";

import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomDarkTheme = {
    dark: true,
    colors: {
      background: "#0f000c",
      surface: "#0f000c",
      primary: "#d946ef",
      accent: "#86198f",
      "primary-darken-1": "#3700B3",
      secondary: "#03DAC6",
      "secondary-darken-1": "#018786",
      error: "#B00020",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  };
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myCustomDarkTheme",
      themes: {
        myCustomDarkTheme,
      },
    },
    icons: {
      defaultSet: "mdi",
      aliases: {
        ...aliases,
      },
      sets: {
        mdi,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
