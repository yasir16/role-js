// import { role } from "../smartrack-backend/app/config/db.config";

var rule = {
	"name" : "rule1",
	"type" : "any",
	"id_action": 13,
	"rule" : [
		{
			"device_type": "dunno",
			"device_name": "dunno",
			"var_name": "volt",
			"operator": "greaterThanInclusive",
			"value1": "23",
			"value2": ""
		},
		{
			"device_type": "dunno2",
			"device_name": "dunno2",
			"var_name": "volt",
			"operator": "greaterThanInclusive",
			"value1": "23",
			"value2": ""
		},
		]
	
}

var action = {
	"id_action" : "1",
	"action_id" : 12,
	"action" : [
						{
							"device_type": "recti",
							"device_name": "recti_1",
							"var_name": "volt",
							"value" : 5
						}
	]
}


var db = require('./app/config/db.config');
var Role = db.role_backend;
var Action = db.action_backend;


console.log(rule.rule.length)

var object = {} // empty Object
var conditions = 'conditions';
var type = rule.type;
var key = 'Orientation Sensor';
object.conditions = {}; // empty Array, which you can push() values into
object.conditions[type] = [];
var event = "event";
var fs = require('fs')

var object1 = {}


var data = []

for (var i = 0; i<rule.rule.length; i ++){
	data [i] = {
		fact: rule.rule[i].var_name+"_"+rule.rule[i].device_name+"_"+rule.rule[i].device_type,
		operator: rule.rule[i].operator,
		value: rule.rule[i].value1,
		value2: rule.rule[i].value2
	}
	object.conditions[type].push(data[i]);

	var nama;
	nama = rule.rule[i].var_name+"_"+rule.rule[i].device_name+"_"+rule.rule[i].device_type
	object1[nama]= "";
	vari_nama = JSON.stringify(object1);

}


console.log(vari_nama)
fs.writeFile('allVarname.json', vari_nama, err=>{
	if(err){
		console.log('Error : ', err)
	} else {
		console.log('Succesfully wrote file')
	}
})

object.event= {
	"type": action.id_action,
  "params": {
        "message": "Player has fouled out!",
		"action_id" : action.action_id
	  }
}



masuk = JSON.stringify(object)

Role.create({
    roleallcondition: masuk
}).then(()=>{
    console.log(masuk)
    console.log("masuk database")
})

module.exports = masuk;
