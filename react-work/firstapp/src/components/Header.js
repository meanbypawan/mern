import { Component } from "react";

class Header extends Component{
    render(){
      return <div className="header-height container-fluid bg-dark">
        <div className="row">
            <div className="col-md-2 p-2 d-flex flex-column align-items-center">
                <h5 className="text-white" style={{margin:"0"}}>Shop App</h5>
                <small className="text-white">Do shopping at single click</small>
            </div>
            <div className="col-md-8 header-height d-flex align-items-center">
                <input className="form-control" type="text" placeholder="Search product by title"/>
            </div>
            <div className="col-md-2 header-height d-flex justify-content-around align-items-center">
                <small className="text-white">Sign in</small>
                <small className="text-white">Sign up</small>
            </div>
        </div>
      </div>
    }
}
export default Header;