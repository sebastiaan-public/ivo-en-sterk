<template lang="pug">
  #full-page-scroll-container(:style="'height: ' + heightMinusAppBar + '; width: ' + widthMinusNavigationDrawer + '; overflow-x: hidden;'")
    slot
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator'  
  import { Getter, Mutation, Action } from 'vuex-class'
  import { Watch } from 'vue-property-decorator'
    

  @Component({ })
  export default class TheFullPageScrollContainer extends Vue {
    
    @Getter('windowHeight', { namespace: 'system' }) windowHeight!: number
    @Getter('windowWidth', { namespace: 'system' }) windowWidth!: number
    
    get heightMinusAppBar() {
      return `calc(${this.windowHeight}px - ${this.$vuetify.application.top}px)`
    }

    get widthMinusNavigationDrawer() {
      return `calc(${this.windowWidth}px - ${this.$vuetify.application.left}px - 12px)`
    }
  }
</script>

<style lang="sass" scoped>
  #full-page-scroll-container
    position: absolute
    top: 0
    left: 0
    // height -> set in JS
    width: 100vw
    
    overflow-x: hidden
    overflow-y: auto
    -webkit-overflow-scrolling: touch

    // ! necessary to fix the bug on iOS:
    &>*
      -webkit-transform: translateZ(0px)      
</style>
