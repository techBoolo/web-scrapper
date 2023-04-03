import scrappers from '../utils/scrappers/index.js'
import data from '../data/data.js'
import scrap from '../utils/scrap.js'
import Post from '../models/post_dao.js'
import ErrorResponse from '../utils/errorResponse.js'

const switchScrapper = async (source) => {
  return new Promise(async (resolve, reject) => {
    switch(source) {
      case 'reporter':
        try {
          const result = await scrap(scrappers.reporter, data.reporter)
          response = await Post.create(result)
          resolve(response)
        } catch (err) {
          reject(err)
        }
        break;
      case 'news':
        console.log(source);
        break;
      default:
        reject(new ErrorResponse({ statusCode: 404, message: 'Source is not in the list' }))
    }
  })
}

const all = async (req, res) => {

  res.status(200).send('handle scrap all')
}

const single = async (req, res) => {
  const { source } = req.params
  
  const response = await switchScrapper(source)
  res.status(200).json(response)
}

export default {
  all,
  single
}
