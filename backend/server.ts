import express from 'express'
// const dotenv = require('dotenv').config()
// const port = process.env.PORT || 5000
const port = 5000

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/api/boards', (req, res) => {
    res.status(200).json({message: "Get Boards"})
})

app.listen(port, () => console.log(`server started on port ${port}`))