const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/lisme_blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('\n*MongoDB : Connected to database successfully\n');
    } catch (error) {
        console.log('\n*MongoDB : Failed to connect to database\n');
    }
}

module.exports = {
    connect
};