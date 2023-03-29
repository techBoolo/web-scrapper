import express from 'express'
import 'express-async-errors'
import errorHandler from './middlewares/errorHandler.js'
import routeNotFound from './middlewares/routeNotFound.js'
import logger from './middlewares/logger.js'
import postRoute from './routes/post.js'
import userRoute from './routes/user.js'

const app = express()
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'it works!' })
})

app.use('/posts', postRoute)
app.use('/users', userRoute)

app.use(routeNotFound)
app.use(errorHandler)
export default app
