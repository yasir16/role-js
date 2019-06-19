const engine = require('./role1.js')
// const databas = require('./fromdatabase.js')



// exports.facts = ()=>{
    engine.createRule();

let facts = [
    {
        humidity_5_PDU : 45,
        humidity_4_PDU: 12,
        load_3_UPS : 12
    },
    
]



engine.getEngine(facts[0])
// }

