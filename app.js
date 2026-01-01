const express = require("express"); 
const app = express();
const ExpressError = require("./ExpressError");
// app.use((req,res,next) =>{
    
//     console.log("Hi, I am middleware");
//     next();
// });

// app.use((req,res,next) =>{
//     req.time = new Date (Date.now());
//     console.log(req.method, req.hostname,req.path,req.time);
//     next();

// });

//middelware 
app.use("/api",(req,res,next) =>{
    let {token} = req.query;
    if(token === "giveaccess"){
        return next();
    }
   throw new ExpressError(401,"ACCESS DENIED!!");   
});
app.get("/err",(req,res,next) =>{
        abcd = abcd;
});


app.use( (err,req,res,next) => {
        console.log("------ERROR-----");
        res.send(err);

});


// app.use( (req,res,) => {
//         res.status(404).send("Page not found");
// });


app.get("/api",(req,res) =>{
    res.send("data");
});

app.get("/",(req,res) =>{
    res.send("Hi, I am Root");
});

//middleware -> response send
app.get("/random",(req,res) =>{
    res.send("this is random page");
})



app.listen("8080",(req,res) =>{
    console.log("server listening to the port 8080");

});