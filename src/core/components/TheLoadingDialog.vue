<template lang="pug">
  v-dialog(
    v-model="loading"
    hide-overlay
    persistent
    width="300"
  )
    v-card.pa-3(
      color="primary"
      dark
    )
      v-card-text.text-center
        p {{ $t("core.components.TheLoadingDialog.loading") }} ...
        v-progress-linear(
          indeterminate
          color="white"
          class="mb-0"
        )
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator'
  
  import { Getter, Mutation, Action } from 'vuex-class'

  @Component({})
  export default class TheLoadingDialog extends Vue {
    @Getter('loading', { namespace: 'system' }) loading!: boolean
  }
</script>
