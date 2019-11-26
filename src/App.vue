<template lang="pug">

  v-app
    TheAppBar(v-if="loaded")
    TheNavigationDrawer(v-if="loaded")
    
    TheLoadingDialog
    TheSnackbar

    v-content(app) 
      transition(name="fade" mode="out-in")
        keep-alive

          //- trick: give each route a unique key to force vue to:
          //- recreate component and call lifecycle hooks!

          //- normally you would do:
          //- router-view(:key="$route.path")

          //- but we only want certain routes to be refreshed:
          router-view(v-if="loaded" :key="routeKey")
</template>

<script lang="ts">
  import { Vue, Component, Provide } from 'vue-property-decorator'
  import { Getter, Mutation, Action } from 'vuex-class'

  import TheAppBar from '@/core/components/TheAppBar.vue'
  import TheLoadingDialog from '@/core/components/TheLoadingDialog.vue'
  import TheNavigationDrawer from '@/core/components/TheNavigationDrawer.vue'
  import TheSnackbar from '@/core/components/TheSnackbar.vue'

// ! test
import vuetify from '@/plugins/vuetify'

  @Component({
    components: { TheAppBar, TheNavigationDrawer, TheLoadingDialog, TheSnackbar },
    name: 'App'
  })
  export default class App extends Vue {
    
    loaded = false
    
    // * generates appropriate key for route, which causes a recreate page or not...
    get routeKey() {
      if (this.$route.meta.forceCreate === 'route') {
        return this.$route.path
      } else if (this.$route.meta.forceCreate === 'always') {
        return 'random-id-' + Math.random().toString()
      } else {
        return this.$route.name
      }
    }

    mounted() {
      this.$router.onReady(() => {
        this.loaded = true
      })      
    }
  }
</script>



<style lang="sass">
  // * global styles
  @import 'core/styles/styles.sass'
</style>

