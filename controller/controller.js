const {blogModel, commentModel} = require('../model/model')

// Create blog
const postBlog = async (req, res)=>{
    try {

        // Capturing the model shape
        const data ={
            title: req.body.title,
            content: req.body.content
        }

        // The create function to adding blogs
        const blog = await blogModel.create ( data )
        res.status(201).json({
            status: `Success`,
            data: blog
        })
    } catch (error) {
        res.status(500).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Posting a comment under a blog
const postComment = async (req, res) =>{
    try {

        // Capturing a blog id
        const blog = await blogModel.findById( req.params.blogId )
        // Instatiate from the comment
        const comment = new commentModel(req.body)
        // Tighing the comment to a blog (id)
        comment.poster = blog
        // save the comment
        comment.save()
        // Pushing the comment to the targeted blog(id)
        blog.commentUnderBlog.push(comment)
        // Save the blog
        blog.save()
        res.status(200).json({
            status: `Success`,
            data: {
                comment
            }
        })

        
    } catch (error) {
        res.status(500).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Read all the blogs
const readBlogs = async (req, res) =>{
    try {

        // Find method to read all blogs
        const blog = await blogModel.find()
        res.status(200).json({
            status: `All Blogs`,
            data: {
                blog
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Reading comments
const readComments = async (req, res) =>{
    try {


        // Capture each of the blogs and populate the comments tied to it
        const blog = await blogModel.findById( req.params.blogId ).populate('commentUnderBlog')
        res.status(200).json({
            status: `Thes are comments`,
            data: {
                blog
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Read one blog
const oneBlog = async (req, res) =>{
    try {

        // Capturing on of the blogs with the method
        const blog = await blogModel.findById( req.params.id )
        res.status(200).json({
            status: `One Blog`,
            data: {
                blog
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Update one blog
const updateBlog = async (req, res) =>{
    try {


        // Capturing the shape of the schema
        const data ={
            title: req.body.title,
            content: req.body.content
        }


        // Method capture the blog id and update
        const blog = await blogModel.findByIdAndUpdate( req.params.id, data )
        res.status(200).json({
            status: `Updated`,
            data: {
                blog
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Delete one blog
const deleteBlog = async (req, res) =>{
    try {


        // Capture the blog id
        const blog = await blogModel.findByIdAndRemove( req.params.id )
        res.status(200).json({
            status: `Removed`
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}

module.exports = {
    postBlog,
    readBlogs,
    oneBlog,
    updateBlog,
    deleteBlog,
    postComment,
    readComments
}