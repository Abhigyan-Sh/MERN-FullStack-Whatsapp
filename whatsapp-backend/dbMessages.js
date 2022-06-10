import mongoose from 'mongoose'

const whatsAppSchema = mongoose.Schema({
    message: String,
    timeStamp: String,
    name: String,
})

export default mongoose.model('messageContent', whatsAppSchema)