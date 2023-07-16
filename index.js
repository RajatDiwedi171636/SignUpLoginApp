const express = require("express");
const app = express();
const router = require("./router/index")

app.use("/app", router) 


app.listen(3000, ()=>{
    console.log("listening on port 3000")
})