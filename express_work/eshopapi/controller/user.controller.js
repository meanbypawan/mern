import { User } from "../model/user.model.js";
import { validationResult } from "express-validator";
export const signIn = (request,response,next)=>{
    User.findOne({email: request.body.email,password: request.body.password})
    .then(result=>{
        return result ? response.status(200).json({message: "Sign in success"}) : response.status(401).json({error: "Bad request.."});
    })
    .catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const signUp = async (request,response,next)=>{
  try{   
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(401).json({error: "Bad request",errors: errors.array()});

    let {email,password,contact} = request.body;
    let user = await User.create({email,password,contact});  
    return response.status(201).json({message: "user saved",user});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
}