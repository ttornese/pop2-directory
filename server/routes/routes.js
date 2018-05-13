import express from 'express';
import bodyParser from 'body-parser';
import Album from '../../models/Album';
import Track from '../../models/Track';

const router = express.Router();

router.get('/', (req, res) => res.render('index'));

router.get('/album', (req, res) => {
  Album.findOne({ 'title': 'POP 2' }, (err, album) => {
    if (err)
      res.send(err);
    res.json(album);
  });
});

router.get('/tracks/:slug', (req, res) => {
  Track.findOne({ 'slug': `${req.params.slug}` }, (err, track) => {
    if (err)
      res.send(err);
    res.json(track);
  });
});

module.exports = router;
