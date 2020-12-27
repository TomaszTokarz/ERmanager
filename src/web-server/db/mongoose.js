const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escaperoom-db', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// const admin = new User({
//     name: 'admin',
//     password: 'admin'
// });

// admin.save().then(() => {
// }).catch((error) => {
//     console.log(error);
// });
