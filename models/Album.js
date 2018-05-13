import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  artist: String,
  title: String,
  tracks: Array,
});

const Album = mongoose.model('Album', albumSchema);

export default Album;
