<template lang="pug">

  v-navigation-drawer(
    app
    v-model="drawer"
    color="menuBackground"
    :dark="darkMode"
    clipped 
    
    :left="['lg', 'xl'].includes($vuetify.breakpoint.name)"
    :right="! ['lg', 'xl'].includes($vuetify.breakpoint.name)"
    
    :expand-on-hover="['lg', 'xl'].includes($vuetify.breakpoint.name)"
    :mini-variant="showMiniVariant"
    @update:mini-variant="miniVariant = $event"
  )

    // * Current User / Title
    template(v-slot:prepend)
      v-list-item(v-if="loggedIn" two-line)
        v-list-item-avatar(v-if="userPhotoUrl")
          img(:src="userPhotoUrl")
        v-list-item-content
          v-list-item-title {{ userName }}
          v-list-item-subtitle {{ subtitle }}

      v-list-item(v-else two-line)
        v-list-item-content(:class="miniVariant ? 'menuBackground--text' : 'white--text'")
          v-list-item-title(class="title")
            span Niet ingelogd
          v-list-item-subtitle(:class="miniVariant ? 'menuBackground--text' : 'white--text'")
            span Ga naar: 
            router-link(to="/login")
              u(:class="miniVariant ? 'menuBackground--text' : 'white--text'") log in
            span  / 
            router-link(to="/signup") 
              u(:class="miniVariant ? 'menuBackground--text' : 'white--text'") nieuw account

    v-divider

    v-list(dense nav shaped)
      v-list-item(
        v-for='item in items'
        :key='item.title'
        :to="item.to || null"
        @click="item.click ? item.click() : null"
      )
        v-list-item-icon
          v-icon(v-if="item.icon.startsWith('mdi-')" color="menu") {{ item.icon }}
          v-icon(v-else colorMain="menu") {{ '$vuetify.icons.' + item.icon }}
        v-list-item-content
          v-list-item-title {{ item.title }}


    template(v-slot:append)

      v-divider

      v-list(dense nav shaped)
      
        v-list-item(
          v-if="loggedIn"
          @click="logoutAndLogin"
        )
          v-list-item-icon
            v-icon(color="menu") mdi-logout
          v-list-item-content
            v-list-item-title Uitloggen

        v-list-item(
          v-else
          to="/login"
        )
          v-list-item-icon
            v-icon(color="menu") mdi-login
          v-list-item-content
            v-list-item-title Inloggen

      v-divider 

      //- v-list(dense nav shaped class="my-0 py-0")
      //-   v-list-item(class="my-0 py-0")
      //-     v-list-item-content(class="white--text")
      p.text-center.caption.white--text.my-1 
        b v{{ version }}

</template>


<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Getter, Action } from 'vuex-class'
  import { i18n } from '@/plugins/i18n/i18n'
  

  @Component({ 
    components: { }
  })
  export default class TheNavigationDrawer extends Vue {

    // * from auth
    @Getter('loggedIn', {namespace: 'auth'}) loggedIn!: boolean
    @Getter('userName', {namespace: 'auth'}) userName!: string
    @Getter('userPhotoUrl', {namespace: 'auth'}) userPhotoUrl!: string
    @Getter('isPremiumUser', {namespace: 'auth'}) isPremiumUser!: boolean
    @Getter('isSuperAdmin', {namespace: 'auth'}) isSuperAdmin!: boolean
    @Action('logout', {namespace: 'auth'}) logout!: () => Promise<void>

    // * from system
    @Getter('version', {namespace: 'system'}) version!: string

    // * from nav
    @Getter('canMinify', {namespace: 'nav'}) canMinify!: boolean
    @Getter('showDrawer', {namespace: 'nav'}) showDrawer!: boolean    
    @Action('closeDrawer', {namespace: 'nav'}) closeDrawer!: () => Promise<void>
    @Action('openDrawer', {namespace: 'nav'}) openDrawer!: () => Promise<void>

    
    miniVariant: boolean | null = true
    get showMiniVariant() {
      return this.canMinify && this.miniVariant
    }


    get darkMode(): boolean {
      return process.env.VUE_APP_MENU_DARK_MODE === '1'
    }

    created() {
      // * large screens
      if (['lg', 'xl'].includes(this.$vuetify.breakpoint.name)) {
        this.drawer = true
      }
    }
    
    get drawer() {
      return this.showDrawer
    }

    set drawer(value: boolean) {
      if (value) {
        this.openDrawer()
      }
      else {
        this.closeDrawer()
      }
    }

    get items() {
      let items: any[] = []

      // // * login / logout
      // items.push(
      //   this.loggedIn ?
      //   { title: 'Uitloggen', icon: 'mdi-logout', click: this.logoutAndLogin } :
      //   { title: 'Inloggen', icon: 'mdi-login', to: '/login' }
      // )

      // * regular items
      items = items.concat([
      ])

      // * super admin items
      if (this.isSuperAdmin) {
        items = items.concat([
          { title: 'Invite People', icon: 'mdi-account-multiple-plus', to: '/invitations' },
          { title: 'Terms', icon: 'mdi-file-document', to: '/terms-and-conditions' }
        ])
      }

      return items
    }

    get subtitle() {
      if (this.isSuperAdmin) return i18n.t('core.components.TheNavigationDrawer.loggedInAsSuperAdmin')
      else if (this.isPremiumUser) return i18n.t('core.components.TheNavigationDrawer.loggedInAsPremiumUser')
      else return i18n.t('core.components.TheNavigationDrawer.loggedInAsFreeUser')
    }

    
    async logoutAndLogin() {
      await this.logout()
      this.$router.push('/login')
    }
  }
</script>
