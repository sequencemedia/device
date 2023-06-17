import {
  expect
} from 'chai'

import {
  getWindowLocationOrigin,
  getWindowLocationProtocol,
  getWindowLocationHostname,
  getWindowLocationHost,
  getWindowLocationPort,
  getWindowLocationHref,
  isSecure,
  isDefaultPort,
  isDefaultSecurePort
} from '@sequencemedia/device'

describe('@sequencemedia/device', () => {
  describe('`getWindowLocationOrigin`', () => it('is a function', () => expect(getWindowLocationOrigin).to.be.a('function')))

  describe('`getWindowLocationProtocol`', () => it('is a function', () => expect(getWindowLocationProtocol).to.be.a('function')))

  describe('`getWindowLocationHostname`', () => it('is a function', () => expect(getWindowLocationHostname).to.be.a('function')))

  describe('`getWindowLocationHost`', () => it('is a function', () => expect(getWindowLocationHost).to.be.a('function')))

  describe('`getWindowLocationPort`', () => it('is a function', () => expect(getWindowLocationPort).to.be.a('function')))

  describe('`getWindowLocationHref`', () => it('is a function', () => expect(getWindowLocationHref).to.be.a('function')))

  describe('`isSecure`', () => it('is a function', () => expect(isSecure).to.be.a('function')))

  describe('`isDefaultPort`', () => it('is a function', () => expect(isDefaultPort).to.be.a('function')))

  describe('`isDefaultSecurePort`', () => it('is a function', () => expect(isDefaultSecurePort).to.be.a('function')))

  describe('`getWindowLocationOrigin()`', () => {
    describe('`origin` is defined', () => it('returns a string', () => expect(getWindowLocationOrigin({ location: { origin: 'MOCK ORIGIN' } })).to.equal('MOCK ORIGIN')))

    describe('`origin` is not defined', () => it('returns a string', () => expect(getWindowLocationOrigin()).to.equal('//localhost')))
  })

  describe('`getWindowLocationProtocol()`', () => {
    describe('`protocol` is defined', () => it('returns a string', () => expect(getWindowLocationProtocol({ location: { protocol: 'MOCK PROTOCOL' } })).to.equal('MOCK PROTOCOL')))

    describe('`protocol` is not defined', () => it('returns a string', () => expect(getWindowLocationProtocol()).to.equal('http')))
  })

  describe('`getWindowLocationHostname()`', () => {
    describe('`hostname` is defined', () => it('returns a string', () => expect(getWindowLocationHostname({ location: { hostname: 'MOCK HOSTNAME' } })).to.equal('MOCK HOSTNAME')))

    describe('`hostname` is not defined', () => it('returns a string', () => expect(getWindowLocationHostname()).to.equal('localhost')))
  })

  describe('`getWindowLocationHost()`', () => {
    describe('`host` is defined', () => it('returns a string', () => expect(getWindowLocationHost({ location: { host: 'MOCK HOST' } })).to.equal('MOCK HOST')))

    describe('`host` is not defined', () => it('returns a string', () => expect(getWindowLocationHost()).to.equal('localhost')))
  })

  describe('`getWindowLocationPort()`', () => {
    describe('`port` is defined', () => it('returns a number', () => expect(getWindowLocationPort({ location: { port: 81 } })).to.equal(81)))

    describe('`port` is not defined', () => it('returns a number', () => expect(getWindowLocationPort()).to.equal(80)))
  })

  describe('`getWindowLocationHref()`', () => {
    describe('`href` is defined', () => it('returns a string', () => expect(getWindowLocationHref({ location: { href: 'MOCK HREF' } })).to.equal('MOCK HREF')))

    describe('`href` is not defined', () => it('returns a string', () => expect(getWindowLocationHref()).to.equal('//localhost')))
  })

  describe('`isSecure()`', () => {
    describe('`protocol` is `https`', () => {
      it('returns true', () => expect(isSecure({ location: { protocol: 'https' } })).to.be.true)
    })

    describe('`protocol` is not `https`', () => {
      it('returns false', () => expect(isSecure({ location: { protocol: 'http' } })).to.be.false)
    })
  })

  describe('`isDefaultPort()`', () => {
    describe('`port` is 80', () => it('returns true', () => expect(isDefaultPort({ location: { port: 80 } })).to.be.true))

    describe('`port` is not 80', () => it('returns false', () => expect(isDefaultPort({ location: { port: 81 } })).to.be.false))
  })

  describe('`isDefaultSecurePort()`', () => {
    describe('`port` is 443', () => it('returns true', () => expect(isDefaultSecurePort({ location: { port: 443 } })).to.be.true))

    describe('`port` is not 444', () => it('returns false', () => expect(isDefaultSecurePort({ location: { port: 444 } })).to.be.false))
  })
})
