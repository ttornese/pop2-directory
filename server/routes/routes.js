var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Track = require('../../models/Track');

router.get('/', function(req, res){
  res.render('index')
});

router.get('/tracks', function(req, res) {
  Track.find({}, function(err, tracks) {
    if (err)
      res.send(err);
    res.json(tracks);
  });
});

module.exports = router;
