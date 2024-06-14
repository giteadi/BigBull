import { useEffect, useState, useRef } from "react";

const SideBar = ({ checked, setChecked }) => {
   
    return (
        <>
            {checked && <div className="backdrop" />}
            <div
                // onMouseMove={handleMouseMove}
                className={`wrapper ${checked ? 'active' : ''} z-40 fixed right-0 bg-white text-black h-full `}
            >   <div className='h-full flex justify-center items-center '>
                    <ol className=''>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Sign-in</li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default SideBar;
