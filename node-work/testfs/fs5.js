import fs from "fs";
try{
 let f1Data = fs.readFileSync("./f1.txt");
 let f2Data = fs.readFileSync("./f2.txt");
 fs.writeFileSync("./combined.txt",f1Data+"\n"+f2Data);
 console.log("O[eration success....");
}
catch(err){
    console.log(err);
}