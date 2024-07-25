import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function Header() {
    let {categoryList} = useSelector((store)=>store.Categories);
    return <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#"><b>E-</b><small className="text-danger">Shop</small></a>
             <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">Products</Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Categories
                    </a>
                    <div className="dropdown-menu">
                        {categoryList.map((category,index)=><a key={index} className="dropdown-item" href="#">{category.name}</a>)}
                        
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sign-in">Sign In</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">Sign Up</Link>
                </li>
            </ul>
        </nav>
    </>
}