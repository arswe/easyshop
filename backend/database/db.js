const mongoose = require('mongoose')
const color = require('colors')

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log(color.rainbow('Easy Shop Database Connected..').bold)
  } catch (error) {
    console.log(color.red.bold(error.message))
  }
}
