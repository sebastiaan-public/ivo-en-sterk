<template lang="pug">
  TheFullPageScrollContainer
    div
      h1 HOME

      h2 name: {{ userName }}
      
      h2 email: {{ userEmail }}

      h2 id: {{ userId }}
      
      h2 photo: {{ userPhotoUrl }}
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator' 
  import { Getter, Mutation, Action } from 'vuex-class'


  @Component({})
  export default class HomePage extends Vue {
    
    @Getter('userEmail', {namespace: 'auth'}) userEmail!: string
    @Getter('userId', {namespace: 'auth'}) userId!: string
    @Getter('userName', {namespace: 'auth'}) userName!: string
    @Getter('userPhotoUrl', {namespace: 'auth'}) userPhotoUrl!: string
    @Getter('loggedIn', {namespace: 'auth'}) loggedIn!:  boolean
  }
</script>
