import {
  expect
} from 'chai'

import {
  getRequestSocket,
  isRequestSocketEncrypted,
  getRequestHeaders,
  getRequestHeadersOrigin,
  getRequestHeadersHost,
  getRequestHeadersConnection,
  getRequestHeadersUserAgent,
  getRequestHeadersAccept,
  getRequestHeadersAcceptEncoding,
  getRequestHeadersAcceptLanguage,
  getRequestHeadersCookie
} from '@sequencemedia/device/express'

describe('@sequencemedia/device/express', () => {
  describe('`getRequestSocket`', () => it('is a function', () => expect(getRequestSocket).to.be.a('function')))

  describe('`isRequestSocketEncrypted`', () => it('is a function', () => expect(isRequestSocketEncrypted).to.be.a('function')))

  describe('`getRequestHeaders`', () => it('is a function', () => expect(getRequestHeaders).to.be.a('function')))

  describe('`getRequestHeadersOrigin`', () => it('is a function', () => expect(getRequestHeadersOrigin).to.be.a('function')))

  describe('`getRequestHeadersHost`', () => it('is a function', () => expect(getRequestHeadersHost).to.be.a('function')))

  describe('`getRequestHeadersConnection`', () => it('is a function', () => expect(getRequestHeadersConnection).to.be.a('function')))

  describe('`getRequestHeadersUserAgent`', () => it('is a function', () => expect(getRequestHeadersUserAgent).to.be.a('function')))

  describe('`getRequestHeadersAccept`', () => it('is a function', () => expect(getRequestHeadersAccept).to.be.a('function')))

  describe('`getRequestHeadersAcceptEncoding`', () => it('is a function', () => expect(getRequestHeadersAcceptEncoding).to.be.a('function')))

  describe('`getRequestHeadersAcceptLanguage`', () => it('is a function', () => expect(getRequestHeadersAcceptLanguage).to.be.a('function')))

  describe('`getRequestHeadersCookie`', () => it('is a function', () => expect(getRequestHeadersCookie).to.be.a('function')))

  describe('`getRequestSocket()`', () => {
    const MOCK_SOCKET = {}

    describe('`socket` is defined', () => it('returns an object', () => expect(getRequestSocket({ socket: MOCK_SOCKET })).to.equal(MOCK_SOCKET)))

    describe('`socket` is not defined', () => it('returns an object', () => expect(getRequestSocket({})).to.eql({})))
  })

  describe('`isRequestSocketEncrypted()`', () => {
    describe('`encrypted` is true', () => it('returns true', () => expect(isRequestSocketEncrypted({ socket: { encrypted: true } })).to.be.true))

    describe('`encrypted` is false', () => it('returns false', () => expect(isRequestSocketEncrypted({ socket: { encrypted: false } })).to.be.false))

    describe('`encrypted` is not defined', () => it('returns false', () => expect(isRequestSocketEncrypted({})).to.be.false))
  })

  describe('`getRequestHeaders()`', () => {
    const MOCK_HEADERS = {}

    describe('`headers` is defined', () => it('returns an object', () => expect(getRequestHeaders({ headers: MOCK_HEADERS })).to.equal(MOCK_HEADERS)))

    describe('`headers` is not defined', () => it('returns an object', () => expect(getRequestHeaders({})).to.eql({})))
  })

  describe('`getRequestHeadersOrigin()`', () => {
    describe('`origin` is defined', () => it('returns a string', () => expect(getRequestHeadersOrigin({ headers: { origin: 'MOCK ORIGIN' } })).to.equal('MOCK ORIGIN')))

    describe('`origin` is not defined', () => it('returns undefined', () => expect(getRequestHeadersOrigin({})).to.be.undefined))
  })

  describe('`getRequestHeadersHost()`', () => {
    describe('`port` is defined', () => it('returns a string', () => expect(getRequestHeadersHost({ headers: { host: 'MOCK HOST' } })).to.equal('MOCK HOST')))

    describe('`port` is not defined', () => it('returns undefined', () => expect(getRequestHeadersHost({})).to.be.undefined))
  })

  describe('`getRequestHeadersConnection()`', () => {
    describe('`href` is defined', () => it('returns a string', () => expect(getRequestHeadersConnection({ headers: { connection: 'MOCK CONNECTION' } })).to.equal('MOCK CONNECTION')))

    describe('`href` is not defined', () => it('returns undefined', () => expect(getRequestHeadersConnection({})).to.be.undefined))
  })

  describe('`getRequestHeadersUserAgent()`', () => {
    describe('`user-agent` is defined', () => it('returns true', () => expect(getRequestHeadersUserAgent({ headers: { 'user-agent': 'MOCK USER AGENT' } })).to.equal('MOCK USER AGENT')))

    describe('`user-agent` is not defined', () => it('returns false', () => expect(getRequestHeadersUserAgent({})).to.be.undefined))
  })

  describe('`getRequestHeadersAccept()`', () => {
    describe('`accept` is defined', () => it('returns astring', () => expect(getRequestHeadersAccept({ headers: { accept: 'MOCK ACCEPT' } })).to.equal('MOCK ACCEPT')))

    describe('`accept` is not defined', () => it('returns undefined', () => expect(getRequestHeadersAccept({})).to.be.undefined))
  })

  describe('`getRequestHeadersAcceptEncoding()`', () => {
    describe('`accept-encoding` is defined', () => it('returns a string', () => expect(getRequestHeadersAcceptEncoding({ headers: { 'accept-encoding': 'MOCK ACCEPT ENCODING' } })).to.equal('MOCK ACCEPT ENCODING')))

    describe('`accept-encoding` is not defined', () => it('returns undefined', () => expect(getRequestHeadersAcceptEncoding({})).to.be.undefined))
  })

  describe('`getRequestHeadersAcceptLanguage()`', () => {
    describe('`accept-language` is defined', () => it('returns a string', () => expect(getRequestHeadersAcceptLanguage({ headers: { 'accept-language': 'MOCK ACCEPT LANGUAGE' } })).to.equal('MOCK ACCEPT LANGUAGE')))

    describe('`accept-language` is not defined', () => it('returns undefined', () => expect(getRequestHeadersAcceptLanguage({})).to.be.undefined))
  })

  describe('`getRequestHeadersCookie()`', () => {
    describe('`cookie` is defined', () => it('returns a string', () => expect(getRequestHeadersCookie({ headers: { cookie: 'COOKIE' } })).to.equal('COOKIE')))

    describe('`cookie` is not defined', () => it('returns undefined', () => expect(getRequestHeadersCookie({})).to.be.undefined))
  })
})
