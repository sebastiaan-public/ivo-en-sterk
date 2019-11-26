import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import { beforeEach } from '@/core/router/beforeEach'
import { afterEach } from './hooks/afterEach'


Vue.use(Router)
export const router: any = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
router.beforeEach(beforeEach)
router.afterEach(afterEach)