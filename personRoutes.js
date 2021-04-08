//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Bio Controller
var personController = require('./personController');

// Bio routes
router.route('/novos').post(personController.add)
                    .get(personController.index);
    

router.route('/person/:person_id')
    .get(personController.view)
    .patch(personController.update)
    .put(personController.update)
    .delete(personController.delete);

//Export API routes
module.exports = router;