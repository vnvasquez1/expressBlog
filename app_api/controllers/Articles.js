//expressBlog
var Articles = require('../models/Article');
var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.1.181/myBlogDB');


module.exports.postArticle = function(req,res){
  Articles.create(req.body,function(err,result){
    if(err){
      console.log(err); 
    }else{
      res.json(result);  
    } 

  });
   
}

module.exports.getArticle = function(req,res){
  Articles.findById(req.params.id,function(err,result){
    if(err){
      console.log(err); 

    }else{
      res.json(result);  

    }  
  });
   
}

module.exports.getArticles = function(req,res){
  Articles.find({},function(err,results){
    if(err){
      console.log(err); 

    }else{
      res.json(results);  

    }  
  });
   
}

module.exports.updateArticle = function(req,res){
  Articles.findByIdAndUpdate(req.params.id,req.body,function(err,result){
    if(err){
      console.log(err); 
    }else{
      res.json(result);  
    }
        

  });
   
}
module.exports.deleteArticle = function(req,res){
  Articles.findByIdAndRemove(req.params.id,function(err,result){
    if(err){
      console.log(err); 
    }else{
      res.json(result);  
    }
        

  });
   
}
