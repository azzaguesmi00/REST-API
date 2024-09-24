//require mongoose
const mongoose = require('mongoose');

// connect DB
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("DataBase Connected..")
    } catch(error){
        console.log("DataBase NOT Connected",error);
    }
};
module.exports = connectDB;