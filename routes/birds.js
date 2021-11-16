var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('birds root');
});

router.get('/about', function(req, res, next) {
    res.send('about  birds');
});

module.exports = router;
