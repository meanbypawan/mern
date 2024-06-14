import fs from "fs";
try{
if(fs.existsSync('./combined.txt')){
    let data = fs.readFileSync("./combined.txt","utf8");
    console.log(data);
}
}catch(err){
    console.log(err);
}