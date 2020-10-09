require('dotenv-flow').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const middlewares = require('./src/middlewares')
const routes = require('./src/routes')

const { isProduction } = require('./src/helpers')

const { PORT } = process.env

if (isProduction()) {
  app.use(helmet())
}

app.use(bodyParser.json())
app.use(routes)
app.use(middlewares.error)

app.listen(PORT, () => {
  console.log(`${isProduction() ? 'Production' : 'Development' } server started. Listening on port ${PORT}.`)
})