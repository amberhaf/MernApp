const express = require('express');

const router = express.Router();
const BlogPost = require('../models/blogPost');
const Event = require('../models/event');
// Routes
router.get('/', (req, res) => {

    BlogPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.post('/match', (req, res) => {
    BlogPost.find({
         $or: [{ $and: [{ spring: req.body.spring}, {spring: true}]}, { $and: [{summer: req.body.summer}, {summer: true}]}, { $and: [{autumn: req.body.autumn}, {autumn: true}]}, { $and: [{activity: req.body.activity}, {activity: true}]},{ $and: [{entertainment: req.body.entertainment}, {autumn: true}]},{ $and: [{winter: req.body.winter}, {winter: true}]}]
        })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;
    const newBlogPost = new BlogPost(data);
    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

router.get('/event', (req, res) => {

    Event.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/matchEvent', (req, res) => {
    Event.find({
        })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;