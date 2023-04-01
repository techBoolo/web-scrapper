import scrappers from '../utils/scrappers/index.js'
import data from '../data/data.js'
import scrap from '../utils/scrap.js'
import Post from '../models/post_dao.js'
import ErrorResponse from '../utils/errorResponse.js'
const all = async (req, res) => {

  res.status(200).send('handle scrap all')
}

const single = async (req, res) => {
  const { source } = req.params
  switch(source) {
    case 'reporter':
      const result = await scrap(scrappers.reporter, data.reporter)
      await Post.create(result)
      break
    case 'news':
      console.log(source);
      break;
    default:
      throw new ErrorResponse({ statusCode: 404, message: 'Source is not in the list' })
  }

  res.status(200).send('handle scrap single')
}

export default {
  all,
  single
}
