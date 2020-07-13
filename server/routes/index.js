var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const domain = process.env.ENV === 'development' ? process.env.DEV_URL : '';
  res.render('index', { title: 'Express', domain });
});

module.exports = router;
