import { Component } from "react";
import Data from "./Data";
class App extends Component{
  constructor(){
    super();
    this.state = {
      studentList: Data
    }
  }
  deleteStudent = (index)=>{
    this.state.studentList.splice(index,1);
    this.setState({studentList: [...this.state.studentList]});
  }
  render(){
    return <div className="container-fluid">
       <div className="bg-dark p-1">
        <h4 className="text-white text-center">Student App</h4>
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
            {this.state.studentList.map((student,index)=><tr key={index}>
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
