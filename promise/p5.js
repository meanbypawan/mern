/*
  class Promise{
    static all(arrayOfPromises){
        return this;
    }
  }
*/
var roomCleaning = ()=>{
    console.log("Room Cleaning Triggered...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("Room Cleaned...");
            reject("Room cleaning failed...");
        },5000);
    });
}
var removingGarbage = ()=>{
    console.log("RemovingGarbage  Triggered...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Garbage removing failed...");
            //resolve("Garbage removed...");
        },3000);
    });
}

Promise.all([roomCleaning(),removingGarbage()])
.then((result)=>{ // result = [0,1]
    console.log(result[0]);
    console.log(result[1]);
    console.log("Wow, I got an ice-cream");
}).catch((rejectedResult)=>{
    console.log(rejectedResult);
    console.log("Bad luck, Ice-cream lost");
});




