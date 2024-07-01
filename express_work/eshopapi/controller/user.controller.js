import { User } from "../model/user.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
export const signIn = async (request,response,next)=>{
   let {email,password} = request.body;
   try{
      let user = await User.findOne({email});
      if(user){
        let status = bcrypt.compareSync(password,user.password);
        user.password = undefined;
        return status ? response.status(200).json({message: 'Sign in success', user}) : response.status(401).json({error: "Bad request | Unauthorized user"});
      }  
      return response.status(401).json({error: "Bad request|Unauthroized user"});
   }
   catch(err){
    return response.status(500).json({error: "Internal Server Error"});
   } 
}
export const signUp = async (request,response,next)=>{
  try{   
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(401).json({error: "Bad request",errors: errors.array()});

    let {email,password,contact} = request.body;
    let saltKey = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password,saltKey);
    
    let user = await User.create({email,password,contact});  
    return response.status(201).json({message: "user saved",user});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
}