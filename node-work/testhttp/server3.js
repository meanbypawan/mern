import http from "http";
import url from "url";
import fs from "fs";
import path, { dirname } from "path";
// __dirname, __filename
http.createServer((request,response)=>{
   let parsedUrl =  url.parse(request.url,true);
   console.log(parsedUrl.pathname);
   console.log(import.meta.url);
   let __filename = url.fileURLToPath(import.meta.url);
   let __dirname = dirname(__filename);
   
   
   if(parsedUrl.pathname == "/home" && request.method == "GET"){
     let homePagePath = path.join(__dirname,"/views/home.html");
     let data =  fs.readFileSync(homePagePath);
     response.write(data);
     response.end(); 
   }
   else if(parsedUrl.pathname.match("\.css$")){
     let readStream =  fs.createReadStream("./views"+parsedUrl.pathname);
     readStream.pipe(response);
   }
   else if(parsedUrl.pathname.match("\.png$")){
    let readStream = fs.createReadStream("./views"+parsedUrl.pathname);
    readStream.pipe(response);
   }
   else if(parsedUrl.pathname == "/about"){
     let aboutPage = fs.readFileSync("./views/about.html");
     response.write(aboutPage);
     response.end();
   }
})
.listen(3000,()=>{
    console.log("Server started....");
});