const { Schema, model } = require('mongoose')


const peopleSchema = Schema({
    name: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    description: {
        type: String,
        required: [true, 'description obligatorio']
    },
    category: {
        type: String,
        required: [true, 'category obligatorio']
    },
    picture: {
        type: String,
        required: [true, 'picture obligatorio']
    },
    lastUpdated: {
        type: Date,
        required: [true, 'lastUpdated obligatorio'],
        default: Date.now
    },
    votes: {
        type: {
            positive: Number,
            negative: Number
        },
        required: [true, 'lastUpdated obligatorio']
    }
})

module.exports = model('People', peopleSchema);