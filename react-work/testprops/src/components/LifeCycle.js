import { Component } from "react";

class LifeCycle extends Component{
    constructor(){
        super();
        this.state = {
            counter : 10
        }
        console.log("Constructor called...");
    }
    render(){
       console.log("render called...."); 
       return <>
         <h1>LifeCycle component..</h1>
         <button onClick={()=>this.setState({counter: this.state.counter + 1})}>Counter : ({this.state.counter})</button>
       </>
    }
    componentDidMount(){
        console.log("Component Did Mount Called...");
    }
    componentDidUpdate(){
        console.log("Component Did Update Called...");
    }
    componentWillUnmount(){
        console.log("component Will Unmount...");
    }
}
export default LifeCycle;