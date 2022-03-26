const {blogModel, commentModel} = require('../model/model')

const postBlog = async (req, res)=>{
    try {

        const data ={
            title: req.body.title,
            content: req.body.content
        }

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

const postComment = async (req, res) =>{
    try {

        const blog = await blogModel.findById( req.params.id )
        const comment = new commentModel(req.body)
        comment.poster = blog
        comment.save()
        blog.commentUnderBlog.push(comment)
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


const readBlogs = async (req, res) =>{
    try {
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


const readComments = async (req, res) =>{
    try {

        const blog = await blogModel.findById( req.params.id ).populate('commentUnderBlog')
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


const oneBlog = async (req, res) =>{
    try {

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

const updateBlog = async (req, res) =>{
    try {

        const data ={
            title: req.body.title,
            content: req.body.content
        }

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


const deleteBlog = async (req, res) =>{
    try {

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