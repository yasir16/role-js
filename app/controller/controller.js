const db = require('../config/db.config');
const Role = db.role_backend;
const Role_front = db.role_front;
const Action = db.action_backend;
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



    

    Role.create({
        name: req.body.name,
        roleallcondition: JSON.stringify(object)
    }).then(()=>{
        // console.log(masuk)
        console.log("All For Backend Process Created ")
    })

    test = JSON.stringify(req.body.rule)
    console.log(test)
    Role_front.create({
        name: req.body.name,
        type: req.body.type,
        action_id: req.body.action_id,
        roleallcondition: test
        
    }).then(test => {
        res.status(200).send("New Rules created")
    })
}


exports.get = (req, res, next)=>{
    // Role.findAll().then(data => {
    //     res.send(data);
    // } )

    Role_front.findAll({attributes:{exclude: ['roleallcondition']}}).then(data => {
        res.status(200).send(data);
    } )
}

exports.getId = (req, res, next)=>{
    Role_front.findOne({where : {id:req.params.profileId}}).then(data => {
        var datas = data;
        var role = JSON.parse(data.roleallcondition)

        jsonmodel.set(datas, role)

        res.status(200).send(jsonmodel.get());
    })
}


exports.edit = (req, res, next)=> {
    const id = req.params.profileId
    Role_front.update({
        name: req.body.name,
        type: req.body.type,
        action_id: req.body.action_id,
        roleallcondition: JSON.stringify(req.body.rule),
        
    }, {where: {id : id}}).then(test => {
        res.status(200).send("Rules Updated")
    })

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
    // fs.writeFile('allVarname.json', vari_nama, err=>{
    //     if(err){
    //         console.log('Error : ', err)
    //     } else {
    //         console.log('Succesfully wrote file')
    //     }
    // })

    object.event= {
        "type": req.body.action_id,
    "params": {
            "message": "Player has fouled out!",
            "action_id" : req.body.action_id
        }
    }



    

    Role.update({
        name: req.body.name,
        roleallcondition: JSON.stringify(object)
    },{
        where: {id : id}
    }).then(()=>{
        console.log("All For Backend Process Created ")
    })

    
   
}


exports.delete =(req, res, next)=>{
    const id = req.params.profileId;
    Role.destroy({
        where: {
            id : id
        }
    }).then(data=>{
        // res.status(200).send("Role backend with number ID "+id+" deleted")

        Role_front.destroy({
            where: {
                id : id
            }
        }).then(data=>{
            res.status(200).send("Role frontend with number ID "+id+" deleted")
        })
    })


    



}


exports.createAction = (req, res, next)=>{
     
    Action.create({
        name: req.body.name,
        action: JSON.stringify(req.body.action)
    }).then(()=>{
        // console.log(masuk)
        res.status(200).send("New Action Created")
    })
}

exports.updateAction = (req, res, next)=>{
     
    const id = req.params.profileId
    Action.update({
        name: req.body.name,
        action : JSON.stringify(req.body.action)
    }, {
        where: {id: id}
    }).then(data =>{
        res.status(200).send("Action Updated")
    })
}


exports.deleteAction = (req, res, next)=>{
    const id = req.params.profileId
    Action.destroy({
        where: {id : id}
    }).then(data=>{
        res.status(200).send("Action ID " +id+" deleted")
    })

}


exports.findActionAll = (req, res, next)=>{
    Action.findAll({}).then(data=>{
        res.status(200).send(data);
    })
}


exports.findActionById = (req, res, next)=> {
    const id = req.params.profileId;
    Action.findOne({
        where: {id : id}
    }).then(data =>{
        res.status(200).send(data)
    })
}