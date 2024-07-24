import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCategory } from "../redux-config/CategorySlice";

export default function Category(){
    const dispatch = useDispatch();
    let {categoryList,isLoading,error} = useSelector((store)=>store.CategoriesData);
    useEffect(()=>{
        dispatch(fetchCategory());
    },[])
    return <>
      <hr/>
      <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Slug</th>
                    <th>Name</th>
                    <th>Url</th>
                </tr>
            </thead>
            <tbody>
                {categoryList.map((category,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{category.slug}</td>
                    <td>{category.name}</td>
                    <td>{category.url}</td>
                </tr>)}
            </tbody>
        </table>
      </div>
    </>
}