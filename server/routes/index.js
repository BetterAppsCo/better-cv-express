const express = require('express');
const router = express.Router();

const indexHandler = (req, res, next) => {
  const domain = process.env.NODE_ENV === 'development' ? process.env.DEV_URL : '';
  res.render('index', { domain });
};

router.get('/', indexHandler);
router.get('/home', indexHandler);

module.exports = router;
