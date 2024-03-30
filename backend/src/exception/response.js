module.exports.responseReturn = (response, code, data) => {
  return response.status(code).json(data)
}
