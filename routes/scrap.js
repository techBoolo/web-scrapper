import express from 'express'
import scrapController from '../controllers/scrap.js'

const router = express.Router()

router.route('/')
  .put(scrapController.all)

router.route('/:source')
  .put(scrapController.single)

export default router
