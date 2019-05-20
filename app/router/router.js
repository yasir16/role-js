module.exports = function(app){
    const router = require('../controller/controller');

    app.post('/api/role/Roles', router.create);

    app.patch('/api/role/Roles/:profileId',router.edit);

    app.get('/api/role/Roles', router.get);

    app.get('/api/role/Roles/:profileId', router.getId);

    app.delete('/api/role/Roles/:profileId', router.delete);



}