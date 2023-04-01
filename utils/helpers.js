import jwt from 'jsonwebtoken'
import ErrorResponse from './errorResponse.js'

const generateJWToken = async (payload)  => {
  return await jwt.sign(
    payload,
    process.env.JWT_KEY,
    { expiresIn: '48hr' }
  )
}

const getJWToken = (req) => {
  const auth = req.get('authentication')
  if(auth && auth.toLowerCase().startsWith('bearer')) {
    return auth.split(/\s+/)[1]
  }
  throw new ErrorResponse({
    statusCode: 403,
    message: 'Please, provide your credential'
  })
}

const verifyJWToken = async (token) => {
  return await jwt.verify(token, process.env.JWT_KEY) 
}

export default {
  generateJWToken,
  verifyJWToken,
}
