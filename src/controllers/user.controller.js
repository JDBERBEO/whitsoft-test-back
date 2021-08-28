const User = require('../models/user')

module.exports = {
    async signup(req, res) {
      console.log('controller activated')
      try {
        const { body } = req
        console.log('body', body)
        const user = await User.create(body)
  
        res.status(201).json('user created')
      } catch (err) {
        console.log(err.message)
        res.status(400).json({ message: err.message })
      }
    }
}