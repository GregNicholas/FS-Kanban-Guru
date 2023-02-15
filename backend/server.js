const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8080
const cors = require('cors')
console.log("wtfport", port)

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/boards', require('./routes/boardRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// overwrite default express errorhandler
app.use(errorHandler)


app.listen(port, () => console.log(`server started on port ${port}`))