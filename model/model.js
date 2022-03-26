const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comment:[ {
        type: Schema.Types.ObjectId,
        required: true
    }]
}, {timestamps: true})

const blogModel = mongoose.model("Blogs", blogSchema)

module.exports = blogModel