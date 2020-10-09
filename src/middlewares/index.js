const { NODE_ENV } = process.env
const { isProduction } = require('./../helpers')
const { ServerError, AppError } = require('./../errors')

const error = require('./error')({ NODE_ENV, ServerError, AppError, isProduction })
const catchAsync = require('./catchAsync')

module.exports = {
  error,
  catchAsync,
}