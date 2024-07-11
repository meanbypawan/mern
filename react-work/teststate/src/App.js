import { Component } from "react";
import Counter from "./Counter";
import MultiCounter from "./MultiCounter";

class App extends Component{
  render(){
    return <>
      <Counter/>
      <MultiCounter/>
    </>
  }
}
export default App;
