import fs from "fs";
/*
  Write Operation
    a. writeFileSync() :- Synchronous blocking code
    b. writeFile(): - Asynchronous non-blocking
  Read Operation
    a. readFileSync() :- Synchronous blocking code
    b. readFile() :- Asynchronous non-blocking code  
*/
/*
fs.writeFile("./data.txt","NodeJs is javascript runtime enviornment",(err)=>{
  err ? console.log(err) : console.log("Operation success..");
});
*/
fs.appendFile("./abc.txt","\nNodeJs is suitable for IO-intensive application",(err)=>{
    err ? console.log(err) : console.log("Operation success..");
});
