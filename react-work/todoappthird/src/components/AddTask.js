import { useState } from "react"

export default function AddTask({dispatch,priorityList}){
    const [title,setTitle] = useState();
    const [pid,setPid] = useState();
    const addTask = ()=>{
        let date = new Date();
        date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        let status = "Active";
        dispatch({type:"AddNewTask",payload:{title,pid,date,status}});
    }
    return <>
      <div className="container mt-3 mb-3">
        <div className="row">
            <div className="col-md-6">
                <input onChange={(event)=>setTitle(event.target.value)} type="text" placeholder="Enter task title" className="form-control"/>
            </div>
            <div className="col-md-6">
              <select onChange={(event)=>setPid(event.target.value)} className="form-control">
                {priorityList.map((obj,index)=><option key={index} value={obj.priorityId}>{obj.priorityValue}</option>)}
              </select>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-md-6">
                <button onClick={addTask} className="btn btn-primary">ADD</button>
            </div>
        </div>
      </div>
    </>
}