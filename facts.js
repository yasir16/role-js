// const engine = require('./role1.js')
// const databas = require('./fromdatabase.js')
var db = require('./app/config/db.config.js');
var role = db.role_backend;


let Engine = require('../role-js/node_modules/json-rules-engine/dist').Engine;
let engine = new Engine()


// exports.facts = ()=>{
role.findAll({attributes : ['roleallcondition']}).then(a=>{
    a.map(data=> {
        // console.log(data.roleallcondition.conditions)
        var aw = JSON.parse(data.roleallcondition)
        console.log(aw)
        // console.log(aw.conditions.any)
        engine.addRule(data.roleallcondition)
    })
})

let facts = 
    {
        humidity_5_PDU : 112,
        humidity_4_PDU: 12,
        load_3_UPS : 12
    }



// engine.getEngine(facts[0])
// }

engine.run(facts).then(events => {
    events.map(event => console.log(event.params.action_id))
}).catch(console.log)

