var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema({
  collaborators: Array,
  lyrics: String,
  title: String,
  trackNumber: Number,
});

module.exports = mongoose.model('Track', trackSchema);
