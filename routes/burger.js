var express = require('express');
const burger_controlers= require('../controllers/burger');
var router = express.Router();
/* GET burger */
router.get('/', burger_controlers.burger_view_all_Page );
module.exports = router;
// GET request for one burger.
router.get('/burger/:id', burger_controlers.burger_detail);
/* GET detail burger page */
router.get('/detail', burger_controlers.burger_view_one_Page);
/* GET create burger page */
router.get('/create', burger_controlers.burger_create_Page);
/* GET create update page */
router.get('/update', burger_controlers.burger_update_Page);
/* GET delete burger page */
router.get('/delete', burger_controlers.burger_delete_Page);