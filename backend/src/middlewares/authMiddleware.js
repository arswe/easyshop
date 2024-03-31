const jwt = require('jsonwebtoken')

module.exports.authMiddleware = async (request, response, next) => {
  const { accessToken } = request.cookies

  if (!accessToken) {
    return response.status(401).json({ error: 'You need to login first' })
  } else {
    try {
      const decodeToken = jwt.verify(accessToken, process.env.SECRET)
      request.role = decodeToken.role
      request.id = decodeToken.id
      next()
    } catch (error) {
      return response.status(401).json({ error: 'You need to login first' })
    }
  }
}
