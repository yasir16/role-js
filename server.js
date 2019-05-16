var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())


app.use(cors())


require('./app/router/router')(app);

var server = app.listen(443, function(){
    var host = server.address().address
    var port = server.address().port


    console.log("App Listening at https://%s:%s", host, port)

    
})