import axios from "axios";
import { useEffect, useReducer, useState } from "react"

export default function Category(){
    const [categoryList,setCategoryList] = useState([]);
    useEffect(()=>{
        loadCategories();
    },[]);
    const loadCategories = ()=>{
        axios.get("https://dummyjson.com/products/categories")
        .then(response=>{
           setCategoryList(response.data);
         })
        .catch(err=>{
            console.log(err);
        });
    }
    return <>
      <div className="container mt-3">
        {categoryList.length==0 ?<div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center"> <button class="btn btn-primary">
           <span class="spinner-border spinner-border-sm"></span>
        </button> </div>: ""}
        <table className="table">
          <thead>
            <tr>
                <th>S.no</th>
                <th>Slug</th>
                <th>Category name</th>
                <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((category,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{category.slug}</td>
                <td>{category.name}</td>
                <td>
                    <button className="btn btn-danger">Remove</button>
                </td>
            </tr>)}            
          </tbody>
         </table>
      </div>
    </>
}