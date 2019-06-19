// // import { TIME, DATE } from "sequelize/types";

// // // const fs = require('fs')


// // // var raw = fs.readFileSync('allFact.json');
// // // rew1 = JSON.parse(raw)
// // // rew1["apas"]=23;

// // // baru =  JSON.stringify(rew1)

// // // fs.writeFile('allFact.json',baru, err=>{
// // //     if(err){
// // //         console.log('Error : ', err)
// // //     } else {
// // //         console.log('Succesfully add file')
// // //     }
// // // });

// // const schedule = require('node-schedule');

// // let startTime = new Date(Date.now() + 5000);
// // let endTime = new Date(startTime.getTime() + 5000);

// // // let j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
// // //   console.log('Time for tea!');
// // // });


// // let k = schedule.scheduleJob('*/1 * * * * *', function(){
// //     console.log('Time for sprite!');
// // });

// // // var g  = [];

// // // g.push(j);
// // // g.push(k);






// // var time = new Date;
// // // time.setTime('2015-05-16T05:50:06');
// // // var time = "10:54:07";

// // var seconds = time.getSeconds();
// // var minutes = time.getMinutes();
// // var hour = time.getHours();

// // console.log(seconds)
// // console.log(minutes)
// // console.log(hour)

// // var dateString = "2010-03-01T00:00:00-08:00";
// // var pattern = "yyyy-MM-dd'T'HH:mm:ssZ";
// // DateTimeFormatter dtf = DateTimeFormat.forPattern(pattern);
// // DateTime dateTime = dtf.parseDateTime(dateString);
// // System.out.println(dateTime);


// // Intl = require("intl")
// // const df = new Intl.DateTimeFormat('de', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'});
// // console.log(df.format(new Date("2018-08-13T04:00:00.000Z")));


// // var Date = require("datejs")
// // console.log(Date.today())


// // var birthday = new Date('2018-08-13T04:04:40.000');
// // var test = birthday.setUTCHours()
// // console.log(test);

// // function getDateTime() {

// //     var date = new Date();

// //     var hour = date.getHours();
// //     hour = (hour < 10 ? "0" : "") + hour;

// //     var min  = date.getMinutes();
// //     min = (min < 10 ? "0" : "") + min;

// //     var sec  = date.getSeconds();
// //     sec = (sec < 10 ? "0" : "") + sec;

// //     var year = date.getFullYear();

// //     var month = date.getMonth() + 1;
// //     month = (month < 10 ? "0" : "") + month;

// //     var day  = date.getDate();
// //     day = (day < 10 ? "0" : "") + day;

// //     return console.log(year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec);

// // }


// // // console.log(getDateTime().month)

// // getDateTime()


// // const date = require('dateformat')
// // var now = new Date('2012-04-T18:25:43');
// // var test = date(now,"HH:MM");


// // console.log(test)

// var schedule = require('node-schedule');

// // var a = '*'
// // var b = '*'
// // var c = '*'
// // var d = '*'
// // var e = '*'
// // var f = '*'

// // a = '5'


// // var j = schedule.scheduleJob(a+' '+b+' '+c+' '+d+' '+e+' '+f, function(){
// //     var date = new Date()
// //     var jan = date.getHours()
// //     var min = date.getMinutes()
// //     var sec = date.getSeconds()
// //   console.log('The answer to life, the universe, and everything!'+ jan+':'+min+':'+sec);
// // });

// // var j = schedule.scheduleJob({ minute:8, second: 0}, function(){
// //   console.log('Time for tea!');
// // });


//   // var a = '*'
//   // var b = '*'
//   // var c = '*'
//   //       var d = function(date){
//   //           if(date){
//   //               return date
//   //           }else{return '*'}
//   //       }
//   //       var e = '*'
//   //       var f = '*'

//   //       var date = ''

//   //       // var time = data[i].time;
//   //       // yas = time.split(':')
//   //       // console.log(yas[0]+" "+yas[1]+" "+yas[2])

//   //       a = '1'
//   //       b = '*'
//   //       c = '*'
  
//   //       console.log(d(date))

//   //       // var j = schedule.scheduleJob(a+' '+b+' '+c+' '+d(date)+' '+e+' '+f, function(){
//   //       //     console.log('The answer to life, the universe, and everything!'+ jan+':'+min+':'+sec);
//   //       //   });
// const obj = { id:1, name:'jhon'}
// obj.location="medan"
// console.log(obj)


var db = require('./app/config/db.config');
var role = db.role_backend;
const Profile = db.action1_backend;

Profile.findAll().then(data=>{console.log(data)})