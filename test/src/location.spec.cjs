const {
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
} = require('@sequencemedia/device/location')

import('chai')
  .then(({
    expect
  }) => {
    describe('@sequencemedia/device', () => {
      const DEFAULT_PORT = 80
      const DEFAULT_SECURE_PORT = 443

      const MOCK_LOCATION = {}
      const MOCK_ORIGIN = 'MOCK ORIGIN'
      const MOCK_PROTOCOL = 'MOCK PROTOCOL'
      const MOCK_HOSTNAME = 'MOCK HOSTNAME'
      const MOCK_HOST = 'MOCK HOST'
      const MOCK_HREF = 'MOCK HREF'
      const MOCK_PORT = 81
      const MOCK_HASH = 'MOCK HASH'
      const MOCK_PATHNAME = 'MOCK PATHNAME'
      const MOCK_SEARCH = 'MOCK SEARCH'
      const MOCK_SECURE_PORT = 444

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
        describe('`location` is defined', () => it('returns an object', () => expect(getWindowLocation({ location: MOCK_LOCATION })).to.equal(MOCK_LOCATION)))

        describe('`location` is not defined', () => it('returns an object', () => expect(getWindowLocation()).to.eql({})))
      })

      describe('`getWindowLocationOrigin()`', () => {
        describe('`origin` is defined', () => it('returns a string', () => expect(getWindowLocationOrigin({ location: { origin: MOCK_ORIGIN } })).to.equal(MOCK_ORIGIN)))

        describe('`origin` is not defined', () => it('returns a string', () => expect(getWindowLocationOrigin()).to.equal('//localhost')))
      })

      describe('`getWindowLocationProtocol()`', () => {
        describe('`protocol` is defined', () => it('returns a string', () => expect(getWindowLocationProtocol({ location: { protocol: MOCK_PROTOCOL } })).to.equal(MOCK_PROTOCOL)))

        describe('`protocol` is not defined', () => it('returns a string', () => expect(getWindowLocationProtocol()).to.equal('http:')))
      })

      describe('`getWindowLocationHostname()`', () => {
        describe('`hostname` is defined', () => it('returns a string', () => expect(getWindowLocationHostname({ location: { hostname: MOCK_HOSTNAME } })).to.equal(MOCK_HOSTNAME)))

        describe('`hostname` is not defined', () => it('returns a string', () => expect(getWindowLocationHostname()).to.equal('localhost')))
      })

      describe('`getWindowLocationHost()`', () => {
        describe('`host` is defined', () => it('returns a string', () => expect(getWindowLocationHost({ location: { host: MOCK_HOST } })).to.equal(MOCK_HOST)))

        describe('`host` is not defined', () => it('returns a string', () => expect(getWindowLocationHost()).to.equal('localhost')))
      })

      describe('`getWindowLocationPort()`', () => {
        describe('`port` is defined', () => it('returns a number', () => expect(getWindowLocationPort({ location: { port: MOCK_PORT } })).to.equal(MOCK_PORT)))

        describe('`port` is not defined', () => it('returns a number', () => expect(getWindowLocationPort()).to.equal(DEFAULT_PORT)))
      })

      describe('`getWindowLocationHref()`', () => {
        describe('`href` is defined', () => it('returns a string', () => expect(getWindowLocationHref({ location: { href: MOCK_HREF } })).to.equal(MOCK_HREF)))

        describe('`href` is not defined', () => it('returns a string', () => expect(getWindowLocationHref()).to.equal('//localhost')))
      })

      describe('`getWindowLocationHash()`', () => {
        describe('`hash` is defined', () => it('returns a string', () => expect(getWindowLocationHash({ location: { hash: MOCK_HASH } })).to.equal(MOCK_HASH)))

        describe('`hash` is not defined', () => it('returns a string', () => expect(getWindowLocationHash()).to.equal('')))
      })

      describe('`getWindowLocationPathname()`', () => {
        describe('`pathname` is defined', () => it('returns a string', () => expect(getWindowLocationPathname({ location: { pathname: MOCK_PATHNAME } })).to.equal(MOCK_PATHNAME)))

        describe('`pathname` is not defined', () => it('returns a string', () => expect(getWindowLocationPathname()).to.equal('/')))
      })

      describe('`getWindowLocationSearch()`', () => {
        describe('`search` is defined', () => it('returns a string', () => expect(getWindowLocationSearch({ location: { search: MOCK_SEARCH } })).to.equal(MOCK_SEARCH)))

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
        describe('`port` is 80', () => it('returns true', () => expect(isDefaultPort({ location: { port: DEFAULT_PORT } })).to.be.true))

        describe('`port` is not 80', () => it('returns false', () => expect(isDefaultPort({ location: { port: MOCK_PORT } })).to.be.false))
      })

      describe('`isDefaultSecurePort()`', () => {
        describe('`port` is 443', () => it('returns true', () => expect(isDefaultSecurePort({ location: { port: DEFAULT_SECURE_PORT } })).to.be.true))

        describe('`port` is not 443', () => it('returns false', () => expect(isDefaultSecurePort({ location: { port: MOCK_SECURE_PORT } })).to.be.false))
      })
    })
  })
