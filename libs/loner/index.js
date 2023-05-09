const dep = require('lodash.isequal')

module.exports = () => {
  return 'loner, dep:' + dep({}, {})
}
