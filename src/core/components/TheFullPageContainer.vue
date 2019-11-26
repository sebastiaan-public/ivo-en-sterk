<template lang="pug">
  #full-page-container(
    :style="'height: ' + heightMinusAppBar + '; overflow: hidden;'"
  )
    slot
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator'
  
  import { Getter, Mutation, Action } from 'vuex-class'
  import { Watch } from 'vue-property-decorator'
    

  @Component({ })
  export default class TheFullPageScrollContainer extends Vue {
    
    @Getter('windowHeight', { namespace: 'system' }) windowHeight!: number
    
    get heightMinusAppBar() {
      return `calc(${this.windowHeight}px - ${this.$vuetify.application.top}px)`
    }
  }
</script>

<style lang="sass" scoped>
  #full-page-container
    position: absolute
    top: 0
    left: 0
    // height -> set in JS
    width: 100vw
</style>
