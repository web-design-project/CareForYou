const mongoose =require('mongoose');

var careuserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phoneNumber:{
        type:String
    }
});
mongoose.model("user",careuserSchema);