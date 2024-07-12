import { Component } from "react";

class First extends Component{
    render(){
        return <>
          <h5>First Component [Child of App]</h5>
          <h1>{this.props.message}</h1>
        </>
    }
}

export default First;