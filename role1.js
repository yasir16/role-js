var action;
const fs = require('fs');

var db = require('./app/config/db.config');
var role = db.role_backend;
const Profile = db.action1_backend;

let Engine = require('../role-js/node_modules/json-rules-engine/dist').Engine
let engine = new Engine()


module.exports = {
    createRule : () => {
        role.findAll({attributes : ['roleallcondition']}).then(a=>{
            a.map(data=> {
                // console.log(data.roleallcondition.conditions)
                var aw = JSON.parse(data.roleallcondition)
                // console.log(aw.conditions)
                engine.addRule(aw)
            })
        })
    },
    getEngine : facts =>{
        console.log("PRINT GET ENGINE")

        const database = require('./jsonfile')


        engine.run(facts[0]).then(events => {
            events.map(event => console.log(event.params.action_id))
        }).catch(console.log)

        return database.set(facts)
    }
}