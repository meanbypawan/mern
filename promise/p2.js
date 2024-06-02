/*
 Promise is an object
 It is used to handle multiple asynchronous operation easily.
 It used to prevent callback hell
 It return result in future (either fullfilled or rejected).

 State :-
   Pending
   Fullfilled
   Rejected
   Settled
class Promise{
   constructor(f1){
     f1(()=>{},()=>{});
   }
   then(f){
     f(you can pass data here);
     return Promise Object;
   }
   catch(f){
    f("you can pass data here [error]");
   }
} 
var p = new Promise();
*/
var p = new Promise((resolve,reject)=>{
   //resolve();
   reject();
});

p.then(()=>{
    console.log("Wow! Promise is resolved..");
})
.catch(()=>{
    console.log("Bad luck . Promise is rejected...");
});











