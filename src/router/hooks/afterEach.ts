import { Route } from 'vue-router'
import { store } from '@/core'
import { updateAppBar } from './updateAppBar'


// * trigger
export async function afterEach(to: Route, from: Route) {
  if (! excludeAsBackRoute(to)) {
    store.dispatch('routerHistory/add', {
      name: to.name,
      path: to.path,
      meta: to.meta
    })
  }

  // * app bar
  updateAppBar(from, to)
}


function excludeAsBackRoute(route: Route): boolean {
  // * defaults to false if excludeAsBackRoute not specified on route.meta
  return route.meta.excludeAsBackRoute === true
}