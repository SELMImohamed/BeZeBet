import React from 'react';
import { Link } from "react-router-dom";


import '../index.css';

const NavBar = () =>{
    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/bet">Bet</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;