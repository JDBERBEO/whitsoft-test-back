const User = require('../models/user')

module.exports = {
  async signup(req, res) {

    try {
      const { body } = req

      await User.create(body)

      res.status(201).json('user created')
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
}