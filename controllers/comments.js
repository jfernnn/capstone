const Post = require('../models/post');

module.exports = {
    createComment,
    deleteComment
}

async function createComment(req, res) {
    const newComment = {
        comment: req.body.comment,
        userName: req.body.userName,
    }
    try {
        const post = await Post.findById(req.body.postId)
        post.comments.push(newComment);
        post.save();
        res.status(201).json(post);
    } catch(err) {
        res.status(500).json(err)
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