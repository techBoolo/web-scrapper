import jwt from 'jsonwebtoken'

const generateJWToken = async (payload)  => {
  return await jwt.sign(
    payload,
    process.env.JWT_KEY,
    { expiresIn: '48hr' }
  )
}

const verifyJWToken = async (token) => {
  return await jwt.verify(token, pocess.env.JWT_KEY) 
}

export default {
  generateJWToken,
  verifyJWToken,
}
