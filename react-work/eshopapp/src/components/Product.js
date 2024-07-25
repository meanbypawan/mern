import axios from "axios";
import { useEffect, useState } from "react"
import WebApis from "../apis/WebApis";
import Header from "./Header";

export default function Product(){
  const [productList,setProductList] = useState([]);  
  useEffect(()=>{
    loadProducts();
  },[]);
  const loadProducts = async ()=>{
    try{
     let response = await axios.get(WebApis.PRODUCT_LIST);
     setProductList(response.data.products);
     console.log(response.data.products);
    }
    catch(err){
        console.log(err);
    }
  }
  return <>
     <div className="container">
        <div className="row">
           {productList.map((product,index)=><div key={index} className="col-md-3 p-2">
                <div className="d-flex flex-column align-items-center" style={{width:"100%", boxShadow:"10px 10px 10px black"}}>
                    <img src={product.thumbnail} style={{width:"100%", height:"200px"}}/>
                    <h6 className="mt-2">{product.title.substring(0,25)}</h6>
                    <small>Price: <b><label className="text-success">{product.price} Rs.</label></b></small>
                    <small className="mb-1 text-primary" style={{cursor:"pointer"}}>View more</small>
                    <button className="btn btn-secondary" style={{width:"100%"}}>Add To Cart</button>
                </div>
            </div>)} 
        </div>
     </div>
  </>  
}