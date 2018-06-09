const bodyParser = require('body-parser');
const express = require('express');
const db = require('./dao');

var app = express();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
});

app.use(bodyParser.json());

db.connect();

var mountApiRoutes = require("./modules").mountApiRoutes;

mountApiRoutes(app);


app.get('*',function(request,response){
    response.send('not found');
});

app.listen(process.env.PORT || 3000,function(){
    console.log('app started');
})