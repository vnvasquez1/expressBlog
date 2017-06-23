var Comments = require('../models/Comment');
var Articles = require('../models/Article');
var mongoose = require('mongoose');

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
