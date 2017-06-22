var request = require('request');

var apiOptions ={
    server:'http://192.168.1.180:3000'

}

module.exports.postArticle = function(req,res){
  
  var path,requestOptions;

  path = '/api'
       + '/articles';
  requestOptions={
    url: apiOptions.server + path,
    method:"POST",
    json:
      req.body  
    
  }
  
  request(requestOptions,function(error,response,body){
    console.log("body:");
    console.log(body);
    res.redirect('/articles/'+body._id);    
  });
}

module.exports.getArticlesPage = function(req,res){
  
  var path,requestOptions;

  path = '/api'
       + '/articles';
  requestOptions={
    url: apiOptions.server + path,
    method:"GET",
    json:{}
  }

  request(requestOptions,function(error,response,body){
    res.render('articles/index',{blogs:body});    
  });
}

module.exports.getNewPage = function(req,res){
  res.render('articles/new');   
}

module.exports.getShowPage = function(req,res){
  var path,requestOptions;

  path = '/api'
       + '/articles'
       + '/'
       + req.params.id 
  requestOptions={
    url: apiOptions.server + path,
    method:"GET",
    json:{}
  }
  request(requestOptions,function(error,response,body){
    res.render('articles/show',{blog:body});   
  })
}

module.exports.getEditArticlePage = function(req,res){
  var path,requestOptions;
  path = '/api'
       + '/articles'
       + '/'
       + req.params.id;
  requestOptions={
    url: apiOptions.server + path,
    method:"GET",
    json:{}
  }
  request(requestOptions,function(error,response,body){
    res.render('articles/edit',{article:body});   
  })
}




module.exports.updateArticle = function(req,res){
  var path,requestOptions;
  path = '/api'
       + '/articles'
       + '/'
       + req.params.id ;
  requestOptions={
    url: apiOptions.server + path,
    method:"PUT",
    json:{}
  }
  request(requestOptions,function(error,response,body){
    res.redirect('/articles/'+body._id);   
  })
}

module.exports.deleteArticle = function(req,res){
var path,requestOptions;
  console.log("hi");
  path = '/api'
       + '/articles'
       + '/'
       + req.params.id 
  requestOptions={
    url: apiOptions.server + path,
    method:"DELETE",
    json:{}
  }
  request(requestOptions,function(error,response,body){
    res.redirect('/articles');   
  })
}
