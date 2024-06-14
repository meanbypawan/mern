import fs from "fs";

console.log("At the start...");

try{
 let data = fs.readFileSync("./daata.txt");
 console.log(data.toString());
}
catch(err){
    console.log(err);
}
console.log("At the end...");