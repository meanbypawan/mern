import { Component } from "react";

class App extends Component{
  sayHello = ()=>{
    window.alert("Hello friends...");
  }
  render(){
    let x  = 404;
    let fruitList = ["Mango","Graphs","Banana","Cheeku","Apple","Strawberry"];
    let status = false;
    return <div>
      <h1>{x}</h1> 
      {fruitList.map((fruit,index)=><h1>{fruit}</h1>)}
      {status ? <h1>Hello</h1> : <h1>hii</h1>} 
      <button onClick={this.sayHello}>Say Hello</button>
    </div>
  }
}
export default App;
