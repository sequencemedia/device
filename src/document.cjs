const debug = require('debug')

const log = debug('@sequencemedia/device')

log('`@sequencemedia/device` is awake')

function getWindowDocument (context = globalThis) {
  const {
    document = {}
  } = context

  return document
}

module.exports = {
  getWindowDocument
}
