const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const EventSchema = new Schema({
    title: String,
    description: String,
    dates: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Event = mongoose.model('Event', EventSchema);

module.exports =  Event;