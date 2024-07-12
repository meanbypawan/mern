import { Component } from "react";
import Data from "./Data";
class App extends Component{
  constructor(){
    super();
    this.state = {
      studentList: Data,
      branchList: ["CS","IT","EC","MECH"],
      defaultBranch: "All",
      isRollExist: false
    }
  }
  deleteStudent = (index)=>{
    this.state.studentList.splice(index,1);
    this.setState({studentList: [...this.state.studentList]});
  }
  addRecord = ()=>{
     let roll = this.roll.value;
     let name = this.name.value;
     let contact = this.contact.value;
     let branch = this.branch.value;
     this.state.studentList.push({roll,name,contact,branch});
     this.setState({studentList: [...this.state.studentList]});
  }
  checkRollNumber = ()=>{
    let roll = this.roll.value;
    let status = this.state.studentList.some((student)=>{return student.roll == roll});
    this.setState({isRollExist: status}); 
  }
  render(){
    return <div className="container-fluid">
       <div className="bg-dark p-1">
        <h4 className="text-white text-center">Student App</h4>
       </div>
       <div className="container mt-2 mb-2">
        <div className="row">
          <div className="col-md-6">
            <input onBlur={this.checkRollNumber} ref={(rollInput)=>this.roll=rollInput} id="roll" type="text" placeholder="Enter roll number" className="form-control"/>
            {this.state.isRollExist ? <small className="text-danger">Roll number is already taken</small> : ""}
          </div>
          <div className="col-md-6">
            <input ref={(nameInput)=>this.name=nameInput} id="name" type="text" placeholder="Enter your name" className="form-control"/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <input ref={(contactInput)=>this.contact = contactInput} id="contact" type="text" placeholder="Enter contact number" className="form-control"/>
          </div>
          <div className="col-md-6">
             <select ref={(branchInput)=>this.branch = branchInput} id="branch" className="form-control">
                <option>Select Branch</option>
                {this.state.branchList.map((branch,index)=><option key={index}>{branch}</option>)}
             </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <button onClick={this.addRecord} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-6">
            <button onClick={()=>this.setState({defaultBranch: "CS"})} className="btn btn-primary ml-2">CS ({this.state.studentList.filter((student)=>student.branch=="CS").length})</button>
            <button onClick={()=>this.setState({defaultBranch: "IT"})} className="btn btn-warning ml-2">IT ({this.state.studentList.filter((student)=>student.branch=="IT").length})</button>
            <button onClick={()=>this.setState({defaultBranch: "EC"})} className="btn btn-info ml-2">EC ({this.state.studentList.filter((student)=>student.branch=="EC").length})</button>
            <button onClick={()=>this.setState({defaultBranch: "MECH"})} className="btn btn-danger ml-2">MECH ({this.state.studentList.filter((student)=>student.branch == "MECH").length})</button>
            <button onClick={()=>this.setState({defaultBranch: "All"})} className="btn btn-secondary ml-2">Total ({this.state.studentList.length})</button>
          </div>
        </div>
       </div>
       <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Roll number</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.filter((student)=>student.branch == this.state.defaultBranch || this.state.defaultBranch == "All").map((student,index)=><tr key={index}>
              <td>{index+1}</td>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.contact}</td>
              <td>
                <button onClick={()=>this.deleteStudent(index)} className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>)}      
          </tbody>
        </table>
       </div>
    </div>
  }
}
export default App;
