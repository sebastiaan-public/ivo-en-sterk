<template lang="pug">
  TheFullPageScrollContainer
    #sign-up-page
      v-container(@click="validateTos")
        v-row
          v-col(
            :cols="10" :offset="1"
            :sm="8" :offset-sm="2"
            :md="6" :offset-md="3"
          )

            v-row
              v-col
                p {{ $t("core.pages.SignUpPage.tos.part1") }}
                  b
                    a.primary--text(@click="termsDialog=true") 
                      | {{ $t("core.pages.SignUpPage.tos.conditions") }} 
                  span {{ $t("core.pages.SignUpPage.tos.part2") }}
                  b 
                    a.primary--text(@click="privacyDialog=true") 
                      | {{ $t("core.pages.SignUpPage.tos.privacyPolicy") }}
                  span {{ $t("core.pages.SignUpPage.tos.part3") }}
                
                v-form(ref="tos-form")
                  v-checkbox(v-model="tos" color="primary" :rules="[v => !!v || $t('core.pages.SignUpPage.tos.warningMessage')]" :label="$t('core.pages.SignUpPage.tos.label')" required)


            v-divider.mt-1.mb-7


            v-row
              v-col
                p.mb-8 
                  b.primary--text {{ $t('core.pages.SignUpPage.social.labelBold') }} - 
                  span {{ $t('core.pages.SignUpPage.social.label') }}

                v-btn(
                  @click="google"
                  color="#DB4437"
                  :disabled="!tos || loading"
                  :dark="tos && !loading"
                  block
                ) 
                  v-icon(color="white" left) mdi-google
                  span.pr-7 {{ $t('core.pages.SignUpPage.social.google') }}
                
            v-row
              v-col
                v-btn(
                  @click="microsoft"
                  color="#00a4ef"
                  :disabled="!tos || loading"
                  :dark="tos && !loading"
                  block
                ) 
                  v-icon(color="white" left) mdi-microsoft
                  | {{ $t('core.pages.SignUpPage.social.microsoft') }}
                

            v-divider.mt-9.mb-8


            v-row
              v-col
                p 
                  b.primary--text {{ $t('core.pages.SignUpPage.account.labelBold') }} - 
                  span {{ $t('core.pages.SignUpPage.account.label') }}
                
                v-form(ref="email-form" v-model="emailPasswordValid")
                  v-text-field(
                    v-model="email"
                    :label="$t('core.pages.SignUpPage.email.label')"
                    required 
                    @input="emailIncorrect=false;passwordIncorrect=false"
                    :rules="emailRules"
                  )
                  v-text-field(
                    v-model="password"
                    :label="$t('core.pages.SignUpPage.password.label')"
                    :type="passwordVisible ? 'text' : 'password'"
                    required
                    @input="emailIncorrect=false;passwordIncorrect=false"
                    :rules="passwordRules"
                    :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                    counter
                    @click:append="passwordVisible = !passwordVisible"
                  )

            v-row
              v-col
                v-btn(
                  @click="signUp"
                  :disabled="!emailPasswordValid || !tos || emailIncorrect || passwordIncorrect || loading"
                  :dark="emailPasswordValid && tos && !emailIncorrect && !passwordIncorrect && !loading"
                  color="primary"
                  block              
                ) {{ $t('core.pages.SignUpPage.account.button') }}
                  
            v-divider.mt-9.mb-8

            v-row
              v-col
                p
                  span {{ $t('core.pages.SignUpPage.other.alreadyAccount') }} 
                  router-link(:to="{ name: 'login', query: $route.query }").primary--text {{ $t('core.pages.SignUpPage.other.login') }}


      v-dialog(v-model="termsDialog" width="90%")
        v-card
          v-card-title
            .headline.primary--text Algemene Voorwaarden
          v-card-text
            TheTermsAndConditions
          v-card-actions
            v-spacer
            v-btn(dark color="action" @click="termsDialog = false")
              | Sluiten

      v-dialog(v-model="privacyDialog" width="90%")
        v-card
          v-card-title
            .headline.primary--text Privacybeleid
          v-card-text
            ThePrivacyStatement
          v-card-actions
            v-spacer
            v-btn(dark color="action" @click="privacyDialog = false")
              | Sluiten
</template>

<script lang="ts">
  
  import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
  import { Getter, Mutation, Action } from 'vuex-class'
  import { ISnackbarOptionalState } from 'planhr-base-app'
  import ThePrivacyStatement from './ThePrivacyStatement.vue'
  import TheTermsAndConditions from './TheTermsAndConditions.vue'
  import { i18n } from '@/plugins/i18n/i18n'
  import { sleep } from '@/core/utilities/time'

  import * as firebaseLib from 'firebase/app'
  import { store, firebase } from '@/core'
  import { TOS_VERSION } from '@/core/constants'


  @Component({
    components: { TheTermsAndConditions, ThePrivacyStatement }
  })
  export default class FirebaseSignUpPage extends Vue {

    // * messages to user
    @Action('closeSnackbar', {namespace: 'snackbar'}) closeSnackbar!: () => void
    @Action('openSnackbar', {namespace: 'snackbar'}) openSnackbar!: (value: ISnackbarOptionalState) => Promise<void>
    @Action('startLoading', { namespace: 'system' }) startLoading!: () => void
    @Action('stopLoading', { namespace: 'system' }) stopLoading!: () => void
    @Getter('loading', { namespace: 'system' }) loading!: boolean

    @Getter('loggedIn', {namespace: 'auth'}) loggedIn!: boolean


    // *
    // * terms of service
    // *
    tos = false
    termsDialog = false
    privacyDialog = false

    @Watch('tos')
    onTosChanged() {
      if (localStorage.getItem('tos')) {
        localStorage.removeItem('tos')
      }
      else {
        localStorage.setItem('tos', TOS_VERSION)
      }
    }
    
    validateTos() {
      const form: any = this.$refs['tos-form']
      form.validate()
    }



    // *
    // * sign up with username & password
    // *
    email = ''
    emailIncorrect = false
    emailRules = [
      (v: string) => !!v || i18n.t('core.pages.SignUpPage.email.required'),
      (v: string) => /.+@.+\..+/.test(v) || i18n.t('core.pages.SignUpPage.email.valid')
    ]
    password = ''
    passwordVisible = false
    passwordIncorrect = false
    passwordRules = [
      (v: string) => !!v || i18n.t('core.pages.SignUpPage.password.required')
    ]
    emailPasswordValid = false
  

    @Watch('email')
    onEmailChanged(newValue: string) {
      localStorage.setItem('email', newValue)
    }

    activated() {
      this.email = localStorage.getItem('email') || ''
    }


    async signUp() {
      store.dispatch('auth/expectLogin')

      // * Is getting save in terms planning module
      localStorage.setItem('tosVersion', TOS_VERSION)

      try {
        this.startLoading()

        await firebaseLib.auth().createUserWithEmailAndPassword(this.email, this.password)
        await this.sendConfirmationEmail()
        this.continueNextRoute()
      }
      catch (e){
        store.dispatch('auth/doNotExpectLogin')
        this.stopLoading()

        if (e.code === 'auth/email-already-in-use') {
          this.emailIncorrect = true
          this.openSnackbar({
            color: 'error',
            message: i18n.t('core.pages.SignUpPage.messages.accountExists') as string,
            buttons: [{
              color: 'white',
              dark: true,
              outlined: true,
              text: i18n.t('core.pages.SignUpPage.messages.loginButton') as string,
              to: {name: 'login', query: this.$route.query },
              click: this.closeSnackbar
            }]

          })
        }
        else {
          this.openSnackbar({
            color: 'error',
            message: e.message
          })
        }
      }
    }


    async google() {
      const provider = new firebaseLib.auth.GoogleAuthProvider()
      provider.addScope('email')
      provider.addScope('profile')

      const emailHint = localStorage.getItem('email')
      if (emailHint) {
        provider.setCustomParameters({
          login_hint: emailHint
        })
      }

      this.social(provider)
    }


    async microsoft() {
      const provider = new firebaseLib.auth.OAuthProvider('microsoft.com')

      const emailHint = localStorage.getItem('email')
      if (emailHint) {
        provider.setCustomParameters({
          login_hint: emailHint
        })
      }

      this.social(provider)
    }


    async social(provider: any) {
      store.dispatch('auth/expectLogin')

      // * Is getting save in terms planning module
      localStorage.setItem('tosVersion', TOS_VERSION)
      
      try {
        this.startLoading()

        firebaseLib.auth().useDeviceLanguage()
        await firebaseLib.auth().signInWithPopup(provider)
        this.continueNextRoute()
      }     

      catch (e){
        store.dispatch('auth/doNotExpectLogin')
        this.openSnackbar({
          color: 'error',
          message: e.message
        })
        this.stopLoading()
      }
    }


    async sendConfirmationEmail() {
      try {
        const user = firebaseLib.auth().currentUser

        if (user) {
          await user.sendEmailVerification({
            // * continue to page:
            url: `${process.env.VUE_APP_APP_BASE_URL}`,
            handleCodeInApp: false
          })

          this.openSnackbar({
            color: 'success',
            message: i18n.t('core.pages.SignUpPage.messages.verificationEmailSent') as string
          })
        }
      }
      catch(e) {
        this.openSnackbar({
          color: 'error',
          message: e.message
        })
      }
    }

    continueNextRoute() {
      const nextRoute = this.$route.query['nextRoute'] as string || '/'
      this.$router.push(nextRoute)
    }
  }
</script>
