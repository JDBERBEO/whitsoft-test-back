require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connect = require('./db')
const userRouter = require('./routes/user.routes')



const port = process.env.PORT || 8000
const app = express()
connect()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/user', userRouter)


app.listen(8000, () => {
    console.log(`app running at http://localhost:${port}`)
})