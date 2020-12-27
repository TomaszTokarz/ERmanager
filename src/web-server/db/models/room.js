const mongoose = require('mongoose');

const Room = mongoose.model('Room', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = Room;
