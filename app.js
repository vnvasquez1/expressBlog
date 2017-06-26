var express        = require('express'),
    path           = require('path'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    passport       = require('passport'),
    app            = express();

require('./app_api/models/db');
require('./app_api/config/passport');

var routesApi = require('./app_api/routes/index'),
    routes    = require('./app_server/routes/index');


var port = 3000;

app.set('views',path.join(__dirname,'app_server','views'));
app.set('view engine','ejs');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use('/api',routesApi);
app.use('/',routes);


app.listen(port,function(){
  console.log("SERVER HAS STARTED ON PORT"
              + port
              + " at "
              + Date());
});
