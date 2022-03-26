const express = require ('express')
const routes = express.Router()
const { postBlog, readBlogs, oneBlog, updateBlog, deleteBlog } = require('../controller/controller')

routes
    .route("/blogs")
    .post(postBlog)
    .get(readBlogs)


routes
    .route("/blogs/:id")
    .get(oneBlog)
    .patch(updateBlog)
    .delete(deleteBlog)


module.exports = routes