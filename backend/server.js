const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8080
const cors = require('cors')

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/boards', require('./routes/boardRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// overwrite default express errorhandler
app.use(errorHandler)

// Serve the frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname,'../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

// for cyclic hosting. make sure db is connected first, then listen
connectDB().then(() => {
    app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
})