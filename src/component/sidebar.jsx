import { useState } from "react";

const SideBar = ({ checked }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <>
            <div
                onMouseMove={handleMouseMove}
                className={`wrapper ${checked ? 'active' : ''} z-40 fixed top-0 right-0 w-3/6 bg-white text-black h-full text-3xl`}
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
                <div className='flex justify-center items-center h-full'>
                    <ol className='flex flex-col'>
                        <li>Home</li>
                        <li>Contact us</li>
                        <li>Number</li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default SideBar;
