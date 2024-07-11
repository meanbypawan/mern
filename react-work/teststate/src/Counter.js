import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 100
        }
    }
    incrementCounter = ()=>{
        this.setState({counter: this.state.counter + 1})
    }
    render(){
        console.log("render() called...");
        return <>
          <h4>Counter Component</h4>
          <hr/>
          <button onClick={this.incrementCounter}>Counter : {this.state.counter}</button>
        </>
    }
}

export default Counter;