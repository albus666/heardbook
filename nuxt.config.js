module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'heriwebnuxt',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt 2 demo project' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/download/HeardLy.png' },
      { rel: 'apple-touch-icon', href: '/img/download/HeardLy.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/sae3zwv.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/main', ssr: true },
    { src: '~plugins/api', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm'
  ],

  // GTM 配置
  gtm: {
    id: process.env.GTM_ID || '', // 设置你的 GTM ID，例如 'GTM-XXXXXXX'
    enabled: !!process.env.GTM_ID // 仅在配置了 GTM_ID 时启用
  },

  // 环境变量配置（可在客户端和服务端访问）
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || 'https://bookheard.soundems.com/',
    usermavenKey: process.env.USERMAVEN_KEY || 'UMFOqspdXa',
    usermavenHost: process.env.USERMAVEN_HOST || 'https://events.usermaven.com',
    usermavenLibUrl: process.env.USERMAVEN_LIB_URL || 'https://t.usermaven.com/lib.js',
    usermavenAutocapture: process.env.USERMAVEN_AUTOCAPTURE !== 'false'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        javascriptEnabled: true
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'eval-cheap-module-source-map'
      }
    }
  },

  // 配置文件监听器，支持 Docker 环境下的热更新
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000  // 每 1000ms 轮询一次文件变化（Docker 环境必需）
    }
  },


  // Server configuration
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
