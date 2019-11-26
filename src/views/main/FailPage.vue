<template lang="pug">
  TheFullPageScrollContainer
    
    
    #pic1(style="position: absolute; left: 25vw; top: 20vh;")
      v-img(
        src="/dennis.gif"
        width="50vw"
        :aspect-ratio="1.5"
      )

    #sint1(style="position: absolute; left: 5vw; top: 5vw;")
      v-avatar(size="20vw")
        v-img(
          src="/sint1.gif"
          width="20vw"
          :aspect-ratio="1"
        )

    #sint2(style="position: absolute; right: 5vw; bottom: 5vw;")
      v-avatar(size="20vw")
        v-img(
          src="/sint2.gif"
          width="20vw"
          :aspect-ratio="1"
        )

    #sint3(style="position: absolute; left: 5vw; bottom: 5vw;")
      v-avatar(size="20vw")
        v-img(
          src="/sint3.gif"
          width="20vw"
          :aspect-ratio="1"
        )
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator' 
  import { Getter, Mutation, Action } from 'vuex-class'
  import { stopFail } from '@/sounds'

  @Component({})
  export default class HomePage extends Vue {
    deactivated() { stopFail() }
  }
</script>
