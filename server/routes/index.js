var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendFile('../public/index.html');
  //res.sendFile('../../.tmp/server/index.html');
});

module.exports = router;
