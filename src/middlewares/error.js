
const error = ({
  NODE_ENV,
  isProduction,
  ServerError,
  AppError,
}) => {

  if (
    !NODE_ENV ||
    !ServerError ||
    !AppError ||
    !isProduction
  ) {
    throw new Error('Error middlware missing parameter')
  }

  const logg = (err) => {
    console.error('ERROR 💥: ', err)
  }

  const sendError = (err, res) => {
    const { statusCode, status, message, isOperational } = err
    if (isOperational) {
      res.status(statusCode).json({ 
        status,
        message,
      })
    } else {
      if (isProduction()) {
        res.status(500).json({
          status: 'error',
          message: 'Something went wrong.'
        })
      } else {
        logg(err)
        res.status(500).json(err)
      }
    }
  }

  const verify = (err) => {
    if ((err instanceof AppError) || (err instanceof ServerError)) {
      return err
    }
    return new ServerError(err)
  }
  
  const error = async (err, req, res, next) => {
    return sendError(verify(err), res)
  }

  return error
}



module.exports = error