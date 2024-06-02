var p = new Promise((resolve,reject)=>{
   //resolve("Wow promise is resolved...");
   reject("Bad luck Promise is rejected....");
});

p.then((resolvedValue)=>{
    console.log(resolvedValue);
})
.catch((rejectedValue)=>{
    console.log("Catch callback is executed....");
    console.log(rejectedValue);
});