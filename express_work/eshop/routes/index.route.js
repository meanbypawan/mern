import express from "express";
const router = express.Router();
router.get("/",(request,response,next)=>{
    return response.render("index.ejs");
});
router.get("/about",(request,response,next)=>{
    return response.render("about.ejs");
});
router.get("/sign-in",(request,response,next)=>{
    return response.render("signin.ejs");
});
router.get("/sign-up",(request,response,next)=>{
    return response.render("signup.ejs");
});
export default router;