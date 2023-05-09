const hello = require('hello-world-npm')
const dep1 = require('lodash.debounce')
const dep2 = require('lodash.merge')

module.exports = () => {
  dep1(() => {})
  dep2({}, {})
  return 'leaf v2, dep:' + hello()
}
