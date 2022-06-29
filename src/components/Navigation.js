import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={nav =>(nav.isActive ? "nav-active":"")}>
                    <li> Home</li>
                </NavLink>
                <NavLink to="/About" className={nav =>(nav.isActive ? "nav-active":"")}>
                    <li> About</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;