var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema(
  {
    title:String,
    text:String,
    comments:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Comment'
    }]
  }

);

//module.exports = 
mongoose.model('Article',articleSchema);
