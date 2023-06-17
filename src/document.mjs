import debug from 'debug'

const log = debug('@sequencemedia/device')

log('`@sequencemedia/device` is awake')

export function getWindowDocument ({
  document = {}
} = globalThis) {
  return document
}
