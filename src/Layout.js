import { Outlet,Link } from "react-router-dom"; 
import React from "react"; 
import {FaHome, FaReact, FaChrome} from "react-icons/fa";
import './Layout.css'


const Layout = () => {
    return(
        <div className="tao">
            <nav>
                <ul className="header">
                
                    <li>
                    
                        <Link to= "/Home"> Home  </Link>
                    </li>
                    <li>
                        
                        <Link to="/Basic "> About </Link>
                    </li>
                    <li>
                   
                        <Link to="/Contact"> Contact </Link>
                    </li>
                    
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};
export default Layout;