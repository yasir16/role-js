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
db.role_backend = require('../modal/role.modal.js')(sequelize, Sequelize);
db.action_backend = require('../modal/action.modal.js')(sequelize, Sequelize);


//role frontend

db.role_front = require('../modal/role.front.js')(sequelize, Sequelize);
// db.action_front = require('../modal/action.modal')(sequelize, Sequelize);



//schedule

db.action1_backend = require('../modal/action1.modal')(sequelize, Sequelize);






module.exports = db;



