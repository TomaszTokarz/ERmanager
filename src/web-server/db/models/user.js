const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        token: {
            type: String,
        },
    }),
);

module.exports = User;
