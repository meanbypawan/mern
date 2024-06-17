import fs from "fs";

const writeStream = fs.createWriteStream("./xyz.txt");
writeStream.write("Hello NodeJs");
writeStream.end();

writeStream.on("finish",()=>{
    console.log("Operation success...");
});
writeStream.on("error",(err)=>{
    console.log(err);
});