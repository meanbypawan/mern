export default function TaskList({dispatch,taskList,priorityList,defaultStatus}){
  return  <>
     <div className="container mt-3">
        <button onClick={()=>dispatch({type:"ChangeDefaultStatus", payload: "Active"})} disabled={defaultStatus=="Active" ? true: false} className="btn btn-success">Active ({taskList.filter((task)=>{return task.status == "Active"}).length})</button>
        <button onClick={()=>dispatch({type:"ChangeDefaultStatus", payload:"Deactive"})} disabled={defaultStatus=="Deactive" ? true: false} className="ml-2 btn btn-danger">Deactive ({taskList.filter((task)=>{return task.status == "Deactive"}).length})</button>
     </div>
     <div className="container mt-3">
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
             {taskList.filter((task)=>{return task.status==defaultStatus}).sort((a,b)=>{return a.pid-b.pid}).map((task,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{priorityList.find((obj)=>{return obj.priorityId==task.pid}).priorityValue}</td>
                <td>
                    <button className="btn btn-secondary">{task.status == "Active" ? "Deactive" : "Active"}</button>
                </td>
             </tr>)}
           </tbody>
        </table>
     </div>
  </>
}