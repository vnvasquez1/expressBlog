var express  = require('express'),
    artCtrl  = require('../controllers/Articles'),
    comCtrl  = require('../controllers/Comments'),
    ctrlAuth = require('../controllers/authentication'),
    routes   = express.Router();

function test(req,res,next){
  console.log("Passing through api!!!");
  return next();  
}

routes.post('/articles',test,artCtrl.postArticle);
routes.get('/articles/:id',artCtrl.getArticle);
routes.get('/articles',artCtrl.getArticles);
routes.put('/articles/:id',artCtrl.updateArticle);
routes.delete('/articles/:id',artCtrl.deleteArticle);

routes.post('/articles/:id/comments',test,comCtrl.postComment);

routes.post('/register',ctrlAuth.register);
routes.post('/login',ctrlAuth.login);

module.exports = routes;
