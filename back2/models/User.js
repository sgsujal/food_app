const mongooose =require('mongoose')

const {Schema } = mongooose;
const UserSchema =new Schema({
    name:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports =mongooose.model('user',UserSchema)
