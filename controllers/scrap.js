const all = async (req, res) => {

  res.status(200).send('handle scrap all')
}

const single = async (req, res) => {
  const source = req.params

  console.log(source);
  res.status(200).send('handle scrap single')
}

export default {
  all,
  single
}
