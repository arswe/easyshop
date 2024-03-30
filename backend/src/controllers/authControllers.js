class authControllers {
  adminLogin(req, res) {
    res.send('Admin Login')
  }
}

module.exports = new authControllers()
