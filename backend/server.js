const { dbConnect } = require('./database/db')
const express = require('express')
const app = express()

const color = require('colors')
const cors = require('cors')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const dotenv = require('dotenv')
dotenv.config()
dbConnect()

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const authRoutes = require('./src/routes/authRoutes')

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Easy Shop Backend is Running')
})

app.use('/api', authRoutes)

app.listen(port, () => {
  console.log(
    color.cyan(`Backend Port http://localhost:${process.env.PORT}`).bold
  )
})
