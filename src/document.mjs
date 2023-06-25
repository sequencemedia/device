import debug from 'debug'

const log = debug('@sequencemedia/device')

log('`@sequencemedia/device` is awake')

export function getWindowDocument (context = globalThis) {
  const {
    document = {}
  } = context

  return document
}
