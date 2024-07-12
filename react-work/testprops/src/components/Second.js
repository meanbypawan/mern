import { Component } from "react";

class Second extends Component{
    render(){
        let {fruitList} = this.props; //{fruitList:[]}
        return <>
           <h3>Second Component...</h3>
           {fruitList.map((fruit,index)=><h1>{fruit}</h1>)}
        </>
    }
}

export default Second;