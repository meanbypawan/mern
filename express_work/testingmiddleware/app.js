import express from "express";

const app = express(); // app is express application instance

// /home
app.use((request,response,next)=>{
    console.log("executed.....");
    next();
});
 
// http://localhost:3000/home : GET
app.get("/home",(request,response,next)=>{
    console.log("/home route");
    return response.send("Home Page");
});
// http://localhost:3000/about : GET
app.get("/about",(request,response,next)=>{
    return  response.send("About Page");
});
// http://localhost:3000/contact : GET 
app.get("/contact",(request,response,next)=>{
    return response.send("Contact Page");
});
app.get("/add",(request,response,next)=>{
   let a = request.query.a*1;
   let b = request.query.b *1; 
   return response.send("Addition : "+(a+b));
});

app.post("/sub",(request,response,next)=>{
    return response.send("Subtraction : ");
});


app.listen(3000,()=>{
    console.log("Server Started...");
});