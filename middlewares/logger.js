const requestLogger = (req, res, next) => {
  const requestDate = new Date().toLocaleString(undefined, { 
    dateStyle: 'medium', timeStyle: 'medium' 
  })
  console.log(req.method, req.url, requestDate);
  next()
}

export default requestLogger
