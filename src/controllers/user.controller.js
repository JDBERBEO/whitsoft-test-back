const User = require('../models/user')

module.exports = {
    async signup(req, res) {
      console.log('controller activated')
      try {
        const { body } = req
        const user = await User.create(body)
  
        res.status(201).json('user created')
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
    }
}