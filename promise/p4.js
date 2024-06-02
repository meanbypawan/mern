var first = ()=>{
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve();
     },5000);
  });
}

first().then(()=>{
    console.log("Then executed..Promise resolved");
}).catch(()=>{
    console.log("Catch executed...Promise is rejected..");
});