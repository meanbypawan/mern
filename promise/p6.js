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

// Promise chaining
first(10)
.then(result=>{return second(result)})
.then(result=>{return third(result)})
.then(result=>fourth(result));
/*
first(10).then((result)=>{
    second(result).then((result)=>{
        third(result).then((result)=>{
            fourth(result);
        });
    })
}).catch();
*/