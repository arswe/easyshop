const express = require('express')
const authControllers = require('../controllers/authControllers')

const router = express.Router()

router.post('/adminLogin', authControllers.adminLogin)

module.exports = router
