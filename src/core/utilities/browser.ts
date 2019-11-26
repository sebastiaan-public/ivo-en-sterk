import * as Bowser from 'bowser'
import { ISnackbarOptionalState } from 'planhr-base-app'
import { store } from '@/core'


export function browserIsNotSupported() {
  const browser = Bowser.getParser(window.navigator.userAgent)
  return browser.satisfies({
    firefox: '<=56',
    edge: '<=15',
    ie: '>=1',
    chrome: '<=60',
    safari: '<=9'
  })
}


export function browserName() {
  const result = Bowser.parse(window.navigator.userAgent)
  return result.browser.name
}


export function browserVersion() {
  const result = Bowser.parse(window.navigator.userAgent)
  return result.browser.version
}


export function browserSupportsHexaColors() {
  const browser = Bowser.getParser(window.navigator.userAgent)
  return browser.satisfies({
    chrome: '>=62',
    firefox: '>=49',
    safari: '>=10'
  }) === true
}


export function reportInvalidBrowserToUser() {
  const messageIe = 'Internet Explorer is not supported unfortunately. Please use a recent version of Chrome, Firefox, Edge or Safari.'
  const messageOthers = `Your browser (${browserName()} ${browserVersion()}) is outdated and has known issues with this app. Please update to the latest version of ${browserName()} in order to get the best performance of Classroomscreen.`
  const message = browserName() === 'Internet Explorer' ? messageIe : messageOthers
  const options: ISnackbarOptionalState = {
    color: 'action',
    message,
    timeout: 0
    // visible?: boolean
  }
  store.dispatch('snackbar/openSnackbar', options)
}