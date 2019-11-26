import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { themeColors, darkThemeColors } from './theme'

Vue.use(Vuetify)


import AppsIcon from '@/components/icons/AppsIcon.vue'


export default new Vuetify({
  theme: {
    dark: false,
    options: {
      customProperties: true
    },
    themes: {
      light: themeColors,
      dark: darkThemeColors
    }
  },
  icons: {
    iconfont: 'mdi',
    values: {
      apps: { component: AppsIcon }
    }
  }
})

