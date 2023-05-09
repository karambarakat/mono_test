const hello = require('hello-world-npm')
const dep1 = require('lodash.debounce')
const dep2 = require('lodash.merge')

console.error('leaf deprecated')

module.exports = () => {
  dep1(() => {})
  dep2({}, {})
  return 'leaf deprecated, dep:' + hello()
}
