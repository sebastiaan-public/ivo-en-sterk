<template lang="pug">
  v-data-table(
    :headers="headers"
    :items="couponRequests"
    :items-per-page="5"
    class="elevation-1"
  )
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator'
  
  import { Getter, Mutation, Action } from 'vuex-class'
  import moment from 'moment'


  import InvitationForm from './InvitationForm.vue'
  import { firebase } from '@/core'


  @Component({ components: { InvitationForm } })
  export default class InvitationPage extends Vue {

    headers = [
      // {
      //   text: 'Dessert (100g serving)',
      //   align: 'left',
      //   sortable: false,
      //   value: 'name',
      // },
      // { text: 'Calories', value: 'calories' },
      // { text: 'Fat (g)', value: 'fat' },
      // { text: 'Carbs (g)', value: 'carbs' },
      // { text: 'Protein (g)', value: 'protein' },
      { text: 'Processed', value: 'processed' },
      { text: 'Success', value: 'status.success' },
      { text: 'Name', value: 'params.userName' },
      { text: 'Email', value: 'params.userEmail' }
    ]


    couponRequests: any = []
    userCores: any = []
    userRoles: any = []
    
    async created() {
      const querySnapshot1 = await firebase.firestore.collection('/requests-super-admin').get()
      querySnapshot1.forEach(document => { 
        this.couponRequests.push(document.data())
      })

      console.log(this.couponRequests)

      // const querySnapshot2 = await App.firestore.collection('/user-core').get()
      // querySnapshot2.forEach(document => { this.userCores.push(document.data()) })

      // const querySnapshot3 = await App.firestore.collection('/user-role').get()
      // querySnapshot3.forEach(document => { this.userRoles.push(document.data()) })
    }

    // get users() {
    //   if (this.couponRequests.length === 0 || this.userCores.length === 0 || this.userRoles.length === 0) {
    //     return []
    //   }

    //   const uniqueUserIds = [...new Set(this.couponRequests.map((request: any) => request.userId))] as string[]
    //   return uniqueUserIds.map((userId: string) => {
    //     const userCore = this.userCores.find( (u: any) => u.userId = userId)
    //     const userRole = this.userRoles.find( (u: any) => u.userId = userId)

    //     return {
    //       userName: userCore ? userCore.userName : 'unknown',
    //       userEmail: userCore ? userCore.userEmail : 'unknown',
    //       domains: userRole.inDomains,
    //       premium: userRole.isPremiumUser
    //     }
    //   })
    // }

    // timeAgo(timestamp: any) {
    //   moment.locale('nl')
    //   return (typeof (timestamp as any).toDate === 'function') ? moment(timestamp.toDate()).fromNow() : moment(timestamp).fromNow()
    // }
  }
</script>
