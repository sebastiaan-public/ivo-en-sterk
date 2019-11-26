import 'babel-polyfill'


// * Always import core first!
import '@/core'

import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import VueApp from '@/App.vue'
import { i18n } from '@/plugins/i18n/i18n'
import { router, store } from '@/core'

import 'inobounce'


// import '@/utilities/registerServiceWorker'

// TODO - replace in Vue 3
// import VueCompositionApi from '@vue/composition-api'
// Vue.use(VueCompositionApi)


// Register global components
import TheFullPageContainer from '@/core/components/TheFullPageContainer.vue'
Vue.component('TheFullPageContainer', TheFullPageContainer)

import TheFullPageScrollContainer from '@/core/components/TheFullPageScrollContainer.vue'
Vue.component('TheFullPageScrollContainer', TheFullPageScrollContainer)

// * production settings
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'


new Vue({
  router: router.router,
  store: store,
  vuetify,
  i18n,
  render: h => h(VueApp)
}).$mount('#app')


//* check browser version
import { browserIsNotSupported, reportInvalidBrowserToUser } from '@/core/utilities/browser'
if (browserIsNotSupported()) {
  reportInvalidBrowserToUser()
}