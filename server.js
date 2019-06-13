const getFact = require('./getFact')
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


const io = require('socket.io-client')
socket = io.connect('http://192.168.0.63:5001', {transports : ['websocket']});


socket.emit('join_room','room_ups')
socket.emit('join_room','room_rectifier')
socket.emit('join_room','room_pdu')
socket.emit('join_room','room_battery')
socket.emit('join_room','room_aircond')
socket.emit('join_room','room_gpio_monitor')
socket.emit('join_room','room_sensor')

socket.on ('connect', function() { console.log("socket Connected");});



socket.on('pdu_datas', async (datas) => {                   
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, 1)
})

socket.on('battery_datas', async (datas) => {               
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, 2)
    // await updateValue(data,Latest_battery,Log_battery)
})

socket.on('rectifier_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, 3)
    // await updateValue(data,Latest_rectifier,Log_rectifier)
})

socket.on('ups_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, 4)
    // await updateValue(data,Latest_ups,Log_ups)
})

socket.on('aircond_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, 5)
    // await updateValue(data,Latest_aircond,Log_aircond)
})

socket.on('sensor_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, 6)
    // await updateValue(data,Latest_sensor,Log_sensor)
})

socket.on('gpio_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, 7)
    // await updateValue(data,Latest_io,Log_io)
})

socket.on('control_datas', async(datas) => {
    var data =JSON.parse(datas);
    getFact.newValue(data.newValue, 8)
    // await controlValue(data,Latest_io,Log_io,Latest_pdu,Log_pdu)
})





const Action1 = db.action1_backend;
const Sequelize = require('sequelize');
const schedule = require('node-schedule');





// running = (req, res, next) =>{
//     Action1.fin
// }


Action1.findAll({

}).then(data =>{
    console.log(data[0].time)

    for(var i=0; i<data.length; i++){
        var a = '*'
        var b = '*'
        var c = '*'
        var d = '*'
        var e = '*'
        var f = '*'

        var time = data[i].time;
        yas = time.split(':')
        console.log(yas[0]+" "+yas[1]+" "+yas[2])



        var date = data[i].date

        

        // var j = schedule.scheduleJob(a+' '+b+' '+c+' '+d+' '+e+' '+f, function(){
        //     console.log('The answer to life, the universe, and everything!'+ jan+':'+min+':'+sec);
        //   });

    }
})

