const color = require('colors')

const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Easy Shop Backend is Running')
})

app.listen(port, () => {
  console.log(color.rainbow(`Backend port http://localhost:${process.env.PORT}`))
})
