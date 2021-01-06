const mongoose = require('mongoose');

const Room = mongoose.model('Room', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    id: {
        type: String,
        required: true,
        trim: true,
    },
    path: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        required: true,
        trim: true,
    },
    startTime: {
        type: Number,
        required: false,
        trim: true,
    },
    endTime: {
        type: Number,
        required: false,
        trim: true,
    },
});

module.exports = Room;
