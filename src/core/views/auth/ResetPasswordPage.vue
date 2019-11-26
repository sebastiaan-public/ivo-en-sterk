<template lang="pug">
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
              p {{ $t('core.pages.ResetPasswordPage.p') }}:
              
              v-form(ref="form" v-model="valid")
                v-text-field(v-model="email" label="E-mail" required @input="emailIncorrect=false" :rules="emailRules")

          v-row
            v-col
              v-btn(
                @click="resetPassword"
                :disabled="!valid"
                :dark="valid"
                color="primary"
                block
                :loading="loading"
              ) {{ $t('core.pages.ResetPasswordPage.button') }}

          v-divider.my-9

          v-row
            v-col
              p
                span {{ $t('core.pages.ResetPasswordPage.createdNewPassword') }} 
                router-link(:to="{ name: 'login', query: $route.query }").primary--text {{ $t('core.pages.ResetPasswordPage.login') }}
</template>

<script lang="ts">
  import firebase from 'firebase/app'
  import { Vue, Component, Prop} from 'vue-property-decorator' 
  import { Getter, Mutation, Action } from 'vuex-class'
  import { ISnackbarOptionalState } from 'planhr-base-app'


  @Component({})
  export default class FirebaseLoginPage extends Vue {
    
    @Action('openSnackbar', {namespace: 'snackbar'}) openSnackbar!: (value: ISnackbarOptionalState) => Promise<void>

    email = ''
    valid = false
    loading = false
    emailRules = [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]


    activated() {
      this.email = localStorage.getItem('email') || ''
    }


    async resetPassword() {
      const config = {
        url: `${process.env.VUE_APP_APP_BASE_URL}/login`,
        handleCodeInApp: false
      }
      const auth = firebase.auth()

      try {
        this.loading = true
        await auth.sendPasswordResetEmail(this.email, config)

        this.openSnackbar({
          color: 'success',
          message: 'We have sent you an e-mail to reset your password.'
        })

        this.$router.push('login')
      }

      catch (e){
        this.openSnackbar({
          color: 'error',
          message: e.message
        })
      }
      
      finally {
        this.loading = false
      }
    }


    async microsoft() {
      const provider = new firebase.auth.OAuthProvider('microsoft.com')

      // provider.setCustomParameters({
      //   // Force re-consent.
      //   prompt: 'consent',
      //   // Target specific email with login hint.
      //   login_hint: 'user@firstadd.onmicrosoft.com'
      // })

    }
  }
</script>
