module.exports = function(app){
    const router = require('../controller/controller');


    //API Role

    app.post('/api/role/Roles', router.create);

    app.patch('/api/role/Roles/:profileId',router.edit);

    app.get('/api/role/Roles', router.get);

    app.get('/api/role/Roles/:profileId', router.getId);

    app.delete('/api/role/Roles/:profileId', router.delete);



    app.post('/api/action/Action', router.createAction);

    app.patch('/api/action/Action/:profileId', router.updateAction);

    app.get('/api/action/Action', router.findActionAll);

    app.get('/api/action/Action/:profileId', router.findActionById);

    app.delete('/api/action/Action/:profileId', router.delete);    

}