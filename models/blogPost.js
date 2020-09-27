const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    description: String,
    biology: Boolean,
    chemistry: Boolean,
    physics: Boolean,   
    maths: Boolean,
    computerScience: Boolean,
    engineering: Boolean,

    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports =  BlogPost;