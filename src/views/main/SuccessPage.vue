<template lang="pug">
  TheFullPageScrollContainer

    div(style="position: absolute; left: 5vw; top: 5vw;")
      v-img(
        src="/kado.jpg"
        height="55vw"
        width="80vw"
      )

    #sint3(style="position: absolute; left: 1vw; bottom: 1vw; z-index: 10;")
      v-img(
        src="/sint4.gif"
        width="10vw"
        height="18vw"
        contain
      )

</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator' 
  import { Getter, Mutation, Action } from 'vuex-class'

  @Component({})
  export default class HomePage extends Vue {
  }
</script>
