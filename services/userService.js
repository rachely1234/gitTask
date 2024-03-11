const User=require('../models/users')
var emailSchema=require("emailSchema")
const {phone}=require('phone')

exports.addUser=async(data)=>{
   
    if(!this.emailSchema(data.email)){
    return 'invalid'
   }
   const result=await User.create(data);
   return result
}
exports.upDateUser=async(id,data)=>{
    const {name,email,phone}=data
    if(!emailSchema(email)){
        return 'invalid'
    }
    const result=await User.findOneAndUpdate({userId:id},{name,email,phone});
    return result
}

exports.deleteUser=async(id)=>{
    const result =await User.findOneAndDelete({userId:id});
    return result
}

exports.emailSchema=(email)=>{
    if(!emailSchema.validate(email)){
        return false
    }
    return true
}

