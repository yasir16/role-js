module.exports = function(app){
    const router = require('../controller/controller');

    app.post('/api/role/Roles', router.add);

    app.patch('/api/role/Roles',router.edit);

    app.get('/api/role/Roles', router.get);

    app.get('/api/role/Roles/:profileId', router.getId);



}