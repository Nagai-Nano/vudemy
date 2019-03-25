const catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

const sendErrorMessage = (err, req, res, next) => {
  const status = err.status || err.response.status || 400
  const message = err.message || err.response.message || 'Bad Request'

  res.status(status).json({
    success: false,
    message
  })
}

module.exports = {
  catchErrors,
  sendErrorMessage
}
