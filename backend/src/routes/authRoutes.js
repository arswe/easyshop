const express = require('express')
const authControllers = require('../controllers/authControllers')
const { authMiddleware } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/adminLogin', authControllers.adminLogin)
router.post('/getUser', authMiddleware, authControllers.getUser)

module.exports = router
