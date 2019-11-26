import { RawLocation } from 'vue-router'

import { nextRoute as nextFreeRoute } from './modules/free'
import { nextRoute as nextTermsRoute } from './modules/terms'


export async function nextAnonymousPlanningRoute(): Promise<RawLocation | null> {

  // * Free
  const freeRoute = nextFreeRoute()
  if ( freeRoute ) { return freeRoute }
  
  // * Do nothing
  return null
}


export async function nextLoggedInPlanningRoute(): Promise<RawLocation | null> {

  // * Terms & Conditions
  const termsRoute = nextTermsRoute()
  if ( termsRoute ) { return termsRoute }

  // * Next component

  // * Do nothing
  return null
}

