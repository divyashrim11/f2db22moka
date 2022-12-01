const mongoose = require("mongoose")
const burgerSchema = mongoose.Schema({
BurgerType: {type: String,required: [true, 'Burger type cannot be empty']},
BurgerSize: {type: String,required: [true, 'Burger size cannot be empty']},
BurgerCost: {type: Number,required: [true, 'Burger cost cannot be empty']}
})
module.exports = mongoose.model("burger",burgerSchema)