import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    selectedImage: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: new Date()
    }
})

const EventMessage = mongoose.model('eventMessage', eventSchema)

export default EventMessage;