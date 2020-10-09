const catchAsync = fn => {
  return (req, res, next) => {
    const { body } = req
    fn({ req, res, body })
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => next(err))
  }
}

module.exports = catchAsync