


export enum Severity {
  DEBUG,
  INFO,
  WARNING,
  ERROR,
  CRITICAL,
}

async function logToApi(severity: Severity, message: string) {
  // const severityName = Severity[severity].toLowerCase()
  // const url = `${process.env.VUE_APP_API_BASE_URL}/log/log`
  // const data = {
  //   severity: severityName,
  //   type: 'configuration',
  //   message,
  //   send_mail: true
  // }
  // post(url, data)
}


export function log(severity: Severity, message: string, obj: any = {}) {
  const devMode = (process.env.NODE_ENV === 'development')

  switch (severity) {

    case Severity.DEBUG:
      if (devMode) {
        console.debug(message, obj)
      }
      break

    case Severity.INFO:
      if (devMode) {
        console.info('I:', message, obj)
      }
      break

    case Severity.WARNING:
      if (devMode) {
        console.warn(message, obj)
      }
      break

    case Severity.ERROR:
      if (devMode) {
        console.error(message, obj)
      }
      break

    case Severity.CRITICAL:
      if (devMode) {
        console.error('CRITICAL:', message, obj)
      }
      else {
        logToApi(severity, message)
      }
      break

    default:
      if (devMode) {
        console.error('log:', message, obj)
      }
  }
}


export function debug(message: string, obj: any = {}) {
  log(Severity.DEBUG, message, obj)
}

export function info(message: string, obj: any = {}) {
  log(Severity.INFO, message, obj)
}

export function warning(message: string, obj: any = {}) {
  log(Severity.WARNING, message, obj)
}

export function error(message: string, obj: any = {}) {
  log(Severity.ERROR, message, obj)
}

export function critical(message: string, obj: any = {}) {
  log(Severity.CRITICAL, message, obj)
}
