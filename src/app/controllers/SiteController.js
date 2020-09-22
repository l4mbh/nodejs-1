const Post = require('../models/Post')

class SiteController {

    index(req, res) {
        Post.find({}, (err, posts) => {
            if (!err) {
                res.render('home', {
                    posts: posts
                });
            } else {
                res.json({
                    err: 'There was an error !!!',
                })
            }
        })
        // return res.render('home');
    }

    search(req, res) {
        return res.render('search');
    }
}

module.exports = new SiteController;