const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
},  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);