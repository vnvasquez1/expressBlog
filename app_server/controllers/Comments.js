var request = require('request');

var apiOptions ={
    server:'http://192.168.1.180:3000'

}

module.exports.getNewCommentPage = function(req,res){
  var requestOptions,path;
  path = '/api'
        + '/articles/'
        + req.params.id;
  requestOptions={
    url: apiOptions.server + path,
    method:"GET",
    json:{}
     
  }
  request(requestOptions,function(error,response,body){
    console.log("body from getNewCommentPage");
    console.log(body);
    res.render('Comments/new',{article:body});
 
  });
 
}

module.exports.addNewComment = function(req,res){
  var requestOptions,path;
  path = '/api'
       + '/articles/'
       + req.params.id
       + '/comments';

  console.log("req.body");
  console.log(req.body);
  requestOptions={
    url: apiOptions.server + path,
    method:"POST",
    json:
    { text: req.body.text } 
    
  }
  request(requestOptions,function(error,response,body){
    res.redirect('/articles/'+req.params.id);

  });

}  

