const getFact = require('./getFact')
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var python = require('python-shell');
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
    getFact.newValue(data.newValue, "PDU")
})

socket.on('battery_datas', async (datas) => {               
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, "Battery")

    // await updateValue(data,Latest_battery,Log_battery)
})

socket.on('rectifier_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, "Rectifier")
    // await updateValue(data,Latest_rectifier,Log_rectifier)
})

socket.on('ups_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, "UPS")
    // await updateValue(data,Latest_ups,Log_ups)
})

socket.on('aircond_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, "Aircond")
    // await updateValue(data,Latest_aircond,Log_aircond)
})

socket.on('sensor_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, "Sensor")
    // await updateValue(data,Latest_sensor,Log_sensor)
})

socket.on('gpio_datas', async (datas) => {
    var data = JSON.parse(datas);
    getFact.newValue(data.newValue, "GPIO")
    // await updateValue(data,Latest_io,Log_io)
})

socket.on('control_datas', async(datas) => {
    var data =JSON.parse(datas);
    getFact.newValue(data.newValue, "Control")
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
    // console.log(data[0].time)

    for(var i=0; i<data.length; i++){
        var a = function(date){
            if(date){
                return date
            }else{return '*'}
        }
        var b = function(date){
            if(date){
                return date
            }else{return '*'}
        }
        var c = function(date){
            if(date){
                return date
            }else{return '*'}
        }
        var d = function(date){
            if(date){
                return date
            }else{return '*'}
        }
        var e = function(date){
            if(date){
                return date
            }else{return '*'}
        }
        var f = function(date){
            if(date){
                return date
            }else{return '*'}
        }

        

        var time = data[i].time;
        yas = time.split(':')
        
        console.log(a(yas[0])+" "+b(yas[1])+" "+c(yas[2]))
        
        var date = data[i].date;
        say = date.split(':')
        

        console.log(d(say[0])+" "+e(say[1])+" "+f(say[2]))

        

        var panjang = JSON.parse(data[i].action);
        // console.log(panjang.length);
        var j = schedule.scheduleJob(a+' '+b+' '+c+' '+d+' '+e+' '+f, function(){
            // console.log('The answer to life, the universe, and everything!'+ jan+':'+min+':'+sec);

            for(var i = 0; i<panjang.length; i++){
                if (panjang[i].type === "Control"){
                    let options = {
                        mode: 'text',
                        // pythonPath: 'path/to/python',
                        // pythonOptions: ['-u'], // get print results in real-time
                        scriptPath: 'app/controller/dummy_pdu_1',
                        args: ['--eq_type', panjang[i].device_type, '--eq_id', panjang[i].id ,'--varname', panjang[i].var_name  , '--value', panjang[i].value, '--alert', panjang[i].alert]
                    };

                    python.PythonShell.run('Control_Equipment.py', options, function (err, data) {
                        if (err) throw err;
                        console.log(data);
                
                
                
                    });
                }else if(panjang[i].type === "alert"){
                    let options = {
                        mode: 'text',
                        scriptPath: 'app/controller/dummy_pdu_1',
                        args: ['--value', panjang[i].value]
                    };

                    python.PythonShell.run('Control_Equipment.py', options, function (err, data){
                        if (err) throw err;
                        console.log(data)
                    })

                    //console.log("SABAR YAAA MASIH DI USAHAKAN ")
                }
            }
          });

    }
})





///Role

// const engine = require('./role1.js')
// const databas = require('./fromdatabase.js')

var role = db.role_backend;


// engine.createRule()


const fs = require('fs');

let dataFact = fs.readFileSync('allFact.json');
let bisa = JSON.parse(dataFact);







let Engine = require('../role-js/node_modules/json-rules-engine/dist').Engine;
let engine = new Engine()


// exports.facts = ()=>{

// }
role.findAll({attributes : ['roleallcondition']}).then(a=>{
    a.map(data=> {
        // console.log(data.roleallcondition.conditions)
        var aw = JSON.parse(data.roleallcondition)
        // console.log(data.roleallcondition)
        // console.log(aw.conditions.all)
        // var arr= []
        // arr.push(aw)

        engine.addRule(aw)
        


        let facts = 
            {
                humidity_5_PDU : 112,
                humidity_4_PDU: 12,
                load_3_UPS : 12,
                inlet_power_5_PDU : 0,
                outlet_1_current_5_PDU : 0,
                temperature_5_PDU : 23
            }


        engine.run(bisa).then(events => {
                events.map(event => console.log(event.params.action_id))
        }).catch(console.log)
    })

})