var mongoose = require('mongoose');

var Articles = mongoose.model('Article');
var Comments = mongoose.model('Comment');

module.exports.postComment = function(req,res){
  console.log("req.body from post Comment in API");
  console.log(req.body);
  Articles
    .findById(req.params.id,function(err,result){
      if(err){
        console.log(err);   
      }else{
        Comments
          .create({text:req.body.text},function(err,comment){
            if(err){
              console.log(err);
            }else{
              result.comments.push(comment);
              result.save();
              res.json(comment);
            }  
          });
      }  
    });
}
