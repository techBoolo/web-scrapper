import { getDB } from '../config/db.js'

const getAll = async () => {
  const db = getDB()
  return await db.post.findMany()
}

const create = async (postData) => {
  const { source, ...rest } = postData
  const db = getDB()
  return await db.post.upsert({
    where: { source: source },
    update: {
      ...rest
    },
    create: {
      ...postData
    },
  })
}

export default {
  getAll,
  create,
}
