import * as firebaseLib from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/performance'
import 'firebase/functions'
import 'firebase/storage'

// * Create Config
const config: {[key: string]: string | undefined} = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseName: '(default)',
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}

// * Check Config
Object.keys(config).forEach((k) => {
  if (config[k] === undefined) {
    console.error('env var not defined: ' + k)
  }
})
if (process.env.VUE_APP_FIREBASE_FUNCTIONS_REGION === undefined) {
  console.error('env var not defined: VUE_APP_FIREBASE_FUNCTIONS_REGION')
}

// * Initialize Firebase App
if (!firebaseLib.apps.length) {
  firebaseLib.initializeApp(config)
}


// * Exports
export const { Timestamp, GeoPoint } = firebaseLib.firestore

export const firebaseAuth = firebaseLib.auth()
export const firebaseFirestore = firebaseLib.firestore()
export const firebaseFunctions = firebaseLib.app().functions(process.env.VUE_APP_FIREBASE_FUNCTIONS_REGION)
export const firebaseStorage = firebaseLib.storage()
export const firebaseAnalytics = firebaseLib.analytics()
export const firebasePerformance = firebaseLib.performance()

firebaseAnalytics.logEvent('app startup')
