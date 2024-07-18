import { useReducer } from "react";
import Header from "./components/Header";
import Data from "./Data";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
export default function App(){
  const [state,dispatch] = useReducer((state,action)=>{
    if(action.type=="ChangeDefaultStatus"){
       state.defaultStatus = action.payload;
    }
    else if(action.type=="AddNewTask"){
      let newTask = action.payload;
      state.taskList.push(newTask);
    }
    return {...state};
  },{
    taskList: Data,
    priorityList: [{priorityId:1, priorityValue: "High"},{priorityId:2, priorityValue: "Medium"},{priorityId:3, priorityValue: "Low"}],
    defaultStatus: "Active"
  });
  return <>
    <Header/>
    <AddTask dispatch={dispatch} priorityList={state.priorityList}/>
    <TaskList dispatch={dispatch} defaultStatus={state.defaultStatus} taskList={state.taskList} priorityList={state.priorityList}/>
  </>
}