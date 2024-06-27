import express from "express";
import UserRouter from "./routes/user.route.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// http://localhost:3000/user
app.use("/user",UserRouter);

app.listen(3000,()=>{
    console.log("Server started...");
});