import mongoose from 'mongoose'

const whatsAppSchema = mongoose.Schema({
    message: String,
    timeStamp: String,
    name: String,
    received: Boolean
})

export default mongoose.model('messageContent', whatsAppSchema)
/* 
the name with which it will appear on mongodb i.e. collection name.

 */