import connectDB, { getDB } from './config/db.js'

(async function main() {
  await connectDB()
  const db = getDB()
  const results = await db.user.findMany()
  console.log(results);
})()

