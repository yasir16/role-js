module.exports = (sequelize, Sequelize) => {
    const act = sequelize.define('action_schedule_backend', {
        status : {
            type : Sequelize.BOOLEAN
        },
        type : {
            type : Sequelize.INTEGER
        },
        name : {
            type : Sequelize.STRING
        },

        time : {
            type : Sequelize.STRING
        },
        date : {
            type : Sequelize.STRING
        },
        day : {
            type : Sequelize.STRING
        },
        action : {
            type: Sequelize.TEXT('long')
        },
    },
    {
        timestamps: false,  // I do want timestamps here
    }
    )

    return act;
}



var names = '18:25:43';

var nameArr = names.split(':');

console.log(nameArr[0]);