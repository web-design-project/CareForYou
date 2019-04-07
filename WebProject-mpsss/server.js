require("./models/db");

const express =require('express');

var app=express();

app.listen(4200,()=>{
console.log("Express Server Started on port:4200");
});