let express = require('express');
let router = express.Router();

let newsController = require('../app/controllers/NewsController');

router.use('/', newsController.index)


module.exports = router;