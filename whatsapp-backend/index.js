// importing
import express from 'express'
import mongoose from 'mongoose'
// app config
const app = express()
// middleware
// DB config
const connection_string = 'mongodb+srv://pryansh:ikEHvLkMAsL1wSGx@cluster0.ih8bz0d.mongodb.net/MERN-FULLSTACK-WHATSAPP?retryWrites=true&w=majority'
mongoose.connect(connection_string, err => {
    if (err) throw err
})
// ????
// api routes
app.get('/', (req, res) => res.status(200).send('Hi people'))
// listen
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server is listening through ${port}`))