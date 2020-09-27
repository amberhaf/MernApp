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
         $or: [{ $and: [{ biology: req.body.biology}, {biology: true}]}, { $and: [{chemistry: req.body.chemistry}, {chemistry: true}]}, { $and: [{physics: req.body.physics}, {physics: true}]}, { $and: [{computerScience: req.body.computerScience}, {computerScience: true}]},{ $and: [{engineering: req.body.engineering}, {engineering: true}]},{ $and: [{maths: req.body.maths}, {maths: true}]}]
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