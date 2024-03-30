const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, default: 'admin' },
})

module.exports = model('Admins', adminSchema)
