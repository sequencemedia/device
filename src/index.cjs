require('@babel/register')

const document = require('./document.mjs')
const location = require('./location.mjs')

module.exports = {
  ...document,
  ...location
}
