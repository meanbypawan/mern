import { Component } from "react";

class MultiCounter extends Component{
    constructor(){
        super();
        this.state = {
            evenCounter : 100,
            oddCounter : 101
        }
    }
    render(){
        return <>
           <h3>Multi counter component</h3>
           <hr/>
           <button onClick={()=>this.setState({evenCounter: this.state.evenCounter+2})}>Even Counter : {this.state.evenCounter}</button>
           <button onClick={()=>this.setState({oddCounter: this.state.oddCounter+2})}>Odd Counter : {this.state.oddCounter}</button>
        </>
    }
}
export default MultiCounter;