import express from "express";
const router = express.Router();
router.get("/",(request,response,next)=>{
    return response.render("index.ejs");
});
router.get("/about",(request,response,next)=>{
    return response.render("about.ejs");
});
export default router;