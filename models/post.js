const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    comment: String,
    user: String
}, {
    timestamps: true
});

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

module.exports = mongoose.model('Post', postSchema);