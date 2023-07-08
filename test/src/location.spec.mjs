import {
  expect
} from 'chai'

import {
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
} from '@sequencemedia/device/location'

describe('@sequencemedia/device', () => {
  describe('`getWindowLocation`', () => it('is a function', () => expect(getWindowLocation).to.be.a('function')))

  describe('`getWindowLocationOrigin`', () => it('is a function', () => expect(getWindowLocationOrigin).to.be.a('function')))

  describe('`getWindowLocationProtocol`', () => it('is a function', () => expect(getWindowLocationProtocol).to.be.a('function')))

  describe('`getWindowLocationHostname`', () => it('is a function', () => expect(getWindowLocationHostname).to.be.a('function')))

  describe('`getWindowLocationHost`', () => it('is a function', () => expect(getWindowLocationHost).to.be.a('function')))

  describe('`getWindowLocationPort`', () => it('is a function', () => expect(getWindowLocationPort).to.be.a('function')))

  describe('`getWindowLocationHref`', () => it('is a function', () => expect(getWindowLocationHref).to.be.a('function')))

  describe('`getWindowLocationHash`', () => it('is a function', () => expect(getWindowLocationHash).to.be.a('function')))

  describe('`getWindowLocationPathname`', () => it('is a function', () => expect(getWindowLocationPathname).to.be.a('function')))

  describe('`getWindowLocationSearch`', () => it('is a function', () => expect(getWindowLocationSearch).to.be.a('function')))

  describe('`isSecure`', () => it('is a function', () => expect(isSecure).to.be.a('function')))

  describe('`isDefaultPort`', () => it('is a function', () => expect(isDefaultPort).to.be.a('function')))

  describe('`isDefaultSecurePort`', () => it('is a function', () => expect(isDefaultSecurePort).to.be.a('function')))

  describe('`getWindowLocation()`', () => {
    const MOCK_LOCATION = {}
    describe('`location` is defined', () => it('returns an object', () => expect(getWindowLocation({ location: MOCK_LOCATION })).to.equal(MOCK_LOCATION)))

    describe('`location` is not defined', () => it('returns an object', () => expect(getWindowLocation()).to.eql({})))
  })

  describe('`getWindowLocationOrigin()`', () => {
    describe('`origin` is defined', () => it('returns a string', () => expect(getWindowLocationOrigin({ location: { origin: 'MOCK ORIGIN' } })).to.equal('MOCK ORIGIN')))

    describe('`origin` is not defined', () => it('returns a string', () => expect(getWindowLocationOrigin()).to.equal('//localhost')))
  })

  describe('`getWindowLocationProtocol()`', () => {
    describe('`protocol` is defined', () => it('returns a string', () => expect(getWindowLocationProtocol({ location: { protocol: 'MOCK PROTOCOL' } })).to.equal('MOCK PROTOCOL')))

    describe('`protocol` is not defined', () => it('returns a string', () => expect(getWindowLocationProtocol()).to.equal('http:')))
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

  describe('`getWindowLocationHash()`', () => {
    describe('`hash` is defined', () => it('returns a string', () => expect(getWindowLocationHash({ location: { hash: 'MOCK HASH' } })).to.equal('MOCK HASH')))

    describe('`hash` is not defined', () => it('returns a string', () => expect(getWindowLocationHash()).to.equal('')))
  })

  describe('`getWindowLocationPathname()`', () => {
    describe('`pathname` is defined', () => it('returns a string', () => expect(getWindowLocationPathname({ location: { pathname: 'MOCK PATHNAME' } })).to.equal('MOCK PATHNAME')))

    describe('`pathname` is not defined', () => it('returns a string', () => expect(getWindowLocationPathname()).to.equal('/')))
  })

  describe('`getWindowLocationSearch()`', () => {
    describe('`search` is defined', () => it('returns a string', () => expect(getWindowLocationSearch({ location: { search: 'MOCK SEARCH' } })).to.equal('MOCK SEARCH')))

    describe('`search` is not defined', () => it('returns a string', () => expect(getWindowLocationSearch()).to.equal('')))
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

    describe('`port` is not 443', () => it('returns false', () => expect(isDefaultSecurePort({ location: { port: 444 } })).to.be.false))
  })
})
