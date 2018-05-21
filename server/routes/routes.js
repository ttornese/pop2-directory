import express from 'express';
import bodyParser from 'body-parser';
import Album from '../../models/Album';
import Track from '../../models/Track';

import path from 'path';
const router = express.Router();

router.get('/api/album', (req, res) => {
  Album.findOne({ 'title': 'POP 2' }, (err, album) => {
    if (err)
      res.send(err);
    res.json(album);
  });
});

router.get('/api/tracks/:slug', (req, res) => {
  Track.findOne({ 'slug': `${req.params.slug}` }, (err, track) => {
    if (err)
      res.send(err);
    res.json(track);
  });
});

module.exports = router;
