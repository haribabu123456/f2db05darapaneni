const mongoose = require("mongoose") 
const earbudsSchema = mongoose.Schema({  
 earbudsBrand: {
    type: String,
    min: 1,
    max: 100
},
earbudsColor: {
    type: String,
    min: 1,
    max: 100
},
earbudsCost: {
    type: Number,
    min: 1,
    max: 100000
}
}) 
 
module.exports = mongoose.model("earbuds", 
earbudsSchema)