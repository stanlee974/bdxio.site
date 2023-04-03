export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  imports: {
    autoImport: false,
  },
  modules: ["@vue-macros/nuxt", "@vueuse/nuxt", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css", "@/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/styles/_variables.scss";
            @import "~/assets/styles/_mixins.scss";
          `,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      API_TOKEN: process.env.API_TOKEN,
      API_URL: process.env.API_URL,
    },
  },
  googleFonts: {
    families: {
      Merriweather: {
        wght: [700],
        ital: [700],
      },
      Lato: {
        wght: [300, 400, 700],
        ital: [300,400, 700],
      },
    },
  },
});
