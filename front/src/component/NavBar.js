import React from 'react';
import { Link } from "react-router-dom";


import '../index.css';

const NavBar = () =>{
    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/classement">Classement</Link>
                </li>
                <li>
                    <Link to="/tuto">Tutoriel</Link>
                </li>
                <li>
                    <Link to="/profil">Profil</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;