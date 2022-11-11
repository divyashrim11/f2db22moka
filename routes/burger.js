var express = require('express');
const burger_controlers= require('../controllers/burger');
var router = express.Router();
/* GET burger */
router.get('/', burger_controlers.burger_view_all_Page );
module.exports = router;
// GET request for one costume.
router.get('/burger/:id', burger_controlers.burger_detail);
