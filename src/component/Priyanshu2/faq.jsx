import styled from 'styled-components';
import faq from '../../Assets/faq.png'

const Faq =() => {
    return (
        <>
            <LandingPage>
                {/* faQ */}
                <div className='grid grid-cols-2 gap-10 px-5 my-10'>
                    {/* left */}
                    <div className='flex flex-col'>
                        <div className='self-center'>
                            <h2 className='text-7xl	mb-10 '>FAQ</h2>
                            <button className='text-xl border-2 rounded-3xl border-black py-2 px-7'>Testing</button>
                        </div>
                        {/* content */}
                        <div className='gap-y-14 mt-14 max-w-md self-end'>
                            <div className='flex gap-11 mb-12'>
                                {/* numberr */}
                                <div className='text-7xl'>01</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl '>How do i enroll?</h3>
                                </div>
                            </div>
                            <div className='flex gap-11 mb-12'>
                                {/* numberr */}
                                <div className='text-7xl'>02</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl'>What is the course duration?</h3>
                                </div>
                            </div>
                            <div className='flex gap-11'>
                                {/* numberr */}
                                <div className='text-7xl'>03</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl'>Are there any Prerequsites?</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div>
                        <div className='p-10'>
                            <img src={faq} alt="" width="100%" />
                        </div>
                    </div>
                </div>

            </LandingPage>
        </>
    )
}


export default Faq;
const LandingPage = styled.div`

 /* media queries (testimonials) - */


@media screen and (min-width: 769px) and (max-width: 1024px){

    .testimonial-page{     
        width: 120%;
    }

    .testimonial-container{    
         margin-left: auto;
         margin-right: auto;
        }

        h1 {
            font-size: 35px;
        }
    
}



@media screen and (min-width: 540px) and (max-width: 481px){
    
 

    } 
    
@media screen and (min-width: 481px) and (max-width: 768px){
    
    
}

 @media screen and (min-width: 320px) and (max-width: 480px){
     
     
     .testimonial-page {    
        width: 120%;
        }
        
     .testimonial-container {         
        margin-left: auto;
         margin-right: auto;
        }
}
    
        
`;