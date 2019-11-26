
import { RawLocation } from 'vue-router'
import { store } from '@/core'

export async function nextRoute(): Promise<RawLocation | null> {

  // * If Terms in local storage -> save
  const tosVersion = localStorage.getItem('tosVersion')
  if (tosVersion) {
    await store.dispatch('profiles/acceptAllTerms', tosVersion)
    localStorage.removeItem('tosVersion')
    return null
  }

  // * If terms not accepted -> return terms route
  const ppVersion = store.getters['profiles/acceptedPrivacyPolicyVersion']
  const tocVersion = store.getters['profiles/acceptedTermsAndConditionsVersion']
  if (ppVersion === null || tocVersion == null) {
    return { name: 'terms-and-conditions' }
  }

  // * Otherwise ignore
  return null
}
