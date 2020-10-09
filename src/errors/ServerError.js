class ServerError extends Error {
  constructor(err) {
    super('internal error', 500)
    this.statusCode = 500
    this.status = 'error'
    this.err = err
  }
}

module.exports = ServerError