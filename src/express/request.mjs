export function getRequestSocket ({ socket = {} }) {
  return socket
}

export function isRequestSocketEncrypted (req) {
  const {
    encrypted = false
  } = getRequestSocket(req)

  return encrypted
}

export function getRequestHeaders ({ headers = {} }) {
  return headers
}

export function getRequestHeadersOrigin (req) {
  const {
    origin
  } = getRequestHeaders(req)

  return origin
}

export function getRequestHeadersHost (req) {
  const {
    host
  } = getRequestHeaders(req)

  return host
}

export function getRequestHeadersConnection (req) {
  const {
    connection
  } = getRequestHeaders(req)

  return connection
}

export function getRequestHeadersUserAgent (req) {
  const {
    'user-agent': userAgent
  } = getRequestHeaders(req)

  return userAgent
}

export function getRequestHeadersAccept (req) {
  const {
    accept
  } = getRequestHeaders(req)

  return accept
}

export function getRequestHeadersAcceptEncoding (req) {
  const {
    'accept-encoding': acceptEncoding
  } = getRequestHeaders(req)

  return acceptEncoding
}

export function getRequestHeadersAcceptLanguage (req) {
  const {
    'accept-language': acceptLanguage
  } = getRequestHeaders(req)

  return acceptLanguage
}

export function getRequestHeadersCookie (req) {
  const {
    cookie
  } = getRequestHeaders(req)

  return cookie
}
