const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    comment: String,
    postId: String,
    userName: String
}, {
    timestamps: true
});

const commentModel = mongoose.model('Comment', commentSchema);

const postSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    album: {
        type: String
    },
    artist: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: {
        type: String
    },
    comments: [commentSchema],
},  { 
    timestamps: true 
});

const postModel = mongoose.model('Post', postSchema);


module.exports = {
    'Post': postModel,
    'Comment': commentModel

}