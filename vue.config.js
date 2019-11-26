const fs = require('fs')
const webpack = require('webpack')
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_PACKAGE_VERSION: '"' + version + '"'
        }
      })
    ]
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  pwa: {
    name: 'Classroomscreen',
    themeColor: `${process.env.VUE_APP_COLOR_MENU}`,
    msTileColor: `${process.env.VUE_APP_COLOR_MENU}`,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
 
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      include: [/\.jpg$/, /\.png$/],
      exclude: [/\.js$/, /\.css$/, /\.html$/]
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/sass/main.scss"'
      }
    }
  },

  transpileDependencies: ['vuetify']
}
