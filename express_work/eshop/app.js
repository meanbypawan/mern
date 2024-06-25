import express from "express";
import IndexRouter from "./routes/index.route.js";
import mongoose from "mongoose";
const app = express();

app.set("view engine","ejs");
app.use(express.static("./public"));

// http://localhost:3000/about
mongoose.connect('mongodb://localhost:27017/userdb')
.then(result=>{
    console.log("MongoDB Connected....");
}).catch(err=>{
    console.log(err);
})
app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("Server Started.....");
});