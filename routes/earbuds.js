var express = require('express');
const earbuds_controlers= require('../controllers/earbuds');
//redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
var router = express.Router();

/* GET costumes */

router.get('/',  earbuds_controlers.earbuds_view_all_Page );
/* GET detail earbuds page */
router.get('/detail',earbuds_controlers.earbuds_view_one_Page);
/* GET create earbuds page */
router.get('/create',secured, earbuds_controlers.earbuds_create_Page);
/* GET create update page */
router.get('/update',secured, earbuds_controlers.earbuds_update_Page);
/* GET delete earbuds page */
router.get('/delete',secured, earbuds_controlers.earbuds_delete_Page);
module.exports = router;