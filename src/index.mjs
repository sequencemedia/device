import debug from 'debug'

const log = debug('@sequencemedia/device')

log('`@sequencemedia/device` is awake')

export const PORT = 80

export const SECURE_PORT = 443

export function getWindowLocationOrigin ({
  location: {
    origin = '//localhost'
  } = {}
} = global) {
  return origin
}

export function getWindowLocationProtocol ({
  location: {
    protocol = 'http'
  } = {}
} = global) {
  return protocol
}

export function getWindowLocationHostname ({
  location: {
    hostname = 'localhost'
  } = {}
} = global) {
  return hostname
}

export function getWindowLocationHost ({
  location: {
    host = 'localhost'
  } = {}
} = global) {
  return host
}

export function getWindowLocationPort ({
  location: {
    port = PORT
  } = {}
} = global) {
  return port
}

export function getWindowLocationHref ({
  location: {
    href = '//localhost'
  } = {}
} = global) {
  return href
}

export function isSecure (context) {
  return (
    getWindowLocationProtocol(context)
      .toLowerCase()
      .startsWith('https')
  )
}

export function isDefaultPort (context) {
  const port = String(getWindowLocationPort(context))

  return port === '' || Number(port) === PORT
}

export function isDefaultSecurePort (context) {
  const port = String(getWindowLocationPort(context))

  return port === '' || Number(port) === SECURE_PORT
}
