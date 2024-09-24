// require mongoose
const mongoose = require('mongoose');

//create schema
const schema = mongoose.Schema;
const productSchema = new schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
});
module.exports = Product= mongoose.model("product",productSchema);