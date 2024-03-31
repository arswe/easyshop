const jwt = require('jsonwebtoken')

module.exports.authMiddleware = async (request, response, next) => {
  const { accessToken } = request.cookies
  
}
