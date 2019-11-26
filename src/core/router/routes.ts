import LoginPage from '@/core/views/auth/LoginPage.vue'
import ResetPasswordPage from '@/core/views/auth/ResetPasswordPage.vue'
import SignUpPage from '@/core/views/auth/SignUpPage.vue'
import TermsAndConditionsPage from '@/core/views/auth/TermsAndConditionsPage.vue'
import ActivateCouponPage from '@/core/views/auth/ActivateCouponPage.vue'

import { i18n } from '@/plugins/i18n/i18n'


export const routes = [

  // * Auth
  {
    path: '/',
    name: 'login',
    component: LoginPage,
    meta: { depth: 0, loginRequired: false, titleThin: '', titleRegular: i18n.t('core.pages.LoginPage.router.title'), excludeAsBackRoute: true }
  },

  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { depth: 0, loginRequired: false, titleThin: '', titleRegular: 'Spannend!', excludeAsBackRoute: true }
  },

  {
    path: '/reset-password',
    name: 'resetPassword',
    component: ResetPasswordPage,
    meta: { depth: 0, loginRequired: false, titleThin: '', titleRegular: i18n.t('core.pages.ResetPasswordPage.router.title'), excludeAsBackRoute: true }
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage,
    meta: { depth: 0, loginRequired: false, titleThin: '', titleRegular: i18n.t('core.pages.SignUpPage.router.title'), excludeAsBackRoute: true }
  },

  {
    path: '/terms-and-conditions',
    name: 'terms-and-conditions',
    component: TermsAndConditionsPage,
    meta: { depth: 0, loginRequired: true, titleThin: '', titleRegular: i18n.t('core.pages.TermsAndConditionsPage.router.title'), excludeAsBackRoute: true }
  },

  {
    path: '/activate-coupon/:coupon_id?',
    name: 'activate-coupon',
    component: ActivateCouponPage,
    meta: { depth: 1, forceCreate: 'always', titleRegular: 'Activeren', excludeAsBackRoute: true }
  },

  {
    path: '/create-super-admin',
    name: 'create-super-admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/core/views/auth/CreateSuperAdminPage.vue'),
    meta: {
      depth: 0, 
      checkPlanning: false,
      loginRequired: true,
      titleThin: 'CREATE',
      titleRegular: 'SUPER ADMIN'
    }
  }, 
  
  // * Admin
  {
    path: '/invitations',
    name: 'invitations',
    component: () => import(/* webpackChunkName: "admin" */ '@/core/views/admin/invitations/InvitationPage.vue'),
    meta: { depth: 0, forceCreate: 'always', loginRequired: true }
  }
]
