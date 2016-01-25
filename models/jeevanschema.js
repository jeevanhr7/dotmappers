var mongoose = require('mongoose');

var jeevanschema=new mongoose.Schema({
    Fname:String,
    Lname:String,
    completed:Boolean,
    note:String,
    created_at:{type:Date,default:Date.now}

})

module.exports=mongoose.model('Dotmaappers',jeevanschema);
