import express from 'express'
import errorHandler from './middlewares/errorHandler.js'
import routeNotFound from './middlewares/routeNotFound.js'
import logger from './middlewares/logger.js'
import postRoute from './routes/post.js'

const app = express()
app.use(logger)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'it works!' })
})

app.use('/posts', postRoute)

app.use(routeNotFound)
app.use(errorHandler)
export default app
