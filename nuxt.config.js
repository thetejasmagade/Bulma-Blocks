import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - bulma-blocks',
    title: 'Bulma Blocks - Open-Source Ready to use Blocks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bulma Blocks is a free and open-source ready to use Blocks' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#edf2f7' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  seo: {
    baseUrl: 'https://bulmablocks.netlify.app/',
    name: 'Bulma Blocks',
    templateTitle: 'Bulma Blocks - Ready to use Blocks',
    description: "Bulma Blocks is a free and open-source ready to use Blocks",
    keywords: 'nuxt, bulma, bulma css, bulma blocks, css, tailwind, bulma-blocks, html, open-source, nuxt-js, vue, vuejs',
    canonical: 'auto',
    isForcedTrailingSlash: false,
    author: 'Tejas Magade',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-clipboard2',
    // highlightjs
    ['nuxt-highlightjs', {
      style: 'atom-one-light'
    }]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      disable: true,
      // themes: {
      //   light: {
      //     primary: '#3f51b5',
      //     secondary: '#b0bec5',
      //     accent: '#8c9eff',
      //     error: '#b71c1c',
      //   },
      // },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
