import express from "express";
import IndexRouter from "./routes/index.route.js";
const app = express();

app.set("view engine","ejs");
app.use(express.static("./public"));

// http://localhost:3000/about
app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("Server Started.....");
});