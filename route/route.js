const express = require ('express')
const routes = express.Router()
const { postBlog, readBlogs, oneBlog, updateBlog, deleteBlog, postComment, readComments } = require('../controller/controller')


// This routes does not have id
routes
    .route("/blogs")
    .post(postBlog)
    .get(readBlogs)


// All this routes must pass id channel
routes
    .route("/blogs/:blogId")
    .get(oneBlog)
    .patch(updateBlog)
    .delete(deleteBlog)



// This route for new comment add
routes
    .route("/blogs/:blogId/comment")
    .post(postComment) 



// This routes to fetch comments
routes
    .route("/blogs/:blogId/comment")
    .get(readComments) 

module.exports = routes