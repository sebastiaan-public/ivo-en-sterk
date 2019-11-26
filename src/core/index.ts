// * 
// * Imports
// * The order matters a lot!
// * 

// * First run independent imports
import { i18n } from '@/plugins/i18n/i18n'
import vuetify from '@/plugins/vuetify'

// * Then initialize firebase
import { 
  firebaseFirestore, firebaseFunctions, firebaseStorage,
  firebaseAnalytics, firebasePerformance
} from './firebase'

// * Then configure Vue to use the Store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// * Then import from and initialize Base App
import { initialize as initializeBaseApp } from 'planhr-base-app'
initializeBaseApp({
  i18n,
  modules: {},
  vuetify
})

// * Then import the rest
import { core } from 'planhr-base-app'
import { router as router_ } from '@/router/router'
import { routes as routes_ } from '@/router/routes'
import { debug as debug_, info as info_, warning as warning_, error as error_, critical as critical_ } from '@/core/utilities/logging'

// *
// *** Exports ***
// *
export namespace firebase {
  export const firestore = firebaseFirestore
  export const functions = firebaseFunctions
  export const storage = firebaseStorage
  export const analytics = firebaseAnalytics
  export const performance = firebasePerformance
}

export namespace log {
  export const debug = debug_
  export const info = info_
  export const warning = warning_
  export const error = error_
  export const critical = critical_
}

export const store = core.store!

export namespace router {
  export const router = router_
  export const routes = routes_
}
