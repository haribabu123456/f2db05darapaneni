var express = require('express'); 
var router = express.Router(); 
 

var api_controller = require('../controllers/api'); 
var earbuds_controller = require('../controllers/earbuds'); 
 
router.get('/', api_controller.api); 
  
router.post('/earbuds', earbuds_controller.earbuds_create_post); 
 
router.delete('/earbuds/:id', earbuds_controller.earbuds_delete); 
 

router.put('/earbuds/:id', earbuds_controller.earbuds_update_put); 
 
 
router.get('/earbuds/:id', earbuds_controller.earbuds_detail); 
 

router.get('/earbuds', earbuds_controller.earbuds_list); 
 
module.exports = router;