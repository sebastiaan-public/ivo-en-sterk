import { i18n } from '@/plugins/i18n/i18n'

import SuccessPage from '@/views/main/SuccessPage.vue'
import FailPage from '@/views/main/FailPage.vue'
import { NavMode } from 'planhr-base-app'

import { routes as coreRoutes } from '@/core/router/routes'

const appRoutes = [
  {
    path: '/5ucc355',
    name: 'success',
    component: SuccessPage,
    meta: {
      depth: 1, 
      mode: NavMode.NORMAL,
      checkPlanning: false,
      loginRequired: false,
      titleThin: 'Gefeliciteerd',
      titleRegular: 'Het kado ligt hier:'
    }
  },

  {
    path: '/fail',
    name: 'fail',
    component: FailPage,
    meta: {
      depth: 1, 
      mode: NavMode.NORMAL,
      checkPlanning: false,
      loginRequired: false,
      titleThin: 'AH AH AH',
      titleRegular: 'FAILURE'
    }
  },

  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "tests" */ '@/views/main/TestPage.vue'),
    meta: {
      depth: 0, 
      checkPlanning: false,
      loginRequired: false,
      titleThin: 'Test',
      titleRegular: 'Test'
    }
  }, 

  // * default route:
  { path: '*', redirect: '/' }
]

export const routes = [
  ...coreRoutes,
  ...appRoutes
]