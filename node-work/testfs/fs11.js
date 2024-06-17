import fs from "fs";
const readStream  = fs.createReadStream("./data.txt");
const writeStream = fs.createWriteStream("./xyz.txt");
readStream.pipe(writeStream);