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
    commentUnderBlog:[ {
        type: Schema.Types.ObjectId,
        required: true
    }]
}, {timestamps: true})

const blogModel = mongoose.model("Blogs", blogSchema)

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    poster: {
        type: Schema.Types.ObjectId,
        ref: 'Blogs'
    }
}, {timestamps: true})

const commentModel = mongoose.model('comment', commentSchema)

module.exports = {
    blogModel,
    commentModel
}