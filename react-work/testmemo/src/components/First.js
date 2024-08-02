import React from "react";
/*
  class Test extends Component{
     constructor(){
        super();
        thi.state = {
          counter: 100
        }
     }
     shouldComponentUpdate(){
       
     }   
     render(){
        return <>
          <button onClick={()=>this.setState({counter: this.state.counter+1})}>Counter : {this.state.counter}</button>
        </>
     } 
  }
*/
function First(){
    console.log("First Component Render....");
    return <>
      <h6>First Component...</h6>
    </>
}

const MemoizedFirst =  React.memo(First);
export default MemoizedFirst;