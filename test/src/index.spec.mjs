import {
  expect
} from 'chai'

import {
  getWindowDocument,
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
  describe('`getWindowDocument`', () => it('is a function', () => expect(getWindowDocument).to.be.a('function')))

  describe('`getWindowLocationOrigin`', () => it('is a function', () => expect(getWindowLocationOrigin).to.be.a('function')))

  describe('`getWindowLocationProtocol`', () => it('is a function', () => expect(getWindowLocationProtocol).to.be.a('function')))

  describe('`getWindowLocationHostname`', () => it('is a function', () => expect(getWindowLocationHostname).to.be.a('function')))

  describe('`getWindowLocationHost`', () => it('is a function', () => expect(getWindowLocationHost).to.be.a('function')))

  describe('`getWindowLocationPort`', () => it('is a function', () => expect(getWindowLocationPort).to.be.a('function')))

  describe('`getWindowLocationHref`', () => it('is a function', () => expect(getWindowLocationHref).to.be.a('function')))

  describe('`isSecure`', () => it('is a function', () => expect(isSecure).to.be.a('function')))

  describe('`isDefaultPort`', () => it('is a function', () => expect(isDefaultPort).to.be.a('function')))

  describe('`isDefaultSecurePort`', () => it('is a function', () => expect(isDefaultSecurePort).to.be.a('function')))
})
