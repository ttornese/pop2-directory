import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const trackSchema = new Schema({
  collaborators: Array,
  lyrics: String,
  title: String,
  trackNumber: Number,
});

const Track = mongoose.model('Track', trackSchema);

export default Track;
