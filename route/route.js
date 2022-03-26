const express = require ('express')
const routes = express.Router()
const { postBlog, readBlogs, oneBlog, updateBlog, deleteBlog, postComment, readComments } = require('../controller/controller')

routes
    .route("/blogs")
    .post(postBlog)
    .get(readBlogs)


routes
    .route("/blogs/:id")
    .get(oneBlog)
    .patch(updateBlog)
    .delete(deleteBlog)


routes
    .route("/blogs/:id/comment")
    .post(postComment) 


routes
    .route("/blogs/:id/comments")
    .get(readComments) 

module.exports = routes