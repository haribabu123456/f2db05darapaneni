const mongoose = require("mongoose") 
const earbudsSchema = mongoose.Schema({ 
 earbudsBrand: String, 
 earbudsColor: String, 
 earbudsCost: Number 
}) 
 
module.exports = mongoose.model("earbuds", 
earbudsSchema)