import React from "react";
import {Link} from 'react-router-dom';
import logo  from '../../assets/images/image.png'
import '../layout/Header.css'

function Header() {
    return (
        <>
        <div className="Header-logo">
           <img src={logo} alt="Coffee Corner Logo" height="60px" />
        </div>
        <div className="navbar">
            <ul>
                 
                <Link to="/">Home</Link> 
                
                
                <Link to="/addmenu">Addmenu</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/dash">Dashboard</Link>
                <Link to="/updatemenu">Updatemenu</Link>
                
                <Link to="/man">Manage</Link>
                
            </ul>
         </div>   
        </>

    );
}
export default Header;