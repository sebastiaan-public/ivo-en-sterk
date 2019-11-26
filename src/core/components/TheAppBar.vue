<template lang="pug">
  v-app-bar(
    v-if="showAppBar"
    app color="menuBackground"
    :dark="darkMode"
    extension-height="60px"
    :clipped-left="['lg', 'xl'].includes($vuetify.breakpoint.name)"
    :clipped-right="! ['lg', 'xl'].includes($vuetify.breakpoint.name)"
  )
    v-btn(
      v-if="showBackButton"
      @click="goBack"
      color="menu"
      small text
      max-width="40px"
      class="enlarge-click-area-all"
      :class="['xs'].includes($vuetify.breakpoint.name) ? '' : 'mt-n2'"
    )
      v-icon(
        color="menu"
        :large="! ['xs'].includes($vuetify.breakpoint.name)"
      ) mdi-arrow-left
    
    v-img(
      v-else
      contain
      src="/ivo-en-sterk-1.jpg"
      :height="['xs'].includes($vuetify.breakpoint.name) ? '60px' : '70px'"
      :width="['xs'].includes($vuetify.breakpoint.name) ? '60px' : '70px'"
      :max-width="['xs'].includes($vuetify.breakpoint.name) ? '60px' : '70px'"
      :class="['xs'].includes($vuetify.breakpoint.name) ? '' : 'mt-n1'"
    )
    
    v-spacer

    // * title
    v-toolbar-title(
      :class="['sm', 'md'].includes($vuetify.breakpoint.name) ? 'pl-12' : ''"
    )
      // * == xs
      template(v-if="['xs'].includes($vuetify.breakpoint.name)")
        .h6.menu--text.text-uppercase
          // * regular part
          span  {{ title.regular }}

      // * >= sm
      template(v-else)
        .headline.menu--text.text-uppercase
          // * thin part
          span.font-weight-light {{ title.thin }} 
          // * regular part
          span  {{ title.regular }} 

    v-spacer
      
    v-app-bar-nav-icon(
      :color="(!drawer && showBurger) ? 'menu' : 'menuBackground'"
      @click.native="toggleDrawer"
      class="enlarge-click-area-ltr"
    )

    template(v-if="tabs" v-slot:extension)
      v-tabs(
        icons-and-text
        background-color="menuBackground"
        slider-color="menu"
        height="60px"        
        
        :grow="['xs'].includes($vuetify.breakpoint.name)"
        :fixed-tabs="['sm', 'md', 'lg', 'xl'].includes($vuetify.breakpoint.name)"
      )       
        v-tab(
          v-for="(tab, index) in tabs"
          :key="index"
          :to="tab.route"
          :class="['xs'].includes($vuetify.breakpoint.name) && index===0 ? 'ml-0' : ''"
        )
          span.menu--text {{ tab.text }}
          v-icon.mb-1(x-large colorMain="menu") {{ '$vuetify.icons.' + tab.icon }}

</template>

<script lang="ts">
  import Vue from 'vue'
  import { Route } from 'vue-router'
  import Component from 'vue-class-component'
  import { Getter, Mutation, Action } from 'vuex-class'
  import { store } from '@/core'
  

  @Component({})
  export default class TheAppBar extends Vue {

    get breakpoint() { return store.getters['system/breakpoint'] }
    get showAppBar() { return store.getters['nav/showNav'] }
    get showBackButton() { return store.getters['nav/showBackButton'] }
    get showBurger() { return store.getters['nav/showBurger'] }
    get tabs() { return store.getters['nav/tabs'] }
    get title() { return store.getters['nav/title'] }

    get drawer() { return store.getters['nav/drawer'] }
    async toggleDrawer() { await store.dispatch('nav/toggleDrawer') }

    get previousRoute() { return store.getters['routerHistory/previous'] }
    async removeLastRoute() { await store.dispatch('routerHistory/remove') }

    goBack() {
      this.removeLastRoute()
      this.$router.push(this.previousRoute.path)
    }
    
    get darkMode(): boolean {
      return process.env.VUE_APP_MENU_DARK_MODE === '1'
    }

    

  }
</script>
