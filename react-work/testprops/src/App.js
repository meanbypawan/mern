import First from "./components/First";
import LifeCycle from "./components/LifeCycle";
import Second from "./components/Second";
import Third from "./components/Third";

const { Component } = require("react");

class App extends Component{
  constructor(){
    super();
    this.state = {
      counter: 100
    }
  }
  incrementCounter = ()=>{
    this.setState({counter: this.state.counter + 1});
  }
  render(){
    return <>
       <h3>App Component</h3>
       <button onClick={this.incrementCounter}>Counter : ({this.state.counter})</button>
       <hr/>
       {/* <First message={message} fruitList={fruitList}/>
       <Second fruitList={fruitList}/> */}
      <Third incrementCounter={this.incrementCounter} counter={this.state.counter}/>
      <LifeCycle/>
    </>
  }
}

export default App;