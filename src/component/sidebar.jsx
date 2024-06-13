import { useEffect, useState } from "react";

const SideBar = ({ checked }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    console.log(position);

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
                // window.addEventListener('mousemove', handleMouseMove);
                // Clean up the event listener on component unmount
        return () => {
                // window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <>
         {checked && <div className="backdrop" />}
            <div
                onMouseMove={handleMouseMove}
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
