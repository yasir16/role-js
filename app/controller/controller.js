const db = require('../config/db.config');
const Role = db.role_backend;
const Role_front = db.role_front;
const Sequelize = require('sequelize');
const OP = Sequelize.Op;
const jsonmodel = require('./jsonmodel')


exports.create = (req, res, next) =>{
    var object = {} // empty Object
    var conditions = 'conditions';
    var type = req.body.type;
    var key = 'Orientation Sensor';
    object.conditions = {}; // empty Array, which you can push() values into
    object.conditions[type] = [];
    var event = "event";
    var fs = require('fs')

    var object1 = {}


    var data = []

    for (var i = 0; i<req.body.rule.length; i++){
        data [i] = {
            fact: req.body.rule[i].var_name+"_"+req.body.rule[i].device_name+"_"+req.body.rule[i].device_type,
            operator: req.body.rule[i].operator,
            value: req.body.rule[i].value1,
            value2: req.body.rule[i].value2
        }
        object.conditions[type].push(data[i]);

        var nama;
        nama = req.body.rule[i].var_name+"_"+req.body.rule[i].device_name+"_"+req.body.rule[i].device_type
        object1[nama]= "";
        vari_nama = JSON.stringify(object1);

    }


    // console.log(vari_nama)
    fs.writeFile('allVarname.json', vari_nama, err=>{
        if(err){
            console.log('Error : ', err)
        } else {
            console.log('Succesfully wrote file')
        }
    })

    object.event= {
        "type": req.body.action_id,
    "params": {
            "message": "Player has fouled out!",
            "action_id" : req.body.action_id
        }
    }



    masuk = JSON.stringify(object)

    Role.create({
        name: req.body.name,
        roleallcondition: masuk
    }).then(()=>{
        console.log(masuk)
        console.log("All For Backend Process Created ")
    })

    Role_front.create({
        name: req.body.name,
        type: req.body.type,
        action_id: req.body.action_id,
        rules: [{
            roleallcondition: JSON.stringify(req.body.conditions)
        }]
    }).then(test => {
        res.status(200).send("New Rules created")
    })
}


exports.get = (req, res, next)=>{
    Role.findAll().then(data => {
        res.send(data);
    } )
}

exports.getId = (req, res, next)=>{
    Role.findOne({where : {id:req.params.profileId}}).then(data => {
        var datas = data;
        var role = JSON.parse(data.roleallcondition)

        jsonmodel.set(datas, role)

        res.status(200).send(jsonmodel.get());
    })
}