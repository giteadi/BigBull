import React from 'react';
import styled from 'styled-components';
import imag from '../../Assets/bigbulllogo.png'

function Footer() {
    const data = new Date();
    const currentYear = data.getFullYear();

    console.log(currentYear);

    return (
        <>
            <StyledContact>
                <footer>
                    <div class="main-footer">
                        <div className="footer-content bg-white text-center ">
                            <img src={imag} alt="" width="100px" class="pt-4" />
                            <h4 class="pt-4">We are Social</h4>
                            <p class='bottom-para pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda!</p>
                            <div className="bottom-icons">
                                <div className="icons pt-2">
                                    <i class="bi bi-facebook px-4 fa-2x icon"></i>
                                    <i class="bi bi-twitter px-4 fa-2x icon"></i>
                                    <i class="bi bi-instagram px-4 fa-2x icon"></i>
                                    <i class="bi bi-linkedin px-4 fa-2x icon"></i>
                                    <i class="bi bi-youtube px-4 fa-2x icon"></i>
                                </div>
                            </div>

                            <div className="pt-5 bottom-content d-flex justify-content-around">
                                <div className="contact-info text-start">
                                    <p class="para line-1 "><i class="bi bi-envelope"></i>contact@company.com</p>
                                    <p class="para line-2 "><i class="bi bi-telephone"></i>(+91)000-0000</p>
                                    <p class="para line-3 "><i class="bi bi-geo-alt"></i>794 Mcallister St</p>
                                    <p class="para line-4 ">San Francisco, 94102</p>
                                </div>
                                <div className="columns d-flex">
                                    <div className="column-1">
                                        <p class='head pb-2'><b>Product</b></p>
                                        <p>Features</p>
                                        <p>Pricing</p>
                                        <p>Case studies</p>
                                        <p>Reviews</p>
                                        <p>Update</p>
                                    </div>
                                    <div className="column-2">
                                        <p class='head pb-2'><b>Company</b></p>
                                        <p>About</p>
                                        <p>Contact us</p>
                                        <p>Careers</p>
                                        <p>Culture</p>
                                        <p>Blog</p>
                                    </div>
                                    <div className="column-3">
                                        <p class='head pb-2'><b>Support</b></p>
                                        <p>Getting started</p>
                                        <p>Help center</p>
                                        <p>Server status</p>
                                        <p>Report a bug</p>
                                        <p>Chat support</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr class="thick-line" />
                        <div className="copyrights d-flex justify-content-around">
                            <p>Copyright &copy; {currentYear} DOAGuru InfoSystems</p>
                            <p>All Rights Reserved | <a href="#">Terms and Conditions | <a href="#">Privacy Policy</a></a></p>
                        </div>
                    </div>
                </footer>
            </StyledContact>
        </>
    )
}

export default Footer;
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






