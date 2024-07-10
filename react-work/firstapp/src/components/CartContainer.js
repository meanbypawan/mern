import { Component } from "react";
import Card from "./Card";

class CartContainer extends Component{
    render(){
        return <div className="container mt-3">
          <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
    }
}

export default CartContainer;