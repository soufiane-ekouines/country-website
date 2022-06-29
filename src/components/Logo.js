import React from 'react';
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
    <NavLink to="/">
        <div className='logo'>
            {/* the images is import in img from public  */}
            <img src='./logo192.png' alt='logo react'/>
            <h3>React World</h3>
        </div>
        </NavLink>
    );
};

export default Logo;