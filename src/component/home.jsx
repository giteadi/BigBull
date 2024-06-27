import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SiOpenlayers } from "react-icons/si";
import logo from "./../../public/logo/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import heroBackground from "../Assets/hero.mp4";
import videoInMobileFrame from "../Assets/videoInMobileFrame.mp4";
import videoInTableFrame from "../Assets/videoInTabletForm.mp4";
import tableFrame from "../Assets/tableFrame.png";
import mobileFrame from "../Assets/mobileFrame.png";
import bullImage from "../Assets/BULL.png";
import coursePageCover from "../Assets/coursePageCover.webp";
import { useRef, useEffect, useState } from "react";
import Contact from "./Priyanshu2/contactUs";
import Carousel from "./Priyanshu2/carousel";
import SideBar from "./sidebar";
import LatestPage from "./Nousheen/latestPage";
import FeatureCardSection from "./featureCardSection.jsx";
import CoursesInLandingPage from "./courseInLandingPage.jsx";

const createObserver = (ref, className) => {
    const isMobile = window.innerWidth <= 530;
    if(isMobile) return;
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
    const isMobile = window.innerWidth <= 530;
    if(isMobile) return;
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
  const sectionRef6 = useRef(null);
  const trainingGuideRef = useRef(null);

  const handleClickOutside = (event) => {
    let target = event.target;
    if (target.classList[0] == "backdrop") setIsChecked(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 530;

        const observer1 = createObserver(sectionRef1, "feature-course-page");
        const observer2 = createObserver(sectionRef2, "sementic");
        const observer3 = createObserver(sectionRef3, "course-animation");
        const observer4 = createObserver(sectionRef4, "header-static");
        const observer5 = createObserver(sectionRef5, "callToAction-animation");
        const observer6 = createObserver(sectionRef6, "latest-blog");

    window.addEventListener("scroll", changeBackground);
    window.addEventListener("mousedown", handleClickOutside);

    const card = document.querySelectorAll(".card");
    card.forEach((eachCard) => {
      if (window.innerWidth <= 530) return;
      eachCard.addEventListener("mousemove", (e) => {
        const rect = eachCard.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top; // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((x - centerX) / centerX) * -5;

        eachCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });
    
      const scrollContainer = document
                              .querySelector('.subscription-card-scroll-wrapper');
      const scrollContent = scrollContainer
                          .querySelector('.subscription-card-scroll-container');

          if (scrollContent) {
            console.log('here');
              const scrollLeft = (scrollContent.scrollWidth - scrollContainer.clientWidth) / 2;
              scrollContainer.scrollTo({
                  left: scrollLeft,
                  behavior: 'smooth' 
              });
          }
  

    return () => {
        if(!isMobile) {
            closeObserver(sectionRef1, observer1);
            closeObserver(sectionRef2, observer2);
            closeObserver(sectionRef3, observer3);
            closeObserver(sectionRef4, observer4);
            closeObserver(sectionRef5, observer5);
            closeObserver(sectionRef6, observer6);
        }
   

      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("mousedown", handleClickOutside);

      card.forEach((eachCard) => {
        eachCard.addEventListener("mouseleave", () => {
          eachCard.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
        });
      });
    };
  }, []);
  return (
    <>
      <LandingPage>
        <div className="landingPage-container overflow-hidden">
          {/* Hero Section */}
          <div>
            <div>
              <SideBar checked={isChecked} />
            </div>
            <header
              ref={sectionRef4}
              className={`${
                navbar ? "bg-white" : ""
              } z-50 w-full fixed py-1 sm:py-3`}
            >
              <nav
                style={{ maxWidth: "max-width: 1920px;" }}
                className="flex justify-between w-full m-auto"
              >
                <div className="w-24 sm:w-32">
                  <img src={logo} alt="Logo" width="100%" />
                </div>
                <div onClick={() => setIsChecked(!isChecked)}>
                  <IoMenu
                    className="menu-bar text-4xl sm:text-6xl"
                    color={`${navbar || isChecked ? "black" : "white"}`}
                  />
                </div>
              </nav>
            </header>
            {/* hero main part */}
            <div className={`hero ${!isChecked || "brightness-50"} `}>
              <div className="h-screen">
                <video
                  style={{ filter: "brightness(60%)" }}
                  src={heroBackground}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                ></video>
                <div className="absolute top-0 text-white h-full flex flex-col justify-center w-full sm:w-4/5 px-2 sm:px-5">
                  <h1 className="font-semibold text-9xl leading-tight">
                    Master the Stock Market with Our Expert-Led Courses
                  </h1>
                  <p className="text-5xl font-normal mt-10 leading-snug ">
                    Learn the secrets of stock market investing from industry
                    professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* feature Course Page */}
          <FeatureCardSection sectionRef={sectionRef1} />
          {/* Sementic */}
          <div
            ref={sectionRef2}
            className="grid mb-20 lg:grid-cols-2 sm:grid-cols-1 grid gap-10 px-4 sm:px-5 sementic-container m-auto	"
          >
            {/* left */}
            <div className="flex flex-col sementic-left flex-wrap">
              <div className="self-center">
                <h2 className="text-5xl sm:text-7xl	mb-10 ">Schematic</h2>
                <button className="text-xl border-2 rounded-3xl border-black py-2 px-7">
                  Brand Identity
                </button>
              </div>
              {/* content */}
              <div className="gap-y-14 mt-14 max-w-xl lg:self-end self-center">
                <div className="flex sm:gap-11 mb-12">
                  {/* numberr */}
                  <div className="text-5xl me-10 sm:m-0 sm:text-7xl">01</div>
                  {/* paragraph */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-semibold">
                      Background
                    </h3>
                    <p className="text-xl sm:text-2xl leading-10 mt-3">
                      Give a brief overview of your project here. You may talk
                      about the client brand and the main project challenge.
                    </p>
                  </div>
                </div>
                <div className="flex sm:gap-11">
                  {/* numberr */}
                  <div className="text-5xl me-10 sm:m-0 sm:text-7xl">02</div>
                  {/* paragraph */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-semibold">
                      Solution
                    </h3>
                    <p className="text-xl sm:text-2xl leading-10 mt-3">
                      Talk about your idea here. Expound a bit on how you solved
                      the challenge and how your work helped your..
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="max-w-4xl absolute sm:bull-animation hidden">
                  <img src={bullImage} alt="" width="100%" />
                </div>
              </div>
            </div>
            {/* right */}
            <div className="content-center sementic-right relative test-tablet">
              <div className="max-w-4xl table">
                {/* <img src={SementicRightImage} alt="" width="100%" /> */}
                <video
                  src={videoInTableFrame}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                ></video>
              </div>
              <div className="mobile">
                <video
                  src={videoInMobileFrame}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                ></video>
              </div>
            </div>
          </div>
          {/* Courses */}
          <CoursesInLandingPage sectionRef={sectionRef3} />
          {/* Subscription */}
          <div className="text-center bg-white subscription">
            <div className="text-xl sm:text-5xl max-w-2xl my-6 m-auto leading-tight">
              <h1 className="sm:mb-4">Choice your best </h1>
              <span className="font-bold text-3xl me-2">
                <span className="sm:ps-4 pe-2">SUBSCRIPTION</span>PLAN
              </span>
            </div>
            <div className="subscription-card-scroll-wrapper">
            <div className="subscription-card-scroll-container p-8 xl:flex justify-center sm:gap-10 flex-wrap sm:py-20 sm:px-40 md:gap-20 sm:gap-20 md:max-lg:grid lg:grid-cols-2 md:max-lg:grid-cols-2 md:max-xl:px-10 flex">
              {/* card */}
              {Array.from({ length: 3 }).map(() => (
                <Link to={"/SubscriptionPlans"}>
                  <div className="card-container mb-10 sm:m-0">
                    <div className="rounded-3xl transform transition duration-500 hover:scale-110 subscription-card border-8 card">
                      <div className="px-5 py-4 sm:px-6 sm:p-y6 rounded-3xl ">
                        <h2 className=" text-2xl py-1.5 px-1.5 sm:px-10 sm:text-5xl sm:px-12 sm:py-3 bg-red-700 rounded-full font-semibold ">
                          Monthly
                        </h2>
                        <div className="flex flex-col ">
                          <div className="font-semibold my-3 sm:my-7">
                            <p className=" text-3xl sm:text-5xl">25 Rs</p>
                            <p className="text-2xl">Per Month</p>
                          </div>
                          <div className="self-center mb-4 sm:mb-5">
                            <ul className="text-lg sm:text-2xl list-disc text-start">
                              <li>Data Analyst</li>
                              <li>Up to 5 Member</li>
                              <li>Get 5 GB Storage</li>
                              <li>Monthly Report</li>
                            </ul>
                          </div>
                          <button className="py-1.5 sm:py-2.5 bg-red-700 rounded-full ">
                            <span className="bg-transparent font-semibold text-xl sm:text-2xl">
                              Join
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            </div>
          </div>
          {/* Latest Blogs */}
          <div
            ref={sectionRef6}
            className="flex justify-center flex-col pt-10 sm:pt-24"
          >
            <h1 className="text-5xl sm:text-8xl text-center font-semibold">
              Latest Blogs
            </h1>
            <LatestPage />
            <div className="text-center text-3xl">
              <span>
                <Link
                  to={"/blogs"}
                  className=" view-all inline-flex gap-4 mb-16 sm:mb-20 text-white bg-red-700 py-2 px-6 rounded-3xl text-2xl"
                >
                  <SiOpenlayers style={{ margin: "auto" }} />
                  View All
                </Link>
              </span>
            </div>
          </div>
          {/* Call to Actions */}
          <div
            ref={sectionRef5}
            className="px-40 lg:px-20 py-20 call-to-action"
          >
            <div className="mb-10 sm:mb-20 ">
              <h1 className="text-5xl sm:text-7xl	mb-10  ">Call to Action</h1>
              <p className="text-xl sm:text-4xl">
                Join Now and Start Your Journey to Financial Mastery!
              </p>
            </div>
            <div>
              <h1 className="text-5xl sm:text-7xl	mb-3 sm:mb-10 ">What we do</h1>
              <p className="text-xl sm:text-4xl">
                Elevate your brand and make your mark in history.
              </p>
            </div>
            <div ref={trainingGuideRef} className="mt-20 training-guide training-guide-wrapper">
              <div className=" training-guide-container  guideLeft slider">
                <div className="slide-track grid 2xl:grid-cols-3 lg:grid-cols-3 gap-10 items-center">
                {Array.from({ length: 3 }).map(() => (
                  <div className="rounded-3xl border-2 border-black flex w-80 lg:w-72 2xl:w-96 py-3 slide">
                    <div className="flex items-center m-auto text-xl gap-3 sm:gap-5">
                      <button>Trading Guide</button>
                      <FaArrowRightLong />
                    </div>
                  </div>
                ))}
              </div>
              </div>
              <div className=" training-guide-container  mt-5 guidRight slider">
              <div className="slide-track grid 2xl:grid-cols-3 lg:grid-cols-3 gap-10 items-center">
                {Array.from({ length: 3 }).map(() => (
                  <div className="rounded-3xl border-2 border-black flex w-80 2xl:w-96 py-3 slide">
                    <div className="flex items-center m-auto text-xl gap-3 sm:gap-5">
                      <button>Trading Guide</button>
                      <FaArrowRightLong />
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <Carousel />
            </div>
            <Contact />
          </div>
        </div>
      </LandingPage>
    </>
  );
};
export default Home;
const LandingPage = styled.div`
  overflow: hidden;

  .landingPage-container {
    max-width: 1920px;
    margin: auto;
  }

  nav {
    padding: 0 30px;
  }
  .view-all:hover {
    scale: 0.9;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.5s;
  }

  .wrapper {
    width: 40vw;
    transition: right 0.5s ease-in-out, clip-path 0.5s ease-in-out;
    clip-path: inset(0 0 0 100%); 
  }

  .active {
    clip-path: inset(0 0 0 0);     
    }
  .wrapper ol {
    list-style: none;
}
  .wrapper ol li {
    font-size: 3vw;
    line-height: 1.2;
    font-weight: 500;
    color: black;
    margin: 50px 0;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  .wrapper ol li:hover {
    transform: scale(1.3);
    transition: all 0.3s ease-in-out;
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
    transition: transform 0.2s;
  }
  header,
  .hero {
    padding: 0 70px;
    transition: all 1s ease;
  }
  .hero video {
    position: absolute;
    z-index: -999;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .hero h1 {
    font-size: 6.2vw;
  }
  .hero p {
    font-size: 4vw;
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
    display: block;
    animation: 1s bullAni ease-in;
    z-index: -20;
    top: -331px;
  }

  @keyframes bullAni {
    from {
      transform: translate(-20%, 50%);
    }
    to {
      transform: translate(0%);
    }
  }

  .course-card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .subcription-card li {
    margin-bottom: 16px;
  }
  .latest-blog h2 {
    line-height: 3.5rem;
  }
  .latest-blog .blog-left {
    animation: 1.5s blogfromleft ease-in;
  }

  @keyframes blogfromleft {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .latest-blog .blog-right {
    animation: 1.5s blogfromright ease-in;
  }
  @keyframes blogfromright {
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(0%);
    }
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
  }

  .subscription-card {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  .subscription-card:hover h2 {
    color: black;
    background-color: white;
    transition: all 1s ease;
  }
  .subscription-card span,
  .subscription-card h2 {
    color: white;
  }
  .subscription-card:hover button {
    background-color: white;
    transition: all 1s ease;
  }
  .subscription-card:hover span {
    background-color: white;
    transition: all 1s ease;
  }
  .subscription-card:hover span {
    color: black;
  }
  .subscription-card:hover .subscription-card h2 {
    color: black;
  }
  .subscription-card:hover > div {
    color: white;
    font-weight: 600;
    background-color: rgb(185 28 28);
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
    }
    to {
      transform: translateX(0%);
    }
  }

  .callToAction-animation .guidRight {
    animation: 2s callToActionRLguidRight;
  }
  @keyframes callToActionRLguidRight {
    from {
      transform: translateX(40%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .card-container {
    perspective: 1000px;
  }

  .card {
    overflow: hidden;
    transition: transform 0.1s ease;
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

  .test-tablet {
    position: relative;
    background-image: url(${tableFrame});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .test-tablet > .table {
    padding: 6%;
  }

  .test-tablet .mobile {
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

  @media screen and (max-width: 768px) {
    .wrapper {
      width: 100%;
    }
    .wrapper ol li {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 530px) {
    .testimonial {
      height: 70vh;
    }
    nav {
      padding: 0;
    }
    .menu-bar {
      transform: translateX(-20%);
    }
    .wrapper ol li {
      margin: 36px 0;
    }
    .wrapper ol li {
      font-size: 35px;
    }
    .hero h1 {
      font-size: 14vw;
      /* line-height: 1.2px; */
    }
    .hero p {
      font-size: 6vw;
    }
    .sementic-container {
      padding: 0px 1px;
    }
    .subscription > div:nth-child(1) {
      font-size: 9vw;
    }
    .training-guide > div {
      justify-content: center;
    }
    .call-to-action {
      text-align: center;
      padding: 0 10px;
    }
    .test-tablet .mobile {
      padding: 15px;
    }
    header,
    .hero {
      padding: 0;
      transition: all 1s ease;
    }
    .subscription-card-scroll-wrapper, .training-guide-wrapper {
      overflow: scroll;
    }
    .training-guide-wrapper  {
      width: max-content;
    }

    .subscription-card-scroll-container, .training-guide-container{
      width: max-content;
      overflow: scroll;
    }
    .training-guide-container {
      display: flex;
    }
    .subscription-card-scroll-container > a > div{
      margin: 0 50px;
    }
    /* This seciton is make scroll to training guide seciton  */
    @-webkit-keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-300px * 1));
      }
    }

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-300px * 1));
      }
    }

    .slider {
      background: white;
      /* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125); */
      /* height: 200px; */
      margin: auto;
      overflow: hidden;
      position: relative;
      width: 365px;
    }

    .slider::before, .slider::after {
      /* background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%); */
      content: "";
      /* height: 200px; */
      position: absolute;
      width: 300px;
      z-index: 2;
    }

    .slider::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    .slider::before {
      left: 0;
      top: 0;
    }

    .slider .slide-track {
      -webkit-animation: scroll 4s linear infinite;
      animation: scroll 4s linear infinite;
      display: flex;
      width: calc(300px * 3);
    }
    .slide {
      margin: 0 25px;
    }
    /* .slider .slide {
      height: 200px;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    } */

    /* .slide-content {
      border: 2px solid black;
      border-radius: 1.5rem;
      width: 80%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    } */
/* 
    .slide-content button {
      font-size: 1.25rem;
    } */
  }
`;
