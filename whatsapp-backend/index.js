// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
// app config
const app = express()
const pusher = new Pusher({
    appId: "1422056",
    key: "d887d95278223676af1f",
    secret: "67c8d1bfabc8f58635fa",
    cluster: "ap2",
    useTLS: true
});
// middleware
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})
// DB config
const connection_string = 'mongodb+srv://pryansh:ikEHvLkMAsL1wSGx@cluster0.ih8bz0d.mongodb.net/MERN-FULLSTACK-WHATSAPP?retryWrites=true&w=majority'
mongoose.connect(connection_string, err => {
    if (err) throw err
})

const db = mongoose.connection
db.once('open', () => {
    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()
    changeStream.on('change', (change) => {
        console.log(change)
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted', 
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timeStamp: messageDetails.timeStamp,
                received: messageDetails.received
            }
        )} else {
            console.log('Error Triggering Pusher!')
        }
    })
})

// ????
// api routes
app.get('/', (req, res) => res.status(200).send('Hi people'))
app.post('/api/v1/message/new', (req, res) => { // post request on this url, then do this
    const newMessage = req.body
    
    Messages.create(newMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
    /* first parameter to create, second one so as we can see it */
})
app.get('/api/v1/message/sync', (req, res) => {
    // Messages.find((err, data) => {
    Messages.find({},(err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
// listen 
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server is listening through ${port}`))