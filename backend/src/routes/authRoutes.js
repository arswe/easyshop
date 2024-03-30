const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
  res.send('Easy Shop Backend is Running')
})
