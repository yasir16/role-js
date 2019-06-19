const engine = require('./role1.js')
// const databas = require('./fromdatabase.js')



// exports.facts = ()=>{
    engine.createRule();

let facts = [
    {
        inlet_power_5_PDU : 12,
        outlet_1_current_5_PDU: "q23",
        volt_dunno232432_dunno34: 30
    },
    
]



engine.getEngine(facts)
// }

