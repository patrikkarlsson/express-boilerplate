const express = require('express')
const app = express()

require('./base')({ app })

module.exports = app