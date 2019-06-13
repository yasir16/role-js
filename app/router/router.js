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

    app.delete('/api/action/Action/:profileId', router.deleteAction);    




    //schedule

    app.get('/api/action/schedule/:profileId', router.findById);

    app.get('/api/action/schedule', router.findAll1);

    app.post('/api/action/schedule', router.createSchedule);

    app.patch('/api/action/schedule/:profileId', router.editSchedule);

    app.delete('/api/action/schedule/:profileId', router.deleteId);

}