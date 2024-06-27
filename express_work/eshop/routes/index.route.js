import express, { response } from "express";
import db from "../db/dbConfig.js";
const router = express.Router();
router.get("/",(request,response,next)=>{
    return response.render("index.ejs",{currentUser: request.session.currentUserEmail,currentUserId: request.session.currentUserId});
});
router.get("/about",(request,response,next)=>{
    return response.render("about.ejs",{currentUser: request.session.currentUserEmail,currentUserId: request.session.currentUserId});
});
router.get("/sign-in",(request,response,next)=>{
    return response.render("signin.ejs",{message : "",currentUser: request.session.currentUserEmail,currentUserId: request.session.currentUserId});
});
router.get("/sign-up",(request,response,next)=>{
    return response.render("signup.ejs",{currentUser: request.session.currentUserEmail,currentUserId: request.session.currentUserId});
});
router.post("/sign-up",(request,response,next)=>{
    // request.body = {email: 'test@gmail.com',password: 12345}
  db.collection("users").insertOne(request.body)
  .then(result=>{
    return response.redirect("/sign-in");
  }).catch(err=>{
    console.log(err);
  });
});
router.post("/signout",(request,response,next)=>{
   request.session.currentUserEmail = null;
   request.session.currentUserId = null;
   request.session.destroy();
   return response.redirect("/");
});
router.post("/sign-in",(request,response,next)=>{
  let {email,password} = request.body;
  db.collection("users").findOne({email,password})
  .then(result=>{
    request.session.currentUserId = result._id;
    request.session.currentUserEmail = result.email;
    console.log(request.session.currentUserEmail);
    return result ? response.redirect("/") : response.render("signin.ejs",{message: "Sign in failed..",currentUser: request.session.currentUserEmail,currentUserId: request.session.currentUserId});
  }).catch(err=>{
    console.log(err);
  })
});
export default router;