
"use strict"

/*
 * This example demonstates nested boolean logic - e.g. (x OR y) AND (a OR b).
 *
 * Usage:
 *   node ./examples/02-nested-boolean-logic.js
 *
 * For detailed output:
 *   DEBUG=json-rules-engine node ./examples/02-nested-boolean-logic.js
 */

var action;
const fs = require('fs');

var db = require('./app/config/db.config');
var role = db.role_backend;
const Profile = db.action1_backend;

// Profile.findAll().then(data=>{console.log(data)})

let Engine = require('../role-js/node_modules/json-rules-engine/dist').Engine
let engine = new Engine() 

module.exports ={

    createRule : () => {
      
        // var test = fs.readFile('all.json', (err,data) => {
        //     if (err) throw err;
        //     let datas = JSON.parse(data);
        //     let datae = JSON.parse(datas.Role[0]);
            
        // })

        // var test = require('./fromdatabase.js')
        // const getdatabase = new test()
        // console.log(JSON.parse(JSON.parse(getdatabase)))
        
        
        
        // import data from fromdatabase ;

        /**
         * Setup a new engine
         */

        // console.log(getdatabase())
        // console.log(getdatabase)
        // engine.addRule(getdatabase);
        // fs.readFile('all.json', (err,data) => {
        //     if (err) throw err;
        //     let datas = JSON.parse(data);
        //     let datae = JSON.parse(datas.Role[0]);
        //     console.log(datae)
        //     engine.addRule(datae)
        // })
        
        // var raw = fs.readFileSync('all.json');
        // var a = JSON.parse(raw)

        role.findAll({attributes : ['roleallcondition']}).then(cuk=>{
          console.log(cuk)
          // a.map(data =>{

          // })
          // for ( var i=0; i<a.Role.length; i++){
          //   var condition = JSON.parse(a.Role[i])
          //   // console.log(condition)
          //   engine.addRule(condition)
          // }

        })

        
        



    },
     
    getEngine : facts =>{


        console.log("PRINT GET ENGINE")
        /**
         * Setup a new engine
         */

        const database = require('./jsonfile')

        let letaction;
        // fs.readFile('all.json', (err,data) => {
        //     if (err) throw err;
        //     let datas = JSON.parse(data);
        //     let datae = JSON.parse(datas.Role[0]);
        //     console.log(datae)
        //     engine.addRule(datae)
        // })


        engine
        .run(facts[0])
        .then(events => { // run() return events with truthy conditions
          events.map(event => console.log(event.params.action_id)
            // {
            // database.set(event)
        //   }
          )
          
        })
        .catch(console.log)


    return database.set(facts);

}}


// var semuarole = [];

// Role.findAll({attributes : ['roleallcondition']
// }).then(data =>{
//     var halo = JSON.parse(data[0].roleallcondition);
//     console.log(halo)
//     engine.addRule(halo)


    
    
    // semuarole.push(halo)
    // console.log(semuarole[0])

//     let facts = [
//         {
//             volt: 30
//         },
//         {
//             personalFoulCount: 2,
//             gameDuration: 40
//         },
//         {
//             personalFoulCount: 3,
//             gameDuration: 40
//         },
//         {
//             personalFoulCount: 4,
//             gameDuration: 40
//         },
//         {
//             personalFoulCount: 7,
//             gameDuration: 40
//         }
//     ]


//     engine
//   .run(facts[0])
//   .then(events => { // run() return events with truthy conditions
//     events.map(event => console.log({id:event.params.action_id}))
//   })
//   .catch(console.log)
    
// })

// const masuk = require('./rule_gen');

// engine.addRule(JSON.parse(masuk))


// let facts = [
//     {
//         volt: 30
//     },
//     {
//         personalFoulCount: 2,
//         gameDuration: 40
//     },
//     {
//         personalFoulCount: 3,
//         gameDuration: 40
//     },
//     {
//         personalFoulCount: 4,
//         gameDuration: 40
//     },
//     {
//         personalFoulCount: 7,
//         gameDuration: 40
//     }
// ]


// engine
// .run(facts[0])
// .then(events => { // run() return events with truthy conditions
// events.map(event => console.log({id:event.params.action_id}))
// })
// .catch(console.log)





// var object = require('./rule_gen.js');

// console.log(object);
// masuk = JSON.parse(object);

// engine.addRule(masuk) 
// var array = [
//     test, test1
// ]

/**
 * define the facts
 * note: facts may be loaded asynchronously at runtime; see the advanced example below
 */


// run the engine



//  console.log(object);