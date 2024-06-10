/*
  Universal Informatics Student
    
    Properties :-
     enrollmentNumber,
     batch
     startDate
     paidFees
     dueFees
     Qualification
     isBreakTaken
     batchTime
    Behaviour :-
      applyForBreakForm();
      applyForNewBatch();
      applyForPlacements();
      appearInTest()
      viewTestMark() 
*/
/*
  Arithmetic
    properties :- a,b
    behaviours: - add(),sub(),mult()
*/
class Arithmetic{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        console.log("Addition : "+(this.a + this.b));
    }
    sub(){
        console.log("Sub : "+(this.a - this.b));
    }
    mult(){
        console.log("Multiplication : "+(this.a * this.b));
    }
    static info(){
        console.log("This class has 2 properties of int type.");
        console.log("And Three Behaviour : add(), sub(), mult()");
    }
}

Arithmetic.info();
var obj = new Arithmetic(20,5);
obj.add();
obj.sub();
obj.mult();
