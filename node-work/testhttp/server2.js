/*
  Web application
   a. Client/Browser/ReactJs :- It is responsible to send request to server
   
   b. Server
       Node.Js Server :-
          It is responsibel to receive client request
          And process the client request
          And send response to the client
*/
import http from "http";
import url from "url";
const server = http.createServer((request,response)=>{
   const parsedUrl = url.parse(request.url,true); 
   console.log(parsedUrl); 
   if(parsedUrl.pathname == "/home" || parsedUrl.pathname == "/")
     response.write("<h1>Home Page</h1>");
   else if(parsedUrl.pathname == "/about")
     response.write("<h1>About Page</h1>");
   else if(parsedUrl.pathname == "/contact")
     response.write("<h1>Contact Page</h1>");
   else if(parsedUrl.pathname == "/add"){
    let a = parsedUrl.query.a*1;
    let b = parsedUrl.query.b*1; 
    response.write("<h1>Addition "+(a+b)+"</h1>");
   }   
   response.end();    
});
server.listen(3000,()=>{
    console.log("Server started...");
})