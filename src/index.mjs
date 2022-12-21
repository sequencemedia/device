import debug from 'debug'

const log = debug('@sequencemedia/device')

log('`@sequencemedia/device` is awake')

export const PORT = 80

export const SECURE_PORT = 443

export function getWindowLocationOrigin ({
  location: {
    origin = '//localhost'
  } = {}
} = globalThis) {
  return origin
}

export function getWindowLocationProtocol ({
  location: {
    protocol = 'http'
  } = {}
} = globalThis) {
  return protocol
}

export function getWindowLocationHostname ({
  location: {
    hostname = 'localhost'
  } = {}
} = globalThis) {
  return hostname
}

export function getWindowLocationHost ({
  location: {
    host = 'localhost'
  } = {}
} = globalThis) {
  return host
}

export function getWindowLocationPort ({
  location: {
    port = PORT
  } = {}
} = globalThis) {
  return port
}

export function getWindowLocationHref ({
  location: {
    href = '//localhost'
  } = {}
} = globalThis) {
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
