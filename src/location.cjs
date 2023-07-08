const debug = require('debug')

const log = debug('@sequencemedia/device')

log('`@sequencemedia/device` is awake')

const PORT = 80

const SECURE_PORT = 443

function getWindowLocation (context = globalThis) {
  const {
    location = {}
  } = context

  return location
}

function getWindowLocationOrigin (context) {
  const {
    origin = '//localhost'
  } = getWindowLocation(context)

  return origin
}

function getWindowLocationProtocol (context) {
  const {
    protocol = 'http:'
  } = getWindowLocation(context)

  return protocol
}

function getWindowLocationHostname (context) {
  const {
    hostname = 'localhost'
  } = getWindowLocation(context)

  return hostname
}

function getWindowLocationHost (context) {
  const {
    host = 'localhost'
  } = getWindowLocation(context)

  return host
}

function getWindowLocationPort (context) {
  const {
    port = PORT
  } = getWindowLocation(context)

  return port
}

function getWindowLocationHref (context) {
  const {
    href = '//localhost'
  } = getWindowLocation(context)

  return href
}

function getWindowLocationHash (context) {
  const {
    hash = ''
  } = getWindowLocation(context)

  return hash
}

function getWindowLocationPathname (context) {
  const {
    pathname = '/'
  } = getWindowLocation(context)

  return pathname
}

function getWindowLocationSearch (context) {
  const {
    search = ''
  } = getWindowLocation(context)

  return search
}

function isSecure (context) {
  return (
    getWindowLocationProtocol(context)
      .toLowerCase()
      .startsWith('https')
  )
}

function isDefaultPort (context) {
  const port = String(getWindowLocationPort(context))

  return port === '' || Number(port) === PORT
}

function isDefaultSecurePort (context) {
  const port = String(getWindowLocationPort(context))

  return port === '' || Number(port) === SECURE_PORT
}

module.exports = {
  PORT,
  SECURE_PORT,
  getWindowLocation,
  getWindowLocationOrigin,
  getWindowLocationProtocol,
  getWindowLocationHostname,
  getWindowLocationHost,
  getWindowLocationPort,
  getWindowLocationHref,
  getWindowLocationHash,
  getWindowLocationPathname,
  getWindowLocationSearch,
  isSecure,
  isDefaultPort,
  isDefaultSecurePort
}
