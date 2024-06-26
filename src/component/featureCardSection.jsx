import styled from "styled-components";
import courseImage1 from '../Assets/courseImage1.webp'
import courseImage2 from '../Assets/courseImage2.webp'
import courseImage3 from '../Assets/courseImage3.webp'
import courseFeatureBackground from '../Assets/courseFeatureBackground.jpg'
import blanckBackground from '../Assets/blanckBackground.png'
import { useEffect, useRef } from "react";

const cardContent = [
    {heading: 'Beginner’s `Guide to `Stock Market Investing', desc: 'Understand the basics, start investing, and manage risks' },
    {heading: 'Beginner’s `Guide to `Stock Market Investing', desc: 'Understand the basics, start investing, and manage risks' },
    {heading: 'Beginner’s `Guide to `Stock Market Investing', desc: 'Understand the basics, start investing, and manage risks' },
]

const FeatureCardSection = ({sectionRef}) => {
    const scrollRef = useRef(null);
  
    useEffect(() => {
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
    }, []);
    return (
        <>
               <Container>  
               <div ref={sectionRef} className="mb-10 sm:mb-44">
                <div className='my-10'>
                    <h1 className='text-5xl	sm:text-8xl text-center sm:my-10 font-semibold'>Our Course Feature</h1>
                    {/* container */}
                    <div ref={scrollRef} className="makeScrollable">
                    <div  className='feature-container flex py-10 sm:py-24 lg:flex sm:gap-20 justify-center '> 
                        {
                            cardContent.map((card) => <div className='course-feature p-4 w-80 bg-white rounded-lg mb-10 sm:mb-0 border border-gray-300'>

                            {/* image */}
                            <div className='h-96 rounded-lg '></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>{card.heading}</h4>
                                <p className='text-base'>{card.desc}</p>
                            </div>
                        </div>)
                        }
                    </div>
                    </div>
                </div>
                </div>
                </Container>
        </>
    )    
}
export default FeatureCardSection;

const Container = styled.div`
.feature-course-page {
  background-image: url(${courseFeatureBackground}); /* Placeholder URL */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  flex-wrap: wrap;
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
 .feature-container .course-feature {
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 2px;
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
.course-feature:hover {
    scale: 1.01;
    box-shadow: rgba(0, 0, 0, 0.12) 8px 9px 14px,
      rgba(0, 0, 0, 0.24) 0px 7px 9px;
    transition: all 0.6s;
  }

@media screen and (max-width: 855px){
.feature-container .course-feature {
    width: 20rem;
    gap: 0;
    }  
}
@media screen and (max-width: 530px){
.makeScrollable {
    overflow: scroll;
    /* transform: translateX(0); */
}
.feature-container .course-feature {
    width: 18rem;
    gap: 0;
    }  
    .feature-course-page {
            background-image: none;
        }
.feature-container .course-feature > div:nth-child(1) {
    height: 18rem;
    }
.feature-container {
    /* flex-wrap: nowrap; */
    width: max-content;
    overflow: scroll;
}
.course-feature{
    margin: 0 50px;
}
}  
`
