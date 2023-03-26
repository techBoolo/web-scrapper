import { getDB } from '../config/db.js'

const index = async (req, res) => {
  const db = getDB()
  const result = await db.post.findMany()

  res.status(200).json(result)
}

export default {
  index,
}
