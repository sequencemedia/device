"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.SECURE_PORT=exports.PORT=void 0;exports.getWindowLocationHost=getWindowLocationHost;exports.getWindowLocationHostname=getWindowLocationHostname;exports.getWindowLocationHref=getWindowLocationHref;exports.getWindowLocationOrigin=getWindowLocationOrigin;exports.getWindowLocationPort=getWindowLocationPort;exports.getWindowLocationProtocol=getWindowLocationProtocol;exports.isDefaultPort=isDefaultPort;exports.isDefaultSecurePort=isDefaultSecurePort;exports.isSecure=isSecure;var _debug=_interopRequireDefault(require("debug"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const log=(0,_debug.default)('@sequencemedia/device');log('`@sequencemedia/device` is awake');const PORT=80;exports.PORT=PORT;const SECURE_PORT=443;exports.SECURE_PORT=SECURE_PORT;function getWindowLocationOrigin({location:{origin='//localhost'}={}}=globalThis){return origin;}function getWindowLocationProtocol({location:{protocol='http'}={}}=globalThis){return protocol;}function getWindowLocationHostname({location:{hostname='localhost'}={}}=globalThis){return hostname;}function getWindowLocationHost({location:{host='localhost'}={}}=globalThis){return host;}function getWindowLocationPort({location:{port=PORT}={}}=globalThis){return port;}function getWindowLocationHref({location:{href='//localhost'}={}}=globalThis){return href;}function isSecure(context){return getWindowLocationProtocol(context).toLowerCase().startsWith('https');}function isDefaultPort(context){const port=String(getWindowLocationPort(context));return port===''||Number(port)===PORT;}function isDefaultSecurePort(context){const port=String(getWindowLocationPort(context));return port===''||Number(port)===SECURE_PORT;}