import { Component } from "react";
import Data from "./Data";
import Table from "./components/Table";
import Header from "./components/Header";
import AddAndFilter from "./components/AddAndFilter";
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
  addRecord = (roll,name,contact,branch)=>{
     this.state.studentList.push({roll,name,contact,branch});
     this.setState({studentList: [...this.state.studentList]});
  }
  checkRollNumber = (roll)=>{
    let status = this.state.studentList.some((student)=>{return student.roll == roll});
    this.setState({isRollExist: status}); 
  }
  setDefaultBranch = (branchName)=>{
    this.setState({defaultBranch: branchName});
  }
  render(){
    return <div className="container-fluid">
       <Header/>
       
       <AddAndFilter checkRollNumber={this.checkRollNumber} addRecord={this.addRecord} branchList={this.state.branchList} setDefaultBranch={this.setDefaultBranch} isRollExist={this.state.isRollExist} studentList={this.state.studentList}/>

       <div className="container mt-3">
         <Table studentList={this.state.studentList} defaultBranch={this.state.defaultBranch}/>
       </div>
    </div>
  }
}
export default App;
