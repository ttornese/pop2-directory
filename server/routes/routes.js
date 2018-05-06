import express from 'express';
import bodyParser from 'body-parser';
import Track from '../../models/Track';

const router = express.Router();

router.get('/', (req, res) => res.render('index'));

router.get('/tracks', (req, res) => {
  Track.find({}, (err, tracks) => {
    if (err)
      res.send(err);
    res.json(tracks);
  });
});

module.exports = router;
