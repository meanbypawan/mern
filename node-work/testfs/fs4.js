import fs from "fs";
try{
fs.writeFileSync("./xyz.txt","Hello friends...");
console.log("Operation success");
}
catch(err){
    console.log(err);
}