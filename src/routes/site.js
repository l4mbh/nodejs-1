let express = require('express');
let router = express.Router();

let siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index)



module.exports = router;