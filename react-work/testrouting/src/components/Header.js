import { Link } from "react-router-dom";

export default function Header(){
    return <>
      <div className="header bg-dark d-flex justify-content-around align-items-center" style={{height:"70px"}}>
        <Link to="/">
          <small style={{cursor: "pointer"}} className="p-3 bg-danger text-white">Home</small>
        </Link>
        <Link to="/about">
         <small style={{cursor: "pointer"}} className="p-3 bg-danger text-white">About us</small>
        </Link>
        <Link to="/useEffectDemo">
          <small style={{cursor: "pointer"}} className="p-3 bg-danger text-white">useEffect</small>
        </Link>
        <Link to="/categories">
          <small style={{cursor: "pointer"}} className="p-3 bg-danger text-white">Categories</small>
        </Link>
        <small style={{cursor: "pointer"}} className="p-3 bg-danger text-white">Product</small>
      </div>
    </>
}
