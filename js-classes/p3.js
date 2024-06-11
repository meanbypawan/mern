/*
  Inheritance :-
    By using existing thing to develop something new
    but there should not be any changes 
    in existing one.  
*/
class J5{
   receivingCall(){
    console.log("Call Received");
   }
   rejectingCall(){
    console.log("Call rejected....");
   }
} // 10000
class J7 extends J5{
    camera(){
        console.log("Photo clicked...");
    }
}

var j5 = new J5(); 
j5.receivingCall();
j5.rejectingCall();

var obj = new J7(); // J7 IS-A J5
obj.receivingCall();
obj.rejectingCall();
obj.camera();

