import express from "express";

const app = express();

app.get("/home",(request,response)=>{
    response.end("/home route handle")
})
app.listen(3000,()=>{
    console.log("Server Started...");
})