var express = require('express'),
    ctrlArticles = require('../controllers/Articles'),
    routes  = express.Router();

function test(req,res,next){
  console.log("Passing through Server routes");
  return next();  
}


routes.get('/articles/new',ctrlArticles.getNewPage);
routes.post('/articles',ctrlArticles.postArticle);
routes.get('/articles/:id',ctrlArticles.getShowPage);
routes.get('/articles',ctrlArticles.getArticlesPage);

routes.get('/articles/:id/edit',ctrlArticles.getEditArticlePage);

routes.put('/articles/:id',test,ctrlArticles.updateArticle);

routes.delete('/articles/:id',test,ctrlArticles.deleteArticle);

module.exports = routes;
