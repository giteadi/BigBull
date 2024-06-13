import { useEffect, useState, useRef } from "react";

const SideBar = ({ checked, setChecked }) => {
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    const sidebarRef = useRef(null);

    const handleMouseMove = (e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (event) => {
        // console.log(sidebarRef, event);
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            console.log(sidebarRef, event);
            setChecked(false);
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {checked && <div className="backdrop" />}
            <div
                ref={sidebarRef}
                // onMouseMove={handleMouseMove}
                className={`wrapper ${checked ? 'active' : ''} z-40 fixed right-0 bg-white text-black h-full`}
            >
                {/* <span
                    className="circle"
                    style={{
                        left: `${position.x - 50}px`, // Adjust for half the width
                        top: `${position.y - 50}px`,  // Adjust for half the height
                        height: 32,
                        width: 32,
                        borderRadius: "50%",
                        position: "fixed",
                        backgroundColor: "black",
                        pointerEvents: "none",
                        zIndex: 50,
                    }}
                ></span> */}
                <div className='h-full flex justify-center items-center '>
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
