import { useEffect, useState, useRef } from "react";
import {Link } from 'react-router-dom';
import styled from "styled-components";

const SideBar = ({ checked }) => {
   
    return (
        <>
        <Contaienr>

            {checked && <div className="backdrop" />}
            <div
                // onMouseMove={handleMouseMove}
                className={`wrapper ${checked ? 'active' : ''} z-40 pt-16 sm:p-0  fixed right-0 bg-white text-black h-screen sm:h-full `}
            >   
                <div className='h-full flex justify-center items-center '>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                        <li><Link to="/Cart">Cart</Link></li>
                        <li><Link to="/EnrollForm">Enroll Now</Link></li>
                    </ol>
                </div>
            </div>
            </Contaienr>
        </>
    );
};

export default SideBar;
const Contaienr = styled.div`
    
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 39; 
  }

`