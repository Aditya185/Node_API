const mongoose = require('mongoose');

const authUserSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    email : {type: String,required : true,unique:true,match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/},
    password : {type : String , required : true},
    //new
    dob : {type : String , required : true},
    gender : {type : String , required : true},
    name : {type : String , required : true},
  

});

module.exports = mongoose.model('AuthUser',authUserSchema);