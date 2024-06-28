import styled from "styled-components";
import courseThumbain from '../Assets/courseThumbnail.jpg'
import {Link} from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { SiOpenlayers } from "react-icons/si";
import { useEffect, useRef } from "react";

const courseCardData = [
    {
      imageUrl: courseThumbain, 
      title: 'Angular - The Complete Guide (2020 Edition)',
      description: 'From Setup to Deployment, this course covers everything! You\'ll learn it all.',
      category: 'Programming Language',
      level: 'Beginner',
      instructor: 'Name', 
      price: 599,
      currency: 'Rs.',
      rating: 3, 
      cardPosition: 'left'
    },
    {
      imageUrl: courseThumbain, 
      title: 'Angular - The Complete Guide (2020 Edition)',
      description: 'From Setup to Deployment, this course covers everything! You\'ll learn it all.',
      category: 'Programming Language',
      level: 'Beginner',
      instructor: 'Name', 
      price: 599,
      currency: 'Rs.',
      rating: 3, 
      cardPosition: 'center'
    },
    {
      imageUrl: courseThumbain, 
      title: 'Angular - The Complete Guide (2020 Edition)',
      description: 'From Setup to Deployment, this course covers everything! You\'ll learn it all.',
      category: 'Programming Language',
      level: 'Beginner',
      instructor: 'Name', 
      price: 599,
      currency: 'Rs.',
      rating: 3, 
      cardPosition: 'right'
    },
  ];

const CoursesInLandingPage = ({sectionRef}) => {
    // console.log('render');
    const scrollRef = useRef(null);


    useEffect(() => {
        const card = document.querySelectorAll('.card-stretched');
        card.forEach((eachCard) => {
            if(window.innerWidth <= 530) return;
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
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            const scrollContent = scrollContainer.firstElementChild;
            
            // Calculate the center position
            const scrollLeft = (scrollContent.scrollWidth - scrollContainer.clientWidth) / 2;
            
            // Scroll to the center position
            scrollContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth' // Optional: adds a smooth scrolling effect
            });
        }
    return () => {
        card.forEach((eachCard) => {
            eachCard.addEventListener('mouseleave', () => {
                eachCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        })
    }    
    }, [])
    return (
        <>
            <Container>
                   <div className='my-10 py-10 mb-0 sm:my-10'>
                    <h1 className='text-5xl sm:text-8xl text-center sm:my-10 font-semibold'>Course</h1> 
                    {/* container */}
                    <div ref={scrollRef} className="makeScrollable" >
                    <div ref={sectionRef} className='course-card-scroll p-8 flex flex-wrap sm:gap-20 justify-center '> 
                        {/* card */}
                        {courseCardData.map((card) =>   <div className='course-card-container mb-10 sm:m-0'>
                            <div className={`course-card card-stretched course-card-${card.cardPosition} rounded-lg p-2 sm:p-4 pt-2`}>
                                {/* image */}
                                <div className='h-52 w-64 sm:w-80'>
                                    <img src={card.imageUrl} alt="" className='h-full object-cover border-8  border-white rounded-2xl	'/>
                                </div>
                                {/* content */}
                                <div className=''>
                                    <div className=' max-w-64 sm:max-w-80 py-1 sm:py-2 px-3'>
                                        <button className='bg-[#2495D6] text-white py-0.5 sm:py-1 px-3 rounded-md'>{card.level}</button>
                                        <p className='text-[#2495D6] text-sm sm:text-base my-2 sm:my-2.5 '>{card.category}</p>
                                        <p className='font-bold text-base sm:text-xl font-bold'>{card.title}</p>
                                        <p className='text-sm sm:text-base font-semibold my-1 sm:my-2.5 '>{card.description}</p>
                                    </div>

                                    <div className='flex bg-gray-900 text-white justify-between px-2 sm:px-4 py-1 rounded-md	text-sm'>
                                        <span>Instructor</span>
                                        <span>{card.instructor}</span>
                                    </div>
                                    <div className='p-4 flex justify-between font-semibold py-1 px-2'>
                                        <div>
                                            <p className='mb-2 text-base sm:text-xl'>Price Value</p>
                                            <div className='flex'>
                                            {Array.from({ length: card.rating }).map((_, index) => (
                                                <FaStar key={index} color='yellow' className=" text-lg sm:text-xl"  />
                                            ))}
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <p className='mb-2 text-base font-bold sm:text-xl'>{card.price} Rs</p>
                                            <button className='text-white bg-red-700 text-sm sm:text-base py-1 px-3 rounded-xl '>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    </div>
                    <div className='text-center text-3xl my-10'>
                        <span>
                        <Link to={'/courses'}  className=' view-all inline-flex gap-4 text-white bg-red-700 py-2 px-6 rounded-3xl text-xl'><SiOpenlayers style={{margin: 'auto'}}  />View All</Link>
                        </span>
                    </div>
                </div>
                </Container>
        </>
    )
}

export default CoursesInLandingPage;
const Container = styled.div`
  .course-card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
 .course-card-container {
    perspective: 1000px;
}

.card-stretched {
    overflow: hidden;
    transition: transform 0.1s ease;
    /* box-shadow: rgb(253, 9, 9) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
}
@media screen and (max-width: 530px){
.makeScrollable {
    overflow: scroll;
    /* transform: translateX(0); */
}
.course-card-scroll {
    width: max-content;
    overflow: scroll;
}
.course-card-container {
    margin: 0 50px;
}
}  

`;