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

// Handle Burger delete form on DELETE.
exports.burger_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Burger delete DELETE ' + req.params.id);
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