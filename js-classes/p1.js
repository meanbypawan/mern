/*
   Customer
     properties :- (id,name,email,mobile,age,bal)
     behavoiurs :- withdrawal(), deposite(), balancEnquiry()
  var customer= {
    id:100,
    name: 'ABC',
    email: "abc@gmail.com",
    mobile: "9009111222",
    age: 25,
    bal: 5000,
    withdrawal : function(amount){
        this.bal = this.bal - amount;
        console.log("Withdrawal Success...");
    }
  }

  function Customer(id,name,email,age,mobile){
    this.bal = 50000;
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.mobile = mobile;
    this.witdrawal = function(amount){
        this.bal -= amount;
        console.log("Withdrawal success...");
    }
  }
  var customer = new Customer(100,"ABC","abc@gmail.com",24,"
  90099111");
  customer.withdrawal();
*/
class Customer{
   constructor(id,name,email,age,bal){
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.bal = bal;
   }
   withdrawal(amount){
     this.bal -= amount;
     console.log("Available bal : "+this.bal);
     console.log("Withdrawal success...");
   }
}

var customer = new Customer(100,"ABC","abc@gmail.com",24,50000);
customer.withdrawal(9000);