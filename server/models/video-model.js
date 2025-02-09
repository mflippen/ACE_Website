const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Video = new Schema(
    {
        title: { type: String, required: true },
        description: {type: String, required: false },
        link: { type: String, required: true },
        tags: { type: [String], required: true }
    },
    { timestamps: true },
)

Video.index({'$**': 'text'});

module.exports = mongoose.model('video', Video)