import { Component } from "react";

class Third extends Component{
    constructor(){
        super();
    }
    render(){
        return <>
           <h3>Third Child Component</h3>
           <button onClick={()=>this.props.incrementCounter()}>Counter : ({this.props.counter})</button>
        </>
    }
}
export default Third;