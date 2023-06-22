const { StatusCodes } = require('http-status-codes')
const notFound = async (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ err: 'this page is not found' })
}

module.exports = notFound
