var database;

// Role.findAll({attributes : ['roleallcondition']
// }).then(data =>{
//     var halo = JSON.parse(data[0].roleallcondition);
//     console.log(halo)
//     return 
// })


// module.exports = {

//     getdatabase: ()=> {
//         var db = require('../config/db.config');
//         var Role = db.role_backend;


//         Role.findAll({attributes : ['roleallcondition']
//         }).then(data =>{
//             var halo = JSON.parse(data[0].roleallcondition);
//             console.log(halo)
//             return database= halo;
//         })
//     }
// }


const fs = require('fs')
var db = require('./app/config/db.config');
var Role = db.role_backend;
var jsonfile = require('./jsonfile.js')
const all = {};
const allRole = "Role";
all[allRole]= [];

// class Test {
//      getdatabase (){
//     Role.findAll({attributes : ['roleallcondition']
//     }).then(data =>{
//         // console.log(all)
//         var semua = data[0].roleallcondition;
//         // console.log(semua)
//         all[allRole].push(semua)
//         halo = JSON.stringify(all);
//         // console.log(halo)
//         // var ali = all[allRole].push(halo)
//         const dat = JSON.stringify(all)
//         // console.log(dat)
//         jsonfile.set(dat)

//         console.log(dat)
        
//         // fs.writeFile('all.json', dat, err => {
//         //     if (err){
//         //         console.log('Error : ', err)
//         //     } else {
//         //         console.log('Succesfully wrote file')
//         //     }
//         // })
       
//     })

//     // const env = require('../config/env');
//     // const Sequelize = require('sequelize');
//     // const sequelize = new Sequelize(env.database, env.username, env.password, {
//     // host: env.host,
//     // dialect: env.dialect,
//     // operatorsAliases: false,
    
//     // pool: {
//     //     max: env.max,
//     //     min: env.pool.min,
//     //     acquire: env.pool.acquire,
//     //     idle: env.pool.idle
//     // }
//     // });



//     // Role.findAll({
//     //     attributes: [[sequelize.fn('COUNT', sequelize.col('roleallcondition')), 'jumlah']]
//     // }).then(data => {
//     //     console.log(data.jumlah)
//     // })


    
// }
// }







// const getdatabase =()=>{
// Role.findAll({attributes : ['roleallcondition']
//     }).then(data =>{
//         // var halo = JSON.parse(data[0].roleallcondition);
//         console.log(halo)
//         // const dat = JSON.stringify(data)
//         // fs.writeFile('all.json', dat, err => {
//         //     if (err) {
//         //         console.log('Error writing file', err)
//         //     } else {
//         //         console.log('Succesfully wrote file')
//         //     }
//         // })
//         // returdatabase= halo;
//         jsonfile.set(halo)
//         jsonfile.get()
//         // console.log(jsonfile.get())
//     })
// }



// console.log(jsonfile.get)

// getdatabase= jsonfile.get;

// jsonfile.get(getdatabase())



// module.exports = Test;

// const fs = require('fs')

// const customer = {
//     name: "Newbie Co.",
//     order_count: 0,
//     address: "Po Box City",
// }

// const data = JSON.stringify(customer)
// fs.writeFile('all.json', data, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Succesfully wrote file')
//     }
// })




// module.exports = {
//     yas : 
    getdatabase = ()=>{
        return Role.findAll({attributes : ['roleallcondition']
        }).then(function (data){
            // console.log(all)
            
            // console.log(semua)
            
            // console.log(halo)
            // var ali = all[allRole].push(halo)
            
            // console.log(dat)
            // jsonfile.set(dat)
            console.log(data.length)
            
            // console.log(JSON.parse(halo))
            for (var i = 0; i< data.length; i++){
                var semua = data[i].roleallcondition;
                all[allRole].push(semua)
                halo = JSON.stringify(all.Role[0]);
                var dat = JSON.stringify(all)
                
            }
            
            
            fs.writeFile('all.json', dat, err => {
                if (err){
                    console.log('Error : ', err)
                } else {
                    console.log('Succesfully wrote file')
                }
            })
            
        })
        
    
    }
// }

getdatabase()


