const mongoose = require ('mongoose')
const Schema = mongoose.Schema


// The shape of the blog
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

// Capture the blog Shape/model
const blogModel = mongoose.model("Blogs", blogSchema)


// The shape of the comment
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


// Capture the comment shape/model
const commentModel = mongoose.model('comment', commentSchema)

module.exports = {
    blogModel,
    commentModel
}