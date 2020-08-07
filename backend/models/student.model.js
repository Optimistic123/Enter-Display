const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    username : { type : String , required : true},
    imgURL:{type:String ,required:true},
    email  : { type : String , required : true},
    phone : { type : Number , required : true},
    cv : { type : String , required : true}

},{
    timestamps : true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;