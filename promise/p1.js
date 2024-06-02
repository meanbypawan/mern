var first = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside first : "+n);
        callback(n+2);
    },5000);
}

var second = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside second : "+n);
        callback(n+2);
    },3000);
}

var third = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside Third : "+n);
        callback(n+2);
    },1000);
}

var fourth = (n)=>{
    setTimeout(()=>{
        console.log("Inside Fourth : "+n);
    },1500);
}

// callback hell :- solution (promise)
first(10,(n)=>{
    second(n,(n)=>{
        third(n,(n)=>{
            fourth(n+2);
        })
    });
});