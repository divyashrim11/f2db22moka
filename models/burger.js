const mongoose = require("mongoose")
const burgerSchema = mongoose.Schema({
BurgerType: String,
BurgerSize: String,
BurgerCost: Number
})
module.exports = mongoose.model("burger",burgerSchema)