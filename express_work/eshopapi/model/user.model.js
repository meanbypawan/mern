import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    }
},{versionKey: false});
export const User = mongoose.model("user",userSchema);
/*
   Mongoose model define the structure of data and will trun into model class
   and it also provide the interface to interact with database
   User.find()
   User.create()
   User.upate()
*/