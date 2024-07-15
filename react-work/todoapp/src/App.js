import { useState } from "react";
import Data from "./Data";
function App(){
   const [taskList,setTaskList] = useState(Data);
   const [defaultStatus,setDefaultStatus] = useState("Active");
   const [priorityList,setPriorityList] = useState([{priorityId:1, priorityValue:"High"},{priorityId:2, priorityValue:"Medium"},{priorityId:3, priorityValue:"Low"}])
   return <>
      <div className="header">
        <h1 className="bg-dark text-white p-2 text-center">ToDo App</h1>
      </div>
      <div className="container mt-3">
        <div>
          <button onClick={()=>setDefaultStatus("Active")} disabled={defaultStatus == "Active" ? true : false} className="btn btn-success">Active ({taskList.filter((task)=>{return task.status == "Active"}).length})</button>
          <button onClick={()=>setDefaultStatus("Deactive")} disabled={defaultStatus == "Deactive" ? true : false} className="btn btn-danger ms-2">Deactive ({taskList.filter((task)=>{return task.status == "Deactive"}).length})</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Update status</th>
            </tr>
          </thead>
          <tbody>
            {taskList.filter((task)=>task.status==defaultStatus).sort((a,b)=>{return a.pid-b.pid}).map((task,index)=><tr key={index} className={task.pid==1 ? "bg-danger" : task.pid==2 ? "bg-orange" : "bg-green"}>
              <td>{index+1}</td>
              <td>{task.title}</td>
              <td>{task.date}</td>
              <td>{priorityList.find((obj)=>{return obj.priorityId==task.pid}).priorityValue}</td>
              <td>
                <button className="btn btn-outline-primary">{task.status}</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
   </> 
}
export default App;
