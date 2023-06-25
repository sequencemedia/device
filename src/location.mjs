import debug from 'debug'

const log = debug('@sequencemedia/device')

log('`@sequencemedia/device` is awake')

export const PORT = 80

export const SECURE_PORT = 443

export function getWindowLocation (context = globalThis) {
  const {
    location = {}
  } = context

  return location
}

export function getWindowLocationOrigin (context) {
  const {
    origin = '//localhost'
  } = getWindowLocation(context)

  return origin
}

export function getWindowLocationProtocol (context) {
  const {
    protocol = 'http:'
  } = getWindowLocation(context)

  return protocol
}

export function getWindowLocationHostname (context) {
  const {
    hostname = 'localhost'
  } = getWindowLocation(context)

  return hostname
}

export function getWindowLocationHost (context) {
  const {
    host = 'localhost'
  } = getWindowLocation(context)

  return host
}

export function getWindowLocationPort (context) {
  const {
    port = PORT
  } = getWindowLocation(context)

  return port
}

export function getWindowLocationHref (context) {
  const {
    href = '//localhost'
  } = getWindowLocation(context)

  return href
}

export function getWindowLocationHash (context) {
  const {
    hash = ''
  } = getWindowLocation(context)

  return hash
}

export function getWindowLocationPathname (context) {
  const {
    pathname = '/'
  } = getWindowLocation(context)

  return pathname
}

export function getWindowLocationSearch (context) {
  const {
    search = ''
  } = getWindowLocation(context)

  return search
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
