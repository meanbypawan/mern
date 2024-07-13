import { Component } from "react";

class Table extends Component{
    render(){
        let {studentList, defaultBranch}= this.props;
        return <>
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
            {studentList.filter((student)=>student.branch == defaultBranch || defaultBranch == "All").map((student,index)=><tr key={index}>
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
        </>
    }
}
export default Table;