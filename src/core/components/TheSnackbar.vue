<template lang="pug">
  v-snackbar(
    :value="visible"
    absolute top
    :color="color"
    :timeout="timeout"
    vertical
    style="z-index: 1000999;"
  )
    v-row(align="center")

      //* message
      v-col(class="flex-grow-1 py-0")
        | {{ message }}

      //* close button -> here only if no other buttons
      v-col(
        v-if="buttons.length===0"
        class="flex-grow-0 flex-shrink-0 py-0"
      )
        v-btn(
          @click="closeSnackbar"
          icon dark
          class="mt-0"
        ) 
          v-icon mdi-close

    //* buttons
    v-row(
      v-if="buttons.length > 0"
      align="center"
    )
      //* custom buttons
      v-col(class="flex-grow-1 py-0")
        v-btn(
          v-for="(button, index) of buttons"
          :key="index"
          :color="button.color"
          :dark="button.dark"
          :outlined="button.outlined"
          :to="button.to"
          @click="button.click"
        )
          | {{ button.text }}

      //* close button
      v-col(class="flex-grow-0 flex-shrink-1 py-0")
        v-btn(
          @click="closeSnackbar"
          icon dark
        ) 
          v-icon mdi-close
</template>

<script lang="ts">
  import firebase from 'firebase/app'
  import { Vue, Component, Prop} from 'vue-property-decorator'
  
  import { Getter, Mutation, Action } from 'vuex-class'

  @Component({})
  export default class TheSnackbar extends Vue {

    @Getter('buttons', { namespace: 'snackbar' }) buttons!: []
    @Getter('color', { namespace: 'snackbar' }) color!: string
    @Getter('message', { namespace: 'snackbar' }) message!: string
    @Getter('timeout', { namespace: 'snackbar' }) timeout!: number
    @Getter('visible', { namespace: 'snackbar' }) visible!: boolean
    @Action('closeSnackbar', { namespace: 'snackbar' }) closeSnackbar!: () => Promise<void>
  }
</script>
