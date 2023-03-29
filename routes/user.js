import express from 'express'
import userController from '../controllers/user.js'

const router = express.Router()

router.route('/signin')
  .put(userController.signin)

export default router
