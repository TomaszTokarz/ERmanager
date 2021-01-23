const mongoose = require('mongoose');

const Room = mongoose.model(
    'Room',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
        },
        path: {
            type: String,
            required: true,
            trim: true,
        },
        hints: {
            type: Array,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        background: {
            type: String,
            required: true,
        },
        fontColor: {
            type: String,
            required: true,
        },
        startTime: {
            type: Number,
            required: false,
        },
        endTime: {
            type: Number,
            required: false,
        },
    }),
);

module.exports = Room;
