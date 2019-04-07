const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/UserDB",{ useNewUrlParser: true }, (err)=>{
    if(!err){ console.log('MongoDB Connection Successfull')}
    else{
        console.log('MongoDB Connection  Not Successfull')
    }
});


require("./users.model");
