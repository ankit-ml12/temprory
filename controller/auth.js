const { StatusCodes } = require('http-status-codes')
const User = require('../model/auth')
const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../error')

const register = async (req, res) => {
  const { name, email, password } = req.body

  // if (!email || !password) {
  //   res.send('email and password required')
  // }
  const token = await jwt.sign({ user: name, id: Date.now() }, 'secretkey', {
    expiresIn: '5d',
  })
  // try {
  const user = await User.create({ ...req.body })
  return res.status(StatusCodes.CREATED).json(user)
  // } catch (error) {
  //   return res.status(StatusCodes.BAD_GATEWAY).json({ error })
  // }
}

const login = async (req, res) => {
  res.send('login')
}

module.exports = { register, login }
