import { Route } from 'vue-router'
import { store } from '@/core'
import { debug, info, error } from '@/core/utilities/logging'
import { nextAnonymousPlanningRoute, nextLoggedInPlanningRoute } from '@/router/planning/planning'
import { sleep } from '@/core/utilities/time'


// * trigger
export async function beforeEach(to: Route, from: Route, next: any) {

  debug(`ROUTER.beforeEach<start> from: ${from.name} - to: ${to.name}`)
  await store.dispatch('system/startLoading')

  try {
    // * ensure store is initialized
    await storeInitialized()

    // * anonymous planning routes
    if (routeRequiresPlanning(to)) {
      const planningRoute = await nextAnonymousPlanningRoute()
      if (planningRoute) {
        debug('ROUTER.beforeEach<end> - next(nextAnonymousPlanningRoute)')
        next(planningRoute)
        return
      }
    }

    // * if route does not require login -> ignore the rest
    if (! routeRequiresLogin(to)) {
      next()
      return
    }

    // * now ensure login
    await loginFinished()

    // * logged-in planning routes
    if (routeRequiresPlanning(to)) {
      const planningRoute = await nextLoggedInPlanningRoute()
      if (planningRoute) {
        debug('ROUTER.beforeEach<end> - next(nextLoggedInPlanningRoute())')
        next(planningRoute)
        return
      }
    }


    // * login / restore session if necessary
    if (routeRequiresLogin(to)) {
      if (! store.getters['auth/loggedIn']) {
        debug('ROUTER.beforeEach<end> - next(login)')
        next({
          name: 'login',
          query: { nextRoute: to.path }
        })
        return
      }
    }

    // * continue regular route
    debug('ROUTER.beforeEach<end> -> next() -> properly logged in or no login required')
    next()
    return
  }

  catch (err) {
    error('ROUTER.beforeEach<error> - ', err)
  }

  finally {
    await store.dispatch('system/stopLoading')
  }
}


function routeRequiresLogin(route: Route): boolean {
  // * defaults to true if loginRequired not specified on route.meta
  return (!route.meta.hasOwnProperty('loginRequired')) || route.meta.loginRequired
}


function routeRequiresPlanning(route: Route): boolean {
  // * defaults to false if checkPlanning not specified on route.meta
  return route.meta.hasOwnProperty('checkPlanning') && route.meta.checkPlanning
}

async function storeInitialized() {
  if (!store.getters['initialized']) {
    await store.dispatch('onInitialize')
  }

  // * wait until store has initialized
  while (!store.getters['initialized']) {
    info('ROUTER.storeInitialized<sleep> - while not initialized')
    await sleep(100)
  }
}

async function loginFinished() {

  debug(`ROUTER.loginFinished<start> - loggedIn: ${store.getters['auth/loggedIn']}, expectLogin: ${store.getters['auth/expectLogin']}`)

  if (!store.getters['auth/loggedIn'] && store.getters['auth/expectLogin']) {

    // * wait for login to proces to finish (max 5000 ms)
    await Promise.race([ stoppedLoggingIn(), sleep(5000) ])
    
    if (! store.getters['auth/loggedIn']) {
      store.dispatch('auth/doNotExpectLogin')
    }
  }
}

async function stoppedLoggingIn() {
  while (!store.getters['auth/loggedIn'] && store.getters['auth/expectLogin']) {
    info('ROUTER.loginFinished - while loggingIn')
    await sleep(100)
  }
}