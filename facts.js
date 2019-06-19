const engine = require('./role1.js')
// const databas = require('./fromdatabase.js')



// exports.facts = ()=>{
    engine.createRule();

let facts = [
    {
        outlet_1_voltage_3_PDU : 400000,
        volt_dunno2_dunno2: 20,
        volt_dunno232432_dunno34: 30
    },
    
]



engine.getEngine(facts)
// }

