import React from 'react';
import styled from 'styled-components';
import img from '../../Assets/contact-logo.png';
import imag from '../../Assets/contact-logo.png';

function Contact() {
    const data = new Date();
    const currentYear = data.getFullYear();

    console.log(currentYear);

    return (
        <>
            <StyledContact>
                <div className='container-fluid'>
                    <div className="row mid-container bg-white pt-5 pb-5 d-flex justify-content-center align-items-center">
                        <div className="heading text-center py-3">
                            <h1>Contact Us.</h1>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <form className='col-12'>
                                <div className="col-12 bg-transparent shadow-lg p-3 mb-5 bg-white rounded">
                                    <div className=" contact_box box text-dark d-flex flex-wrap">
                                        <div className="box-image m-auto">
                                            <img className='contact_img' src={img} alt=""/>
                                        </div>
                                        <div className="inputs my-4 m-auto">
                                            <div class="name-email gap-1 gap-md-4 d-flex justify-content-center">
                                                <div>
                                                    <label class="" for="form4Example1"></label>
                                                    <input type="text" id="form4Example1" class="name form-control border border-dark" placeholder='Name' />
                                                </div>

                                                <div>
                                                    <label class="" for="form4Example2"></label>
                                                    <input type="email" id="form4Example2" class="email form-control border border-dark" placeholder='Email' />
                                                </div>
                                            </div>

                                            <div class="location-mobilenumber gap-1 gap-md-4 d-flex justify-content-center mt-2">
                                                <div>
                                                    <label class="" for="form4Example1"></label>
                                                    <input type="tel" id="form4Example1" class="mb-2 location form-control border border-dark" placeholder='Location' />
                                                </div>


                                                <div>
                                                    <label class="" for="form4Example2"></label>
                                                    <input type="text" id="form4Example2" class="mobile-number form-control border border-dark" placeholder='Mobile Number' />
                                                </div>

                                            </div>

                                            <div data-mdb-input-init class="mt-2">
                                                <label class="" for="form4Example3"></label>
                                                <textarea class="text-box form-control border border-dark" id="form4Example3" rows="4" placeholder='Text your message here'></textarea>
                                            </div>
                                            <div class="form-check pt-5 mb-5 px-0 text-center">
                                                <button data-mdb-ripple-init type="button" class="btn btn-danger w-50">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </StyledContact>
        </>
    )
}

export default Contact;
const StyledContact = styled.div`

.contact_img{
    width: 20rem;
    
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .contact_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .box-image {

    }
}


@media screen and (min-width: 320px) and (max-width: 480px) {
    
    .contact_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .contact_img {
        width: 200px;
    }
    
    .bottom-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .name-email, .location-mobilenumber {
        flex-direction: column;
        gap: 50%;
    }

    .location-mobilenumber {
        padding-top: 10px;
        margin-top: 0px;
    }

    .inputs {
        width: 100%;
    }

    .email {
        margin-bottom: 20px;
    }

    .icon {
        font-size: 20px;
        
    }

}

`;






