import { useEffect, useState, useRef } from "react";
import {Link } from 'react-router-dom';

const SideBar = ({ checked }) => {
   
    return (
        <>
            {checked && <div className="backdrop" />}
            <div
                // onMouseMove={handleMouseMove}
                className={`wrapper ${checked ? 'active' : ''} z-40 fixed right-0 bg-white text-black h-full `}
            >   
                <div className='h-full flex justify-center items-center '>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                        <li><Link to="/Cart">Cart</Link></li>
                        <li><Link to="/EnrollNow">Enroll Now</Link></li>``
                    </ol>
                </div>
            </div>
        </>
    );
};

export default SideBar;
