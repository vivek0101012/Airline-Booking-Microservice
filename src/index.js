

const express =require("express");

const axios=require("axios")
const bodyParser= require("body-parser");
const db= require("./models/index")
const app= express();
const {PORT}=require('./config/server.Config');

const apiRoutes= require("./routes/index")

const setupAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes)
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}` )

    


    })
}

setupAndStartServer()
