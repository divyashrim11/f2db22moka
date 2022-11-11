var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var burger_controller = require('../controllers/burger');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Burger ROUTES ///
// POST request for creating a Burger.
router.post('/burgers', burger_controller.burger_create_post);
// DELETE request to delete Burger.
router.delete('/burgers/:id', burger_controller.burger_delete);
// PUT request to update Burger.
router.put('/burgers/:id', burger_controller.burger_update_put);
// GET request for one Burger.
router.get('/burgers/:id', burger_controller.burger_detail);
// GET request for list of all Burger items.
router.get('/burgers', burger_controller.burger_list);
module.exports = router;