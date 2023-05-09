const depLocal = require('leaf')
const depLocal2 = require('leaf_deprecated')
const dep2 = require('lodash.debounce')
const http = require('http')

const PORT = process.env.PORT

if (!PORT || typeof PORT !== 'string') {
  throw new Error('PORT not defined:', PORT)
}

const server = http.createServer((req, res) => {
  res.end(`
  dependency: ${depLocal()} 
  dependency: ${depLocal2()}
  `)
})

server.listen(PORT, () => {
  dep2(() => {})
  console.log('dependency: ' + depLocal())
  console.log('dependency: ' + depLocal2())
  console.log()
  console.log(`server listening on port ${PORT}`)
})
