import { Route } from 'vue-router'
import { store } from '@/core'
import { NavMode } from 'planhr-base-app/dist/store/modules/app/nav/types'



export function updateAppBar(from: Route, to: Route) {

  // * set depth
  const depth = to.meta.depth || 0
  store.commit('system/setDepth', depth)

  const mode = to.meta.mode || NavMode.NORMAL
  store.commit('nav/setMode', mode)

  // * set showAppBar
  const showAppBar = to.meta.showAppBar !== false
  store.commit('nav/setHasNav', showAppBar)

  // * set showBackButton
  const showBackButton = depth > 0
  store.commit('nav/setHasBackButton', showBackButton)
  
  // * set showBurger
  const showBurger = to.meta.showAppBar !== false && to.meta.showBurger !== false
  store.commit('nav/setHasBurger', showBurger)
  
  // * reset drawer
  const drawer = false
  store.commit('nav/setDrawer', drawer)

  // * tabs
  const tabs = to.meta.tabs
  store.commit('nav/setTabs', tabs)
    
  // * title -> pages can still override it
  const title = {
    thin: to.meta.titleThin,
    regular: to.meta.titleRegular || ''
  }
  store.commit('nav/setTitle', title)
}