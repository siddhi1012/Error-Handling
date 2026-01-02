const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.get("/admin" ,(req,res) =>{
    throw new ExpressError(403,"ACCESS DENIED TO ADMIN!!!");
});

app.use((err,req,res,next) =>{
    let {status=500,message="Something went wrong"} = err;
    res.status(status).send(message);

});

app.listen("8080",(req,res) =>{
    console.log("server is listening on 8080 port");
});