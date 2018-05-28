const bodyParser = require('body-parser');
const express = require('express');
const db = require('./dao');

var app = express();

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