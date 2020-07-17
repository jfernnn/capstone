const Post = require('../models/post');

module.exports = {
    index,
    create,
}

async function index(req, res) {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function create(req, res) {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
}