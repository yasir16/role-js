const db = require('../config/db.config');
const Role = db.role_backend;
const Role_front = db.role_front;
const Action = db.action_backend;
const Action1 = db.action1_backend;
const Sequelize = require('sequelize');
const OP = Sequelize.Op;
const jsonmodel = require('./jsonmodel')
const jsonmodel2 = require('./jsonmodel2')
const jsonmodel3 = require('./jsonmodel3')


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
            fact: req.body.rule[i].var_name+"_"+req.body.rule[i].id_profile+"_"+req.body.rule[i].device_type,
            operator: req.body.rule[i].operator,
            value: req.body.rule[i].value
            // value2: req.body.rule[i].value2
        }
        object.conditions[type].push(data[i]);

        var nama;
        nama = req.body.rule[i].var_name+"_"+req.body.rule[i].id_profile+"_"+req.body.rule[i].device_type
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
            fact: req.body.rule[i].var_name+"_"+req.body.rule[i].id_profile+"_"+req.body.rule[i].device_type,
            operator: req.body.rule[i].operator,
            value: req.body.rule[i].value
            // value2: req.body.rule[i].value2
        }
        object.conditions[type].push(data[i]);

        var nama;
        nama = req.body.rule[i].var_name+"_"+req.body.rule[i].id_profile+"_"+req.body.rule[i].device_type
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
    Action.findAll({attributes:{exclude: ['action']}}).then(data=>{
        // var datas = data;
        // var action = JSON.parse(data.action);
        // jsonmodel2.set(datas, action)
        res.status(200).send(data);
    })
}


exports.findActionById = (req, res, next)=> {
    const id = req.params.profileId;
    Action.findOne({
        where: {id : id}
    }).then(data =>{
        var datas = data;
        var action = JSON.parse(data.action);
        jsonmodel2.set(datas, action)
        res.status(200).send(jsonmodel2.get());
    })
}

exports.yasir = [];

exports.createSchedule = (req, res, next)=>{
    // var name = req.body.name;
    // var time = req.body.time;
    // // var time = "10:54:07";
    // var date = req.body.date;
    // // var date = " 2012-11-04";
    // var every = req.body.every;
    
    //time seperator
    //lalu di define hour and minute

    //setelah di define masukin di json array, terus di keluarkan(exports) ke server.js
    //setelah di server.js masukin di schedule.schedulejob

    // var array1 = time.split(':');
    // var array2 = date.split('-');
    var newValue = []
    req.body.action.map(d=>{
        newValue.push({
            device_type: d.device_type,
            device_name : d.device_name,
            variable : d.variable,
            action_type: d.action_type,
            value: d.value
        })
    })

    Action1.create({
        type: req.body.type,
        status: req.body.status,
        name: req.body.name,
        time: req.body.time,
        date: req.body.date,
        day: req.body.day.join(','),
        action: JSON.stringify(req.body.action)
        // action: req.body.action
    }).then(()=>{
        res.status(200).send("New Schedule Created")
    })


}


exports.findAll1= (req, res, next)=>{
    Action1.findAll({
        attributes: { exclude: ['action'] }
    }).then(data=>{
        
        res.status(200).send(data);
    })
}

exports.findById = (req, res, next)=>{
    Action1.findOne({
        where: {id : req.params.profileId}
    }).then(data =>{
        var test= jsonmodel3.set(data);
        res.status(200).send(test)
    })
}

exports.deleteId = (req, res, next)=>{
    const id = req.params.profileId
    Action1.destroy({
        where: {id : id}
    }).then(data=>{
        res.status(200).send("Action ID " +id+" deleted")
    })

}


exports.editSchedule= (req, res, next)=>{
    var newValue = []
    // req.body.action.map(d=>{
    //     newValue.push({
    //         device_type: d.device_type,
    //         device_name : d.device_name,
    //         variable : d.variable,
    //         action_type: d.action_type,
    //         value: d.value
    //     })
    // })

    Action1.update({
        status: req.body.status,
        name: req.body.name,
        time: req.body.time,
        date: req.body.date,
        day: req.body.day.join(','),
        action: JSON.stringify(req.body.action)
        // action: req.body.action
    }, {where: {id: req.params.profileId}}).then(()=>{
        res.status(200).send("Schedule Updated")
    })
}