var action;
const fs = require('fs');

var db = require('./app/config/db.config');
var role = db.role_backend;
const Profile = db.action1_backend;

let Engine = require('../role-js/node_modules/json-rules-engine/dist').Engine
let engine = new Engine()


function fromarray(database){
    var array = []
    
    return database.findAll({attributes : ['roleallcondition']}).then(abs => {
        console.log(abs)
        array.push(abs)

        abs.map(data=>{
            var aw = JSON.parse(data.roleallcondition)
            array.push(aw)

            return array
        }).catch(err=>{
            console.log(err)
        })
    })

}

console.log(fromarray(role))

module.exports = {
    createRule : () => {

        fromarray(role).then(function(testing){
            console.log("testing : "+testing)
        })
        // role.findAll({attributes : ['roleallcondition']}).then(a=>{
        //     a.map(data=> {
        //         // console.log(data.roleallcondition.conditions)
        //         var aw = JSON.parse(data.roleallcondition)
        //         // console.log(data.roleallcondition)
        //         // console.log(aw.conditions.any)
        //         engine.addRule(aw)
        //     })
        // })
    },
    getEngine : (facts) =>{
        console.log("PRINT GET ENGINE")

        const database = require('./jsonfile')


        engine.run(facts).then(events => {
            events.map(event => console.log(event.params.action_id))
        }).catch(console.log)

        // return database.set(facts)
    }
}