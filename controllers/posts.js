const {Post} = require('../models/post');
const {Comment} = require('../models/post')

module.exports = {
    index,
    commentsIndex,
    create,
    createComment,
    delete: deleteOne,
    deleteComment
}



async function index(req, res) {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}


async function commentsIndex(req, res) {
    try {
        const comments = await Comment.find();
        postComments = [];
        comments.map(comment => {
            if(comment.postId === req.params.id) postComments.push(comment);
        })
        res.status(200).json(postComments);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function create(req, res) {
    req.body.user = req.user._id;
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
}

async function createComment(req, res) {
    console.log('uoi mane it')
    req.body.user = req.user._id;
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch(err) {
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    try{
        const deletedPost = await Post.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedPost);
    } catch(err){
        res.status(500).json(err);
    }
}

async function deleteComment(req, res) {
    try {
        const deletedComment = await Comment.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedComment)
    } catch(err) {
        res.status(500).json(err);
    }
}