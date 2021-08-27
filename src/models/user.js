const { model, Schema, models } = require('mongoose')

const userSchema = new Schema(
    {
      name: {
        type: String,
        trim: true,
        required: [true, 'name is required'],
      },
      country: {
        type: String,
      }
    }      
  )
  
  const User = model('User', userSchema)
  
  module.exports = User