import React from 'react';
import { Link } from "react-router-dom";


import '../index.css';

const NavBar = () =>{
    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Profil</Link>
                </li>
                <li>
                    <Link to="/">Classement</Link>
                </li>
                <li>
                    <Link to="/">Tutoriel</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;