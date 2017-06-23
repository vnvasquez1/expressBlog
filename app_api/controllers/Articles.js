//expressBlog
var Articles = require('../models/Article');
var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.1.181/myBlogDB');

var sendJSONResponse= function(res,status,content){

   console.log('status');
   console.log(status);
   console.log(content.message)

   res.status(status);
   res.json(content);
  }

module.exports.postArticle = function(req,res){
  Articles
    .create(req.body,function(err,result){
    if(err){
      console.log(err); 
    }else{
      sendJSONResponse(res,200,result);  
    } 

  });
   
}

module.exports.getArticle = function(req,res){
  console.log("retrieving single article "
              + req.params.id
              + " from database");

  if(req.params && req.params.id){
    Articles
      .findById(req.params.id)
      .populate('comments')
      .exec(function(err,result){
      if(!result){
          sendJSONResponse(res,404,{"message":"Article Not Found!"});
          return;
      }else if(err){
        console.log("error");
        console.log(err); 
        sendJSONResponse(res,404,err);
        return;
      }
      console.log(result);
      sendJSONResponse(res,200,result);    
    });
  }else{
     sendJSONResponse(res,404,{"message":"no id"});
  }
}

module.exports.getArticles = function(req,res){
  console.log("retrieving all articles from database");

  Articles
    .find({},function(err,results){
      if(!results){
        sendJSONResponse(res,404,{'message':'No Articles Found'});  
        return;
      }else if(err){
        console.log("err"); 
        console.log(err); 
        sendJSONResponse(res,404,err);
        return;
      }  
      console.log(results);
      sendJSONResponse(res,200,results); 
      
  });
}

module.exports.updateArticle = function(req,res){
  console.log("updating article "
              + req.params.id
              + " from database");
  if(req.params && req.params.id){
    Articles
      .findByIdAndUpdate(req.params.id,req.body,function(err,result){
      if(!result){
        sendJSONResponse(res,404,{'message':'No Article Found!'});  
        return;
      }else if(err){
        console.log("error"); 
        console.log(err); 
        sendJSONResponse(res,404,err);
        return;
      }
      console.log("result");
      console.log(result);
      sendJSONResponse(res,200,result); 

    });
  }else{
  
    sendJSONResponse(res,404,{'message':'no id'});  
  }   
}

module.exports.deleteArticle = function(req,res){
  console.log("deleting article "
              + req.params.id
              + " from database");

  if(req.params && req.params.id){
    Articles
      .findByIdAndRemove(req.params.id,function(err,result){
         if(!result){
           sendJSONResponse(res,404,{'message':'No Article Found!'});  
           return;
         }else if(err){
           console.log(err); 
           console.log(err); 
           sendJSONresponse(res,404,err);
           return;
         }
         sendJSONResponse(res,200,result); 

    });
  }else{
    sendJSONResponse(res,404, {'message':'no id'});    
  } 
}
