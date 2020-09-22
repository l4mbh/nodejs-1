const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    name: {
        type: String,
        default: 'post',
        maxLength: 255
    },
    description: {
        type: String,
        maxLength: 600
    },
    img: {
        type: String,
        default: 'https://via.placeholder.com/150'
    }

})

module.exports = mongoose.model('Post', Post)