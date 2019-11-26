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
              p 
                b.primary--text Probeer nu of jullie code werkt:

              v-form(ref="email-form" v-model="emailPasswordValid")
                v-text-field(
                  v-model="email"
                  :label="$t('core.pages.LoginPage.email.label')"
                  type="email"
                  required 
                  @input="emailIncorrect=false;passwordIncorrect=false"
                  :rules="emailRules"
                )
                v-text-field(
                  v-model="password"
                  :label="$t('core.pages.LoginPage.password.label')"
                  :type="passwordVisible ? 'text' : 'password'"
                  required
                  @input="emailIncorrect=false;passwordIncorrect=false"
                  :rules="passwordRules"
                  :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordVisible = !passwordVisible"
                )

          v-row
            v-col
              v-btn(
                id="login-button"
                @click="login"
                :disabled="!emailPasswordValid || emailIncorrect || passwordIncorrect || loading"
                :dark="emailPasswordValid  && !emailIncorrect && !passwordIncorrect && !loading"
                color="primary"
                block              
              ) {{ $t('core.pages.LoginPage.account.button') }}


      #pic1(style="position: absolute; left: 0;")
        v-avatar(size="30vw")
          v-img(
            src="/ivo-en-sterk-2.jpg"
            height="30vw"
            width="30vw"
          )

      #pic2(style="position: absolute; right: 0;")
        v-avatar(size="30vw")
          v-img(
            src="/ivo-en-sterk-3.jpg"
            height="30vw"
            width="30vw"
          )
                
</template>

<script lang="ts">
  import * as firebaseLib from 'firebase/app'
  import { Vue, Component, Prop, Watch} from 'vue-property-decorator'
  import { Getter, Mutation, Action } from 'vuex-class'
  import { ISnackbarOptionalState } from 'planhr-base-app'
  import { i18n } from '@/plugins/i18n/i18n'
  import { sleep } from '@/core/utilities/time'
  
  import { log, store, firebase } from '@/core'
import { playSuccess, playFail } from '../../../sounds'



  @Component({})
  export default class FirebaseLoginPage extends Vue {
    
    // * messages to user
    @Action('closeSnackbar', {namespace: 'snackbar'}) closeSnackbar!: () => void
    @Action('openSnackbar', {namespace: 'snackbar'}) openSnackbar!: (value: ISnackbarOptionalState) => Promise<void>
    @Action('startLoading', { namespace: 'system' }) startLoading!: () => void
    @Action('stopLoading', { namespace: 'system' }) stopLoading!: () => void
    @Getter('loading', { namespace: 'system' }) loading!: boolean

    @Getter('loggedIn', {namespace: 'auth'}) loggedIn!: boolean
    @Getter('userEmailVerified', {namespace: 'auth'}) userEmailVerified!: boolean


    // *
    // * sign up with username & password
    // *
    email = 'ivo-en-sterk@gmail.com'
    emailIncorrect = false
    emailRules = [
      (v: string) => !!v || i18n.t('core.pages.LoginPage.email.required'),
      (v: string) => /.+@.+\..+/.test(v) || i18n.t('core.pages.LoginPage.email.valid')
    ]
    password = ''
    passwordIncorrect = false
    passwordVisible = false
    passwordRules = [
      (v: string) => !!v || i18n.t('core.pages.LoginPage.password.required')
    ]
    emailPasswordValid = false
  
    recaptcha: any
 
    activated() {
      this.createRecaptcha()
    }

    async login() {
      
      this.startLoading()
      await sleep(5000)

      if (this.password === '53785') {
        playSuccess()
        this.$router.push('/5ucc355')
      }
      else {
        playFail()
        this.$router.push('/fail')
      }
    }


    createRecaptcha() {
      this.recaptcha = new firebaseLib.auth.RecaptchaVerifier('login-button', {
        'size': 'invisible'
      })
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

    continueNextRoute() {
      const nextRoute = this.$route.query['nextRoute'] as string || '/'
      this.$router.push(nextRoute)
    }
  }
</script>
