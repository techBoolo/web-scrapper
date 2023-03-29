import Post from './post.js'

const getAll = async () => {
  return await Post.getAll()
}

const create = async (postData) => {
  return await Post.create(postData)
}

export default {
  getAll,
  create,
}
