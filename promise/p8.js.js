var first  = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Inside First : "+n);  
          resolve(n+2);
        },3000);
    });
}
var second  = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Inside Second : "+n);  
          resolve(n+2);
        },5000);
    });
}
var third  = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Inside Third : "+n);  
          resolve(n+2);
        },4000);
    });
}
var fourth  = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Inside Fourth : "+n);  
          resolve(n+2);
        },1500);
    });
}
async function executeTask(){
  var result = await first(10);
  result = await second(result);
  result = await third(result);
  await fourth(result);   
}

executeTask();