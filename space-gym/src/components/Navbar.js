import React from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import {Link} from "react-router-dom";

export function Navbar() {

    return <div classNameName="container-fluid ">
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/admin">Admin</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/registration">Registration</Link>
                </li>
            </ul>
            </nav>

              
         </div>
    
};

