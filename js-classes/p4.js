/*
  Super,
  sub-class
*/
class A{
   constructor(){
    console.log("A-constructor called..");
   }
   m2(){
    console.log("A-m1()");
   } 
}
class B extends A{
   constructor(){
    super();
    console.log("B-constructor called...");
   }
   m1(){
    console.log("B-m1()");
    this.m2();
   }
}
class C extends B{

}
var obj = new B();
obj.m1();
obj.m2();