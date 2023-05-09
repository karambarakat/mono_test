const dep = require('lodash.isequal')

module.exports = () => {
  return 'p3 v1, dep:' + dep({}, {})
}
