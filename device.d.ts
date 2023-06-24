declare module '@sequencemedia/device' {
  export const PORT: number
  export const SECURE_PORT: number
  export function getWindowLocationOrigin(context?: globalThis): string
  export function getWindowLocationProtocol(context?: globalThis): string
  export function getWindowLocationHostname(context?: globalThis): string
  export function getWindowLocationHost(context?: globalThis): string
  export function getWindowLocationPort(context?: globalThis): string | number
  export function getWindowLocationHref(context?: globalThis): string
  export function isSecure(context?: globalThis): boolean
  export function isDefaultPort(context?: globalThis): boolean
  export function isDefaultSecurePort(context?: globalThis): boolean
}
