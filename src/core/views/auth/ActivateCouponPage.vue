<template lang='pug'>
  TheFullPageScrollContainer
    v-container

      v-row
        v-col(
          :cols="10" :offset="1"
          :sm="8" :offset-sm="2"
          :md="6" :offset-md="3"
        )

          v-row
            v-col
              p 
                b.primary--text {{ $t('core.pages.ActivationPage.textBold') }}
              p
                span {{ $t('core.pages.ActivationPage.text') }}

              v-form(ref="email-form" v-model="activationCodeValid")
                v-text-field(
                  v-model="activationCode"
                  :label="$t('core.pages.ActivationPage.activationCode.label')"
                  required 
                  :rules="activationCodeRules"
                )
          v-row
            v-col
              v-btn(
                id="login-button"
                @click="activateAccount"
                :disabled="!activationCodeValid || loading"
                :dark="activationCodeValid && !loading"
                color="primary"
                block              
              ) {{ $t('core.pages.ActivationPage.button') }}
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator'
  import { Getter, Mutation, Action } from 'vuex-class'
  import { Route } from 'vue-router'
  import { sleep } from '@/core/utilities/time'
  import { i18n } from '@/plugins/i18n/i18n'
  import { ISnackbarOptionalState, core } from 'planhr-base-app'


  @Component({
    beforeRouteEnter: (to: Route, from: Route, next: any) => {
      core.store!.getters['auth/userEmailVerified'] ? next() : next('/')
    }
  })
  export default class ActivateCouponPage extends Vue {

    @Getter('loggedIn', {namespace: 'auth'}) loggedIn!: boolean

    @Action('activateCoupon', {namespace: 'auth'}) activateCoupon!: (couponId: string) => Promise<boolean>
    @Action('openSnackbar', {namespace: 'snackbar'}) openSnackbar!: (value: ISnackbarOptionalState) => Promise<void>
    @Action('startLoading', { namespace: 'snackbar' }) startLoading!: () => void
    @Action('stopLoading', { namespace: 'system' }) stopLoading!: () => void
    @Getter('loading', { namespace: 'system' }) loading!: boolean
    
    showManualActivation = false
    activationCode = ''
    activationCodeRules = [
      (v: string) => !!v || i18n.t('core.pages.ActivationPage.activationCode.required'),
      (v: string) => v.length===36 || i18n.t('core.pages.ActivationPage.activationCode.valid')
    ]
    activationCodeValid = false


    async activateAccount() {
      this.startLoading()
      await this.activateCoupon(this.activationCode)
      this.openSnackbar({
        color: 'success',
        message: i18n.t('core.pages.ActivationPage.processing') as string
      })
      this.stopLoading()
      this.$router.push('/')
    }


    async activated() {
      try {     
        const couponId = this.$route.params.coupon_id
        const emailHint = this.$route.query.hint as string || ''

        if (couponId) {
          this.startLoading()
          
          await Promise.all([
            this.activateCoupon(couponId), // * important to await to avoid router loop
            sleep(1000) // * minimum time to wait to prevent blitching
          ])
          this.stopLoading()
          this.$router.push('/')
        }

        else {
          this.showManualActivation = true
        }
      }
      catch(error) {
        this.$router.push('/')
      }
    }
  }
</script>


<style lang='sass' scoped>
</style>
