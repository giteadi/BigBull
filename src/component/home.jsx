import styled from 'styled-components'
import { IoMenu } from "react-icons/io5";
import {NavLink} from 'react-router-dom';
import logo from './../../public/logo/logo.png'
import { SiOpenlayers } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import heroBackground from '../Assets/hero.mp4'
// import heroBackground from '../Assets/hero.mp4'
import mobileFrameVideo from '../Assets/mobileFrameVideo.mp4';
import tableFrame from '../Assets/tableFrame.png'
import mobileFrame from '../Assets/mobileFrame.png'
import courseFeatureBackground from '../Assets/courseFeatureBackground.jpg'
import SementicRightImage from '../Assets/SementicRightImage.png'
import bullImage from '../Assets/BULL.png'
import coursePageCover from '../Assets/coursePageCover.webp'
import courseThumbain from '../Assets/courseThumbnail.jpg'
import blanckBackground from '../Assets/blanckBackground.png'
import courseImage1 from '../Assets/courseImage1.webp'
import courseImage2 from '../Assets/courseImage2.webp'
import courseImage3 from '../Assets/courseImage3.webp'
import { useRef, useEffect, useState } from 'react';
import Contact from './Priyanshu2/contactUs';
import Footer from './Priyanshu2/footer';
// import Testimonial from './Priyanshu2/testimonial';
import Carousel from './Priyanshu2/carousel';
import Faq from './Priyanshu2/faq';
import Awards from './Aditya/Awards';
import About from './Aditya/About';
import SideBar from './sidebar';


// const courseFeature = [
//     'https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// ];

const createObserver = (ref, className) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          entry.target.classList.remove(className);
        }
      },
      { threshold: 0.1 }
    );
  
    if (ref.current) {
      observer.observe(ref.current);    
    }
  
    return observer;
  };
  
  const closeObserver = (ref, observer) => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
const Home = () => {
    const [navbar, setNavbar] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const sectionRef3 = useRef(null);
    const sectionRef4 = useRef(null);
    const sectionRef5 = useRef(null);

    const handleClickOutside = (event) => {
        let target = event.target;
        // console.log(target);
        if(target.classList[0] == 'backdrop') setIsChecked(false);
    };

    const changeBackground = () => {
        // console.log(window.scrollY); 
        if (window.scrollY >= 80) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
      
    //   console.log('hello')

    useEffect(() => {
    const observer1 = createObserver(sectionRef1, 'feature-course-page');
    const observer2 = createObserver(sectionRef2, 'sementic');
    const observer3 = createObserver(sectionRef3, 'course-animation');
    const observer4 = createObserver(sectionRef4, 'header-static');
    const observer5 = createObserver(sectionRef5, 'callToAction-animation');
    window.addEventListener('scroll', changeBackground);
    const card = document.querySelectorAll('.card');
    window.addEventListener('mousedown', handleClickOutside);

    card.forEach((eachCard) => {
        eachCard.addEventListener('mousemove', (e) => {
            const rect = eachCard.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.
        
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
        
            const rotateX = ((y - centerY) / centerY) * 5;
            const rotateY = ((x - centerX) / centerX) * -5;
        
            eachCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    })
    
  
      return () => {
        closeObserver(sectionRef1, observer1);
        closeObserver(sectionRef2, observer2);
        closeObserver(sectionRef3, observer3);
        closeObserver(sectionRef4, observer4);
        closeObserver(sectionRef5, observer5);
        window.removeEventListener('scroll', changeBackground);
        window.removeEventListener('mousedown', handleClickOutside);

        card.forEach((eachCard) => {
            eachCard.addEventListener('mouseleave', () => {
                eachCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        })};
    }, []);
    return (
        <>
            <LandingPage >
                <div>
                    <div>
                        <SideBar checked={isChecked}/>
                    </div>
                    <header ref={sectionRef4} className={`${navbar ? 'bg-white' : ''} z-50 w-full fixed top-0`}>
                        <nav className='flex justify-between w-full'>
                            <div className='w-32' >
                                <img src={logo} alt="Logo" width='100%' />
                            </div>
                            {/* Center nav bar */}
                            <div className='hidden'>
                                <div className='flex'>
                                    <div>
                                        <NavLink>Home</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Courses</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Blogs</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>About</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Contact</NavLink>
                                    </div>
                                </div>
                                {/* login logout */}
                                <div>
                                    <button>Get Started</button>
                                </div>
                            </div>
                            <div onClick={() => setIsChecked(!isChecked)}>
                                <IoMenu className='menu-bar' size={'3rem'} color={`${navbar || isChecked  ? 'black' : 'white'}`}/>                            
                            </div>
                        </nav>
                    </header>    
                    {/* hero part */}
                    <div className={`hero ${!isChecked || 'brightness-50'} `}>
                        <div className='h-screen' >
                            <video src={heroBackground} autoPlay loop muted className='h-full w-full object-cover'></video>
                            <div className='absolute top-0 text-white h-full flex flex-col justify-center w-4/5 px-5'>
                                <h1 className='font-semibold text-9xl	 leading-tight'>Master the Stock Market with Our Expert-Led Courses</h1>
                                <p className='text-5xl font-normal mt-10 leading-snug '>Learn the secrets of stock market investing from industry professionals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* feature Course Page */}
                <div  ref={sectionRef1} className="">
                <div className='my-10'>
                    <h1 className='text-8xl text-center my-10'>Our Course Feature</h1>
                    {/* container */}
                    <div className='feature-container sm:grid grid-cols-2 flex p-8 py-24 lg:flex gap-20 justify-center flex-wrap '> 
                        {/* card */}
                        <div className='course-feature w-80 bg-white  rounded-lg '>
                            {/* image */}
                            <div className='h-96 rounded-lg  '></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                        <div className='course-feature w-80 bg-white  rounded-lg '>
                            {/* image */}
                            <div className='h-96 rounded-lg  '></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                        <div className='course-feature w-80 bg-white  rounded-lg '>
                            {/* image */}
                            <div className='h-96 rounded-lg  '></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Sementic */}
                <div ref={sectionRef2} className='grid lg:grid-cols-2 sm:grid-cols-1 grid gap-10 px-5 py-20 my-10 '> 
                    {/* left */}
                    <div className='flex flex-col sementic-left flex-wrap'>
                        <div className='self-center'>
                            <h2 className='text-7xl	mb-10 '>Schematic</h2>
                            <button className='text-xl border-2 rounded-3xl border-black py-2 px-7'>Brand Identity</button>    
                        </div>
                        {/* content */}
                        <div className='gap-y-14 mt-14 max-w-md lg:self-end self-center'>
                            <div className='flex gap-11 mb-12'> 
                                {/* numberr */}
                                <div className='text-7xl'>01</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl font-semibold'>Background</h3>
                                    <p className='text-2xl leading-10 mt-3'>Give a brief overview of your project here. 
                                        You may talk about the client brand and the main project challenge.</p>
                                </div>
                            </div>
                            <div className='flex gap-11'> 
                                {/* numberr */}
                                <div className='text-7xl'>02</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl font-semibold'>Solution</h3>
                                    <p className='text-2xl leading-10 mt-3'>Talk about your idea here. Expound a bit on how you solved the challenge and how your work helped your..</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                        <div className='max-w-4xl absolute bull-animation hidden lg:block'>
                            <img src={bullImage} alt="" width="100%" />
                        </div>
                    </div>
                    </div>
                    {/* right */}
                    <div className='content-center sementic-right relative test-tablet'>
                        <div className='max-w-4xl table'>
                            {/* <img src={SementicRightImage} alt="" width="100%" /> */}
                            <video src={heroBackground} autoPlay loop muted className='h-full w-full object-cover'></video>
                            
                        </div>
                        <div className='mobile'>
                            <video src={mobileFrameVideo} autoPlay loop muted className='h-full w-full object-cover'></video>
                            
                        </div>
                    </div>
                </div>
                {/* Courses */}
                <div ref={sectionRef3} className='my-10 py-10'>
                    <h1 className='text-8xl text-center my-10'>Course</h1>
                    {/* container */}
                    <div onScroll className='p-8 flex flex-wrap gap-20 justify-center '> 
                        {/* card */}
                        <div className='card-container'>
                            <div className='course-card card course-card-left rounded-lg p-4 pt-2 '>
                                {/* image */}
                                <div className='h-52 w-80'>
                                    <img src={courseThumbain} alt="" className='h-full object-cover border-8  border-white rounded-2xl	'/>
                                </div>
                                {/* content */}
                                <div className=''>
                                    <div className='max-w-80 py-2 px-3'>
                                        <button className='bg-[#2495D6] text-white py-1 px-3 rounded-md'>Begginer</button>
                                        <p className='text-[#2495D6] my-2.5 '>Programming Language</p>
                                        <p className='font-bold text-xl font-bold		'>Angular - The Complete Guide (2020 Edition)</p>
                                        <p className='text-base	 font-semibold my-2.5 '>From Setup to Deployment, this course it all! You’ll Learn all.</p>
                                    </div>

                                    <div className='flex bg-gray-900 text-white justify-between px-4 py-1 rounded-md	'>
                                        <span>Instructor</span>
                                        <span>Name</span>
                                    </div>
                                    <div className='p-4 flex justify-between font-semibold py-1 px-2'>
                                        <div>
                                            <p className='mb-2 text-xl'>Price Value</p>
                                            <div className='flex'>
                                                <FaStar color='yellow' size={20} />
                                                <FaStar color='yellow' size={20} />
                                                <FaStar color='yellow' size={20} />
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <p className='mb-2 text-xl'>599 Rs.</p>
                                            <button className='text-white bg-red-600 py-1 px-3 rounded-xl '>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className='card-container'>
                            <div className='course-card card course-card-center rounded-lg p-4 pt-2 '>
                                {/* image */}
                                <div className='h-52 w-80'>
                                    <img src={courseThumbain} alt="" className='h-full object-cover border-8  border-white rounded-2xl	'/>
                                </div>
                                {/* content */}
                                <div className=''>
                                    <div className='max-w-80 py-2 px-3'>
                                        <button className='bg-[#2495D6] text-white py-1 px-3 rounded-md'>Begginer</button>
                                        <p className='text-[#2495D6] my-2.5 '>Programming Language</p>
                                        <p className='font-bold text-xl font-bold		'>Angular - The Complete Guide (2020 Edition)</p>
                                        <p className='text-base	 font-semibold my-2.5 '>From Setup to Deployment, this course it all! You’ll Learn all.</p>
                                    </div>

                                    <div className='flex bg-gray-900 text-white justify-between px-4 py-1 rounded-md	'>
                                        <span>Instructor</span>
                                        <span>Name</span>
                                    </div>
                                    <div className='p-4 flex justify-between font-semibold py-1 px-2'>
                                        <div>
                                            <p className='mb-2 text-xl'>Price Value</p>
                                            <div className='flex'>
                                                <FaStar color='yellow' size={20} />
                                                <FaStar color='yellow' size={20} />
                                                <FaStar color='yellow' size={20} />
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <p className='mb-2 text-xl'>599 Rs.</p>
                                            <button className='text-white bg-red-600 py-1 px-3 rounded-xl '>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className='card-container'>
                            <div className='course-card card course-card-right rounded-lg p-4 pt-2 '>
                                {/* image */}
                                <div className='h-52 w-80'>
                                    <img src={courseThumbain} alt="" className='h-full object-cover border-8  border-white rounded-2xl	'/>
                                </div>
                                {/* content */}
                                <div className=''>
                                    <div className='max-w-80 py-2 px-3'>
                                        <button className='bg-[#2495D6] text-white py-1 px-3 rounded-md'>Begginer</button>
                                        <p className='text-[#2495D6] my-2.5 '>Programming Language</p>
                                        <p className='font-bold text-xl font-bold		'>Angular - The Complete Guide (2020 Edition)</p>
                                        <p className='text-base	 font-semibold my-2.5 '>From Setup to Deployment, this course it all! You’ll Learn all.</p>
                                    </div>

                                    <div className='flex bg-gray-900 text-white justify-between px-4 py-1 rounded-md	'>
                                        <span>Instructor</span>
                                        <span>Name</span>
                                    </div>
                                    <div className='p-4 flex justify-between font-semibold py-1 px-2'>
                                        <div>
                                            <p className='mb-2 text-xl'>Price Value</p>
                                            <div className='flex'>
                                                <FaStar color='yellow' size={20} />
                                                <FaStar color='yellow' size={20} />
                                                <FaStar color='yellow' size={20} />
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <p className='mb-2 text-xl'>599 Rs.</p>
                                            <button className='text-white bg-red-600 py-1 px-3 rounded-xl '>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-3xl my-20'>
                        <button className='inline-flex gap-5 text-white bg-red-600 py-2 px-6 rounded-3xl'><SiOpenlayers />View All</button>
                    </div>
                </div>
                {/* Subscription */}
                <div className='text-center bg-white subscription'>
                    <div className='text-5xl max-w-2xl my-6 m-auto leading-tight '>
                        <h1>Choice your best </h1>
                        <span className='font-semibold me-2'>SUBSCRIPTION plan</span>
                    </div>
                    <div className='p-8 xl:flex justify-center gap-10 flex-wrap py-20 sm:px-40 md:gap-20 gap-20 md:max-lg:grid lg:grid-cols-2 md:max-lg:grid-cols-2 md:max-xl:px-10 flex'> 
                        {/* card */}
                        <div className='card-container'>
                            <div className='rounded-3xl transform transition duration-500 hover:scale-110 subscription-card border-8 card'>
                                <div className='p-6 rounded-3xl '>
                                    <h2 className='text-5xl py-3 px-12 bg-red-600 rounded-full font-semibold'>Monthly</h2>
                                    <div className='flex flex-col '>
                                        <div className='font-semibold my-7'>
                                            <p className='text-5xl'>25 Rs</p>
                                            <p className='text-2xl'>Per Month</p>
                                        </div>
                                        <div className='self-center mb-5'>
                                            <ul className='text-2xl list-disc text-start'>
                                                <li>Data Analyst</li>
                                                <li>Up to 5 Member</li>
                                                <li>Get 5 GB Storage</li>
                                                <li>Monthly Report</li>
                                            </ul>
                                        </div>
                                        <button className='  py-2.5 bg-red-600 rounded-full '><span className='bg-transparent font-semibold text-2xl'>Join</span></button>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                        {/* card */}
                        <div className='card-container'>
                            <div className='rounded-3xl transform transition duration-500 hover:scale-110 subscription-card border-8 card'>
                                <div className='p-6 rounded-3xl '>
                                    <h2 className='text-5xl py-3 px-12 bg-red-600 rounded-full font-semibold'>Monthly</h2>
                                    <div className='flex flex-col '>
                                        <div className='font-semibold my-7'>
                                            <p className='text-5xl'>25 Rs</p>
                                            <p className='text-2xl'>Per Month</p>
                                        </div>
                                        <div className='self-center mb-5'>
                                            <ul className='text-2xl list-disc text-start'>
                                                <li>Data Analyst</li>
                                                <li>Up to 5 Member</li>
                                                <li>Get 5 GB Storage</li>
                                                <li>Monthly Report</li>
                                            </ul>
                                        </div>
                                        <button className='  py-2.5 bg-red-600 rounded-full '><span className='bg-transparent font-semibold text-2xl'>Join</span></button>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                        {/* card */}
                        <div className='card-container'>
                            <div className='rounded-3xl transform transition duration-500 hover:scale-110 subscription-card border-8 card'>
                                <div className='p-6 rounded-3xl '>
                                    <h2 className='text-5xl py-3 px-12 bg-red-600 rounded-full font-semibold'>Monthly</h2>
                                    <div className='flex flex-col '>
                                        <div className='font-semibold my-7'>
                                            <p className='text-5xl'>25 Rs</p>
                                            <p className='text-2xl'>Per Month</p>
                                        </div>
                                        <div className='self-center mb-5'>
                                            <ul className='text-2xl list-disc text-start'>
                                                <li>Data Analyst</li>
                                                <li>Up to 5 Member</li>
                                                <li>Get 5 GB Storage</li>
                                                <li>Monthly Report</li>
                                            </ul>
                                        </div>
                                        <button className='  py-2.5 bg-red-600 rounded-full '><span className='bg-transparent font-semibold text-2xl'>Join</span></button>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
                {/* Latest Blogs */}
                <div className='flex justify-center flex-col latest-blog pt-24'>
                    <h1 className='text-8xl text-center'>Latest Blogs</h1>
                    <div className='max-w-7xl m-auto lg:w-full '>
                        {/* images */}
                        <div className=' flex gap-20 my-20 flex-wrap sm:justify-center'>
                            <div className='w-96'>
                                <img src={courseThumbain} alt="" className='w-full h-full rounded-3xl'/>
                            </div>
                            {/* content */}
                            <div className='max-w-2xl'> 	
                                <h2 className='text-5xl	mb-7 leading-10'>Start your journey now, level up your skill</h2>
                                <p className='text-lg leading-10'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius</p>
                            </div>
                        </div>
                        <div className=' flex m-auto gap-20 my-20 flex-wrap-reverse sm:justify-center'>
                            {/* content */}
                            <div className='max-w-2xl'> 	
                                <h2 className='text-5xl	mb-7 leading-10'>Start your journey now, level up your skill</h2>
                                <p className='text-lg leading-10'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius</p>
                            </div>
                            <div className='w-96'>
                                <img src={courseThumbain} alt="" className='w-full h-full rounded-3xl'/>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-3xl'>
                        <button className='inline-flex my-20 gap-5 text-white bg-red-600 py-2 px-6 rounded-3xl'><SiOpenlayers />View All</button>
                    </div>
                </div>
                    {/* Call to Actions */}
                <div ref={sectionRef5} className='px-40 lg:px-20'>
                    <div className='mb-20'>
                        <h1 className='text-7xl	mb-10'>Call to Action</h1>
                        <p className='text-4xl	'>Join Now and Start Your Journey to Financial Mastery!</p>
                    </div>
                    <div>
                        <h1 className='text-7xl	mb-10'>What we do</h1>
                        <p className='text-4xl	'>Elevate your brand and make your mark in history.</p>
                    </div>
                    <div className='mt-20 grid 2xl:grid-cols-3 lg:grid-cols-2 gap-10 items-center'>
                            <div className='rounded-3xl border-2 border-black flex w-96 py-3'>
                                <div className='flex items-center m-auto text-xl gap-5'>
                                    <button>Trading Guide</button> 
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='rounded-3xl border-2 border-black flex w-96 py-3'>
                                <div className='flex items-center m-auto text-xl gap-5'>
                                    <button>Trading Guide</button> 
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='rounded-3xl border-2 border-black flex w-96 py-3'>
                                <div className='flex items-center m-auto text-xl gap-5'>
                                    <button>Trading Guide</button> 
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='rounded-3xl border-2 border-black flex w-96 py-3'>
                                <div className='flex items-center m-auto text-xl gap-5'>
                                    <button>Trading Guide</button> 
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='rounded-3xl border-2 border-black flex w-96 py-3'>
                                <div className='flex items-center m-auto text-xl gap-5'>
                                    <button>Trading Guide</button> 
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='rounded-3xl border-2 border-black flex w-96 py-3'>
                                <div className='flex items-center m-auto text-xl gap-5'>
                                    <button>Trading Guide</button> 
                                    <FaArrowRightLong />
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                <div>
                    {/* <Awards/> */}
                </div>
                <div>
                    <Carousel/>
                </div>
                <div>
                    {/* <About/> */}
                </div>
                <div>
                    <Faq/>
                </div>
                    <Contact/>
                </div>
                <div>
                    <Footer/>
                </div>
         
            </LandingPage>            
        </>
    )       
}
export default Home;
const LandingPage = styled.div`
max-width: 1920px;
margin: auto;
.wrapper {
    /* transition: clip-path 0.5s ease-in-out; */
    /* clip-path: circle(0px at calc(100% - 10px) 45px); */
    /* max-width: 722px; */
    /* width: 100%; */
    width: 40vw;
    /* right: -722px; */
    /* z-index: -23; */
    transition: right 0.5s ease-in-out, clip-path 0.5s ease-in-out;
    clip-path: inset(0 0 0 100%); /* initially clipped to the right */
    }

.active {
    /* clip-path: circle(75%); */
    clip-path: inset(0 0 0 0); /* fully open */
    /* right: 0; */
}
.wrapper ol{
    /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* padding-left: 80px; */
  list-style: none;
  /* display: block; */
  /* width: 100%; */
  /* transform: translateY(-50%); */
}
.wrapper ol li{ 
    font-size: 3vw;
    line-height: 1.2;
    font-weight: 500;
    color: black;
    margin: 50px 0;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: normal;
}
.wrapper ol li:hover{ 
    transform: scale(1.3);
    /* transform-origin: 0% 50%; */
    transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 768px){
    .wrapper {
        width: 100%;
    }
    .wrapper ol li{  
        font-size: 40px;
    }
    
}

#invertedcursor {
  position: absolute;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  top: var(--y, 0);
  left: var(--x, 0);
  transform: translate(-50%, -50%);
  z-index: 2;
  mix-blend-mode: difference;
  transition: transform .2s;
}
header, .hero {
    padding: 0 70px;
    transition: all 1s ease;
    /* max-width: 1920px; */
    /* margin: auto; */
}
.hero video {
    position: absolute;
    z-index: -999;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
}
.hero h1{
    font-size: 6.2vw;
    /* line-height: 1.2px; */
}
.hero p {
    font-size: 4vw;
}
.feature-course-page {
  background-image: url(${courseFeatureBackground}); /* Placeholder URL */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.feature-course-page > div{
    background-image: url(${blanckBackground}); /* Placeholder URL */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 1000px;
    animation: slideGradient 15s forwards; 
}

@keyframes slideGradient {
    0% {
    background-position: 0px; 
  }
  100% {
    background-position: 15000px; 
  }
}
.feature-course-page .course-feature {
   padding: 15px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
   animation: 1.5s fadeInUp;
   width: 24rem;
}  
@keyframes fadeInUp {
 0% {
   transform: translateY(40%);
   opacity: 0;
 }
 100% {
   transform: translateY(0%);
   opacity: 1;
 }
}

.sementic .sementic-left {
   animation: 1.5s fadeleft;
}  
@keyframes fadeleft {
 0% {
   transform: translateX(-40%);
   opacity: 0;
 }
 100% {
   transform: translateX(0%);
   opacity: 1;
 }
}
.sementic .sementic-right {
   animation: 1.5s faderight;
}  
@keyframes faderight {
 0% {
   transform: translateX(40%);
   opacity: 0;
 }
 100% {
   transform: translateX(0%);
   opacity: 1;
 }
}
.sementic .bull-animation {
    animation: 1s bullAni ease-in;
    z-index: -20;
    top: -331px;
}

@keyframes bullAni {
    from {
        transform: translate(-20%, 50%);
    } to {
        transform: translate(0%);
    }
}
 .feature-container > div > div:nth-child(1), .course-page{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
 }   
 .feature-container > div:nth-child(1) > div:nth-child(1){
    background-image: url(${courseImage1});
 }   
 .feature-container > div:nth-child(2) > div:nth-child(1){
    background-image: url(${courseImage2});
 }   
 .feature-container > div:nth-child(3) > div:nth-child(1) {
    background-image: url(${courseImage3});
 } 
 .course-card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 }
 .subcription-card li{
    margin-bottom: 16px;
 }
 .latest-blog h2{
    line-height: 3.5rem;
 }
 .course-page {
    background-image: url(${coursePageCover});  
    background-size: 100% 430px;
    background-position: top;
 }
.course-animation .course-card-center {
     animation: 1s slideCenter;
 }
.course-animation .course-card-left {
     animation: 1s slideLeft;
 }
.course-animation .course-card-right {
     animation: 1s slideRight;
 }
 @keyframes slideCenter {
    from {
    transform: translateY(20%);
}
to {
    transform: translateY(0%);
  }
 }
 @keyframes slideLeft {
    from {
    transform: translateX(-50%);
}
to {
    transform: translateX(0%);
  }
 }
 @keyframes slideRight {
    from {
    transform: translateX(50%);
}
to {
    transform: translateX(0%);
  }
 }

.course-page-nav {
    display: flex;
    font-size: 18px;
}
.course-page-nav > span {
    display: flex;
    align-items: center;
}
.course-page-right-desc li {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
}

.subscription-card {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.subscription-card:hover h2 {
    color: black;
    background-color: white;
    transition: all 1s ease; 
}
.subscription-card span{
    color: white;
}
.subscription-card:hover button{
    background-color: white;
    transition: all 1s ease; 
}
.subscription-card:hover span{
    background-color: white;
    transition: all 1s ease; 
}
.subscription-card:hover span{
    color: black;
}
.subscription-card:hover > div{
    color: white;
    font-weight: 600;
    background-color: red;
    transition: all 1s ease; 
}
.circle {
      width: 100px;
      height: 100px;
      background: #ffffff;
      border-radius: 50%;
      position: absolute;
      mix-blend-mode: difference;
    }
.callToAction-animation {
    animation: 2s callToActionRL;
}
@keyframes callToActionRL {
    from {
        transform: translateX(-20%);
    } to {
        transform: translateX(0%);
    }
}
.card-container {
    perspective: 1000px;
}

.card {
    overflow: hidden;
    transition: transform 0.1s ease;
    /* box-shadow: rgb(253, 9, 9) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
}
.blackshadow {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    filter: brightness(50%);
    background-color: transparent;
    z-index: 1;
}
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity here */
    z-index: 39; /* Ensure it's below the sidebar */
}
.test-tablet {
    position: relative;
    background-image: url(${tableFrame});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.test-tablet > .table{
    /* transform: translateX(5%);
    width: 92%; */
    padding: 6%;
}   
.test-tablet .mobile{
    position: absolute;
    background-image: url(${mobileFrame});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 25%;
    top: 50%;
    right: 7%;
    padding: 40px;
}   

`