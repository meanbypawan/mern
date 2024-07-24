import { useSelector } from "react-redux"

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
                    <a className="nav-link" href="#">Products</a>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Categories
                    </a>
                    <div className="dropdown-menu">
                        {categoryList.map((category,index)=><a key={index} className="dropdown-item" href="#">{category.name}</a>)}
                        
                    </div>
                </li>
            </ul>
        </nav>
    </>
}