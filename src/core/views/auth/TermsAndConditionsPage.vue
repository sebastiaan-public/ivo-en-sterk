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
                p {{ $t("core.pages.TermsAndConditionsPage.tos.part1") }}
                  b
                    a.primary--text(@click="termsDialog=true") 
                      | {{ $t("core.pages.TermsAndConditionsPage.tos.conditions") }} 
                  span {{ $t("core.pages.TermsAndConditionsPage.tos.part2") }}
                  b 
                    a.primary--text(@click="privacyDialog=true") 
                      | {{ $t("core.pages.TermsAndConditionsPage.tos.privacyPolicy") }}
                  span {{ $t("core.pages.TermsAndConditionsPage.tos.part3") }}
                
                v-form(ref="tos-form")
                  v-checkbox(v-model="tos" color="primary" :rules="[v => !!v || $t('core.pages.TermsAndConditionsPage.tos.warningMessage')]" :label="$t('core.pages.TermsAndConditionsPage.tos.label')" required)


            v-divider.mt-1.mb-7


            v-row
                v-btn(
                  @click="accept"
                  color="primary"
                  :disabled="!tos || loading"
                  :dark="tos && !loading"
                  block
                ) 
                  span.pr-7 {{ $t('core.pages.TermsAndConditionsPage.tos.accept') }}
                
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
  import { i18n } from '@/plugins/i18n/i18n'
  import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
  import { Getter, Mutation, Action } from 'vuex-class'
  
  import ThePrivacyStatement from './ThePrivacyStatement.vue'
  import TheTermsAndConditions from './TheTermsAndConditions.vue'
  import { store } from '@/core'
  import { TOS_VERSION } from '@/core/constants'

  
  @Component({
    components: { TheTermsAndConditions, ThePrivacyStatement }
  })
  export default class TermsAndConditionsPage extends Vue {

    @Getter('loading', { namespace: 'system' }) loading!: boolean

    tos = false
    termsDialog = false
    privacyDialog = false

    validateTos() {
      const form: any = this.$refs['tos-form']
      form.validate()
    }

    async accept() {
      await store.dispatch('profiles/acceptAllTerms', TOS_VERSION)
      this.continueNextRoute()
    }


    continueNextRoute() {
      const nextRoute = this.$route.query['nextRoute'] as string || '/'
      this.$router.push(nextRoute)
    }
  }
</script>
