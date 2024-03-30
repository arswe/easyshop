const { responseReturn } = require('../exception/response')
const adminModel = require('../models/adminModel')
const bcrypt = require('bcrypt')
const { createToken } = require('../utils/tokenCreate')

class authControllers {
  adminLogin = async (request, response) => {
    const { email, password } = request.body
    try {
      const admin = await adminModel.findOne({ email }).select('+password')

      if (admin) {
        const match = await bcrypt.compare(password, admin.password)
        if (match) {
          const token = await createToken({ id: admin._id, role: admin.role })
          response.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          })
          responseReturn(response, 200, {
            success: 'Login success',
            token,
            role: admin.role,
          })
        } else {
          responseReturn(response, 400, { error: 'Password is incorrect' })
        }
      } else {
        responseReturn(response, 404, { error: 'Email not found' })
      }
    } catch (error) {
      responseReturn(response, 500, { error: error.message })
    }
  }
}

module.exports = new authControllers()
