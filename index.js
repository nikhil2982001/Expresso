const express=require('express');
const mongoose=require('mongoose');
const app=express();

mongoose.connect('mongodb://localhost:27017/admin');
const UserSchema=new mongoose.Schema({
    name:String,
    age:Number
})
const UserModel=mongoose.model("admin",UserSchema)
app.get("/getUsers",(req,res)=>{
 UserModel.find({}).then(function(admin){
    res.json(admin)
 }).catch(function(err){
    console.log(err)
 })
})
app.listen(3000,()=>{
    console.log("hello ji");
})