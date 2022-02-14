import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#"><img src="logo.png" className="app-logo"/></a>        
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                    <Link to="/items" className="nav-link">Items</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>                                               
            </ul>
            <ul className="navbar-nav justify-content-end">
                <li class="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li class="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>            
        </nav>
    )
}

export default Header;