import { Component } from "react";

class AddAndFilter extends Component{
    render(){
        let {studentList,checkRollNumber,addRecord,branchList,setDefaultBranch,isRollExist} = this.props;
        return <>
         <div className="container mt-2 mb-2">
        <div className="row">
          <div className="col-md-6">
            <input onBlur={()=>checkRollNumber(this.roll.value)} ref={(rollInput)=>this.roll=rollInput} id="roll" type="text" placeholder="Enter roll number" className="form-control"/>
            {isRollExist ? <small className="text-danger">Roll number is already taken</small> : ""}
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
                {branchList.map((branch,index)=><option key={index}>{branch}</option>)}
             </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <button onClick={()=>addRecord(this.roll.value,this.name.value,this.contact.value,this.branch.value)} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-6">
            <button onClick={()=>setDefaultBranch("CS")} className="btn btn-primary ml-2">CS ({studentList.filter((student)=>student.branch=="CS").length})</button>
            <button onClick={()=>setDefaultBranch("IT")} className="btn btn-warning ml-2">IT ({studentList.filter((student)=>student.branch=="IT").length})</button>
            <button onClick={()=>setDefaultBranch("EC")} className="btn btn-info ml-2">EC ({studentList.filter((student)=>student.branch=="EC").length})</button>
            <button onClick={()=>setDefaultBranch("MECH")} className="btn btn-danger ml-2">MECH ({studentList.filter((student)=>student.branch == "MECH").length})</button>
            <button onClick={()=>setDefaultBranch("All")} className="btn btn-secondary ml-2">Total ({studentList.length})</button>
          </div>
        </div>
       </div>
        </>
    }
}

export default AddAndFilter;