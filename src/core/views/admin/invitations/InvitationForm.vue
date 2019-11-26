<template lang="pug">
  v-form(ref="form" v-model="valid" lazy-validation)
    v-textarea(
      v-model="bulkImport"
      name="bulkImport"
      :rules="[v => !!v || 'bulkImport is required']" 
      label="Bulk Invite Users"
      placeholder="Voorbeeld:\nSebastiaan | sebastiaan@planhr.nl \nSebastiaan | devries.sebas@gmail.com"
      hint="seperate users with new line"
    )
    v-text-field(v-model="company" label="Company")
    v-text-field(v-model="notes" label="Notes")
      
    v-btn.mr-4(:disabled="!valid" color="error" @click="sendInvitations")
      | Send Invitations
      
    v-btn.mr-4(color="warning" @click="reset")
      | Reset Form

</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator'
  
  import { Getter, Mutation, Action } from 'vuex-class'
  import moment from 'moment'
  import { sleep } from '@/core/utilities/time'
import { Claim } from 'planhr-base-app'


  @Component({ })
  export default class InvitationForm extends Vue {

    @Action('createAndSendCoupon', {namespace: 'auth'}) createAndSendCoupon!: (args: import('planhr-base-app').ICreateCouponArgs) => Promise<boolean>

    valid = true
    bulkImport = 'Sebastiaan | sebastiaan@planhr.nl'
    company = ''
    notes = ''

    async sendInvitations () {
      if ((this.$refs['form'] as any).validate()) {
        const lines = this.bulkImport.split('\n')
        for (const line of lines) {
          const parts = line.split('|')
          const result: any = await this.createAndSendCoupon({
            coupon: {
              endDate: moment().add(1, 'month').toDate()
            },
            scope: {
              claims: [Claim.PREMIUM_USER],
              endDate: moment().add(1, 'year').toDate()
            },
            user: {
              email: parts[1].trim(),
              nickname: parts[0].trim()
            },
            notes: this.notes
          })
          console.log('Sent: ', result.success)
          await sleep(100)          
        }
      }
    }

    reset () {
      (this.$refs['form'] as any).reset()
    }
  }
</script>
