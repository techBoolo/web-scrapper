import ErrorResponse from '../utils/errorResponse.js'
export default (req, res, next) => {
  const error = new ErrorResponse({ 
    message: 'Route not found', 
    statusCode: 404 
  }) 
  next(error)
}
