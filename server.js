var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())


app.use(cors())

const db = require('./app/config/db.config');

require('./app/router/router')(app);

var server = app.listen(1312, function(){
    var host = server.address().address
    var port = server.address().port


    console.log("App Listening at https://%s:%s", host, port)


})

//force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// //   initial();   
// });





