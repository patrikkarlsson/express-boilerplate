const axios = require('axios')
const { AppError } = require('./../../errors')
const { catchAsync } = require('./../../middlewares')

const example = require('./example')({ catchAsync, axios, AppError })

const baseRoutes = ({ example }) => {

  const init = ({ app }) => {
    if (!app) {
      throw new Error('Base route missing parameter')
    }

    app.get('/', example)
  }

  return init
}

module.exports = baseRoutes({ example })