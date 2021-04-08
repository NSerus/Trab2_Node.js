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
                    .get(personController.novos);
   
/*router.route('/intern').get(personController.inter);

router.route('/+novos').get(personController.max);

router.route('/-novos').get(personController.min);

router.route('/med_novos').get(personController.med);

router.route('/tot_novos').get(personController.tot);*/


//Export API routes
module.exports = router;