import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/eshopdb")
.then(result=>{
    console.log("Database connected...");
}).catch(err=>{
    console.log(err);
    console.log("connection failed... ");
});

export default mongoose.connection;