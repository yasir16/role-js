module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('role_backend', {
        name : {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        action_id: {
            type: Sequelize.INTEGER
        },
        roleallcondition : {
            type: Sequelize.TEXT('long')
        },
    },
    {
        timestamps: false,  // I do want timestamps here
    }
    )

    return Role;
}