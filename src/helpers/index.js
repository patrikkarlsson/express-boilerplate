const { NODE_ENV } = process.env
const isProduction = require('./isProduction')({ NODE_ENV })

module.exports = {
  isProduction,
}