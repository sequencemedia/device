const {
  expect
} = require('chai')

const {
  getWindowDocument
} = require('@sequencemedia/device')

describe('@sequencemedia/device', () => {
  describe('`getWindowDocument`', () => it('is a function', () => expect(getWindowDocument).to.be.a('function')))

  describe('`getWindowDocument()`', () => {
    const mockDocument = {}

    describe('`document` is defined', () => it('returns an object', () => expect(getWindowDocument({ document: mockDocument })).to.equal(mockDocument)))

    describe('`document` is not defined', () => it('returns an object', () => expect(getWindowDocument()).to.eql({})))
  })
})
