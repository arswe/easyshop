const { responseReturn } = require('../exception/response')
const adminModel = require('../models/adminModel')
const bcrypt = require('bcrypt')

class authControllers {
  adminLogin = async (request, response) => {
    const { email, password } = request.body
    try {
      const admin = await adminModel.findOne({ email }).select('+password')

      if (admin) {
        const match = await bcrypt.compare(password, admin.password)
      } else {
        responseReturn(response, 404, { error: 'Email not found' })
      }
    } catch (error) {
      responseReturn(response, 500, { error: error.message })
    }
  }
}

module.exports = new authControllers()
