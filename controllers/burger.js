var Burger = require('../models/burger');
// List of all Burgers
exports.burger_list = async function(req, res) {

    try{

        theburger = await Burger.find();

        res.send(theburger);

    }

    catch(err){

        res.status(500);

        res.send('{"error": ${err}}');

    }
}
// VIEWS
// Handle a show all view
exports.burger_view_all_Page = async function(req, res) {
    try{
    theBurgers = await Burger.find();
    res.render('burgers', { title: 'Burger Search Results', results: theBurgers });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Burger create on POST.
exports.burger_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Burger();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"BurgerType":"Extra-Cheese", "BurgerSize":"Large", "BurgerCost":10}
    document.BurgerType = req.body.BurgerType;
    document.BurgerSize = req.body.BurgerSize;
    document.BurgerCost = req.body.BurgerCost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Burger.
//exports.burger_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: Burger detail: ' + req.params.id);
//};
// Handle burger delete on DELETE.
exports.burger_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Burger.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Burger update form on PUT.
exports.burger_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Burger.findById( req.params.id)
    // Do updates of properties
    if(req.body.BurgerType)
    toUpdate.BurgerType = req.body.BurgerType;
    if(req.body.BurgerSize) toUpdate.BurgerSize = req.body.BurgerSize;
    if(req.body.BurgerCost) toUpdate.BurgerCost = req.body.BurgerCost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
   };
// for a specific burger.
exports.burger_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Burger.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle a show one view with id specified by query
exports.burger_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Burger.findById( req.query.id)
    res.render('burgerdetail',
   { title: 'Burger Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a burger.
// No body, no in path parameter, no query.
// Does not need to be async
exports.burger_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('burgercreate', { title: 'Burger Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for updating a burger.
// query provides the id
exports.burger_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Burger.findById(req.query.id)
    res.render('burgerupdate', { title: 'Burger Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.burger_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Burger.findById(req.query.id)
    res.render('burgerdelete', { title: 'Burger Delete', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };