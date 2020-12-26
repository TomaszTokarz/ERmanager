const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test-db', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const User = mongoose.model('User', {
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});

// const garry = new User({
//     name: 'Garry Poker',
//     age: 666
// });

// garry.save().then(() => {
// }).catch((error) => {
//     console.log(error);
// });
