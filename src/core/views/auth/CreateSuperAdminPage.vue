<template lang="pug">
  TheFullPageScrollContainer
    | {{ message }}
</template>

<script lang="ts">
  
  import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
  import { firebase } from '@/core'

  @Component({})
  export default class CreateSuperAdminPage extends Vue {

    message = ''
    async created() {
      try {
        const authCreateSuperAdmin = firebase.functions.httpsCallable('authCreateSuperAdmin')
        const result = await authCreateSuperAdmin()
        this.message = result.data
      }
      catch(e) { 
        console.warn('ERROR', e)
        this.message = e.toString()
      }
    }
  }
</script>

<style>

</style>