import First from "./components/First";
import Second from "./components/Second";

const { Component } = require("react");

class App extends Component{
  render(){
    let message = "Hello First";
    let fruitList = ["Mango","Banana","Cheeku","Apple","Graphes","Pineapple"];
    return <>
       <h3>App Component</h3>
       <hr/>
       <First message={message} fruitList={fruitList}/>
       <Second fruitList={fruitList}/>
    </>
  }
}

export default App;