declare module '@sequencemedia/device' {
  type LocationType = {
    origin: string
    protocol: string
    hostname: string
    host: string
    port: string | number
    href: string
    hash: string
    pathname: string
    search: string
  }

  export const PORT: number
  export const SECURE_PORT: number
  export function getWindowDocument(context?: globalThis): object
  export function getWindowLocation(context?: globalThis): LocationType
  export function getWindowLocationOrigin(context?: globalThis): string
  export function getWindowLocationProtocol(context?: globalThis): string
  export function getWindowLocationHostname(context?: globalThis): string
  export function getWindowLocationHost(context?: globalThis): string
  export function getWindowLocationPort(context?: globalThis): string | number
  export function getWindowLocationHref(context?: globalThis): string
  export function getWindowLocationHash(context?: globalThis): string
  export function getWindowLocationPathname(context?: globalThis): string
  export function getWindowLocationSearch(context?: globalThis): string
  export function isSecure(context?: globalThis): boolean
  export function isDefaultPort(context?: globalThis): boolean
  export function isDefaultSecurePort(context?: globalThis): boolean
}
