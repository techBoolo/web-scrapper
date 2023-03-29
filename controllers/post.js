import Post from '../models/post_dao.js'

const index = async (req, res) => {
  const result = await Post.getAll()

  res.status(200).json(result)
}

export default {
  index,
}
