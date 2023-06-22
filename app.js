require('dotenv').config()
const express = require('express')
const app = express()

//connections
const PORT = process.env.PORT || 3000
const url = process.env.MONGO_URI
const connectDB = require('./db/connect')

//router
const authrouter = require('./route/auth')
const jobrouter = require('./route/job')

//middleware
const notFound = require('./middleware/notfound')
const errorHandler = require('./middleware/errorhandler')

app.use(express.json())

app.use('/api/v1/auth', authrouter)
app.use('/api/v1/jobs', jobrouter)
app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is connected to ${PORT}`)
    })
    await connectDB(url)
  } catch (error) {
    console.log(error)
  }
}

start()
