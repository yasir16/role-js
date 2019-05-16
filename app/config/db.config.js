const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 


//role backend
db.role_backend = require('../model/role.modal')(sequelize, Sequelize);
db.action_backend = require('../model/action.modal')(sequelize, Sequelize);


//role frontend

db.role_front = require('../model/role_front')(sequelize, Sequelize);
db.action_front = require('../modal')






module.exports = db;



