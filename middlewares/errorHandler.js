export default (error, req, res, next) => {
  res.status(error.statusCode || 500)
  res.statusMessage = error.message
  res.json({
    error: {
      message: error.message
    }
  })
}
