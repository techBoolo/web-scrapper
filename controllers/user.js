import ErrorResponse from '../utils/errorResponse.js'
import helpers  from '../utils/helpers.js'
const signin = async (req, res) => {
  const { name, password } = req.body
  if(name == process.env.NAME && password == process.env.PASSWORD) {

    const payload = {
      name
    }
    
    const token = await helpers.generateJWToken(payload)

    res.status(200).json({ message: 'signin success', token })
  } else {
    throw new ErrorResponse({ 
      statusCode: 403, 
      message: 'Authentication failed'
    })
  }
}

export default {
  signin,
}
