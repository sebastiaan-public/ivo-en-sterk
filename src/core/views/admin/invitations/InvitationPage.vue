<template lang="pug">
  v-container.pa-2
    v-layout
      v-flex(xs12 lg10 xl6 offset-xs0 offset-lg1 offset-xl3)
        
        v-card.mx-auto
          v-toolbar(
            color="primary" dark
          )
            //- v-app-bar-nav-icon
            v-toolbar-title Invite people
            //- v-spacer
            //- v-btn(icon)
            //-   v-icon search
          InvitationForm

        //- v-card.mx-auto
        //-   v-toolbar(
        //-     color="primary" dark
        //-   )
        //-     //- v-app-bar-nav-icon
        //-     v-toolbar-title Coupons Sent
        //-     //- v-spacer
        //-     //- v-btn(icon)
        //-     //-   v-icon search
        //-   CouponsTable

          

        //- v-card.mx-auto
        //-   v-toolbar(
        //-     color="primary" dark
        //-   )
        //-     //- v-app-bar-nav-icon
        //-     v-toolbar-title Coupons Sent
        //-     //- v-spacer
        //-     //- v-btn(icon)
        //-     //-   v-icon search
        //-   v-list(three-line)
        //-     template(v-for="(user, index) in users")
        //-       v-list-item(
        //-         :key="index" 
        //-       )
        //-         //- v-list-item-avatar
        //-         //-   v-img(:src='item.avatar')
        //-         v-list-item-content
        //-           v-list-item-title 
        //-             v-layout(justify-space-between)
        //-               v-flex {{ user.userName }} - {{ user.userEmail }}
        //-               v-flex(
        //-                 v-if="user.premium"
        //-                 shrink
        //-               )
        //-                 v-chip(
        //-                   color="action"
        //-                   text-color="white"
        //-                 )
        //-                   | Premium
        //-                   v-icon mdi-right
        //-           //-  - {{ user.params.userEmail }}
        //-           v-list-item-subtitle 
        //-             //- {{ timeAgo(user.status.processedAt) }} - {{ user.status.message }}
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator'
  
  import { Getter, Mutation, Action } from 'vuex-class'
  import moment from 'moment'

  import InvitationForm from './InvitationForm.vue'
  import CouponsTable from './CouponsTable.vue'

  import { firebase } from '@/core'


  @Component({ components: { InvitationForm, CouponsTable } })
  export default class InvitationPage extends Vue {

    couponRequests: any = []
    // userCores: any = []
    // userRoles: any = []
    
    // async created() {
    //   // const querySnapshot1 = await firebase.firestore.collection('/requests-super-admin').get()
    //   // querySnapshot1.forEach(document => { this.couponRequests.push(document.data()) })

    //   const querySnapshot2 = await firebase.firestore.collection('/user-core').get()
    //   querySnapshot2.forEach(document => { this.userCores.push(document.data()) })

    //   const querySnapshot3 = await firebase.firestore.collection('/user-role').get()
    //   querySnapshot3.forEach(document => { this.userRoles.push(document.data()) })
    // }

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

    timeAgo(timestamp: any) {
      moment.locale('nl')
      return (typeof (timestamp as any).toDate === 'function') ? moment(timestamp.toDate()).fromNow() : moment(timestamp).fromNow()
    }
  }
</script>
