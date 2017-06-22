var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title:String,
  text:String
});

module.exports = mongoose.model('Articles',articleSchema);
