module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('role_backend', {
        name : {
            type: Sequelize.STRING
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