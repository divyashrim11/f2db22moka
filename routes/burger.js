var express = require('express');
const burger_controlers= require('../controllers/burger');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET burger */
router.get('/', burger_controlers.burger_view_all_Page );
module.exports = router;
// GET request for one burger.
router.get('/burger/:id', burger_controlers.burger_detail);
/* GET detail burger page */
router.get('/detail', secured, burger_controlers.burger_view_one_Page);
/* GET create burger page */
router.get('/create', secured, burger_controlers.burger_create_Page);
/* GET create update page */
router.get('/update',secured, burger_controlers.burger_update_Page);
/* GET delete burger page */
router.get('/delete',secured, burger_controlers.burger_delete_Page);