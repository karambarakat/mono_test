const depLocal = require('leaf')
const dep2 = require('lodash.debounce')
const http = require('http')

const PORT = process.env.PORT

if (!PORT || typeof PORT !== 'string') {
  throw new Error('PORT not defined:', PORT)
}

const server = http.createServer((req, res) => {
  res.end(`
  dependency: ${depLocal()} 
  `)
})

server.listen(PORT, () => {
  dep2(() => {})
  console.log('dependency: ' + depLocal())
  console.log()
  console.log(`server listening on port ${PORT}`)
})
