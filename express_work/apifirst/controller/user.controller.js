import mongoose from "mongoose";
import db from "../db/dbConfig.js";
export const deleteUser = (request, response,next)=>{
    const id = request.params.id;
    db.collection("users").deleteOne({_id: new mongoose.Types.ObjectId(''+id)})
    .then(result=>{
        return result.deletedCount ? response.status(200).json({message: "User removed"}) : response.status(404).json({error: "Not found"});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const getUser = (request,response,next)=>{
    const id = request.params.id;
    db.collection("users").findOne({_id: new mongoose.Types.ObjectId(''+id)})
    .then(result=>{
       return result ? response.status(200).json({user: result}) : response.status(404).json({error: "Not found"});  
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const userList = (request,response,next)=>{
    db.collection("users").find().toArray().then(result=>{
        return response.status(200).json({users: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const saveUser = (request,response,next)=>{
    let {email,password} = request.body;
    db.collection("users").insertOne({email,password})
    .then(result=>{
      return response.status(201).json({message: 'user saved successfully...'});
    }).catch(err=>{
      console.log(err);  
      return response.status(500).json({error: "Internal Server Error"});
    }); 
}