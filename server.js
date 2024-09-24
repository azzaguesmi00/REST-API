// require express
const express = require('express');

// require instance
const app = express();

//require dot env
require('dotenv').config()

//connectDB
const connectDB = require("./config/connectDB");
connectDB();


//
app.use(express.json)


//  routes
app.use('/api/product',require("./routes/product"));
// create port
const PORT = process.env.PORT

// create server
app.listen(PORT, (err )=>{
    err 
    ? console.log(err) 
    : console.log(`server is running on ${PORT}...`)
});

