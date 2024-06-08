import React from 'react';
import styled from 'styled-components';
import img from '../../Assets/login2.png';
import img2 from '../../Assets/bigbulllogo.png';
import img3 from '../../Assets/google.png';

function Login() {
    const data = new Date();
    const currentYear = data.getFullYear();
    console.log(currentYear);   
    return (
        <>
            <StyledContact>
                <div className='container-fluid'>
                    <div className="main-container row py-5 d-flex justify-content-center">
                        <div className="heading text-center py-3">
                            <h1>Login</h1>
                        </div>
                        <div class="parent-container col-md-10 shadow-lg p-2 rounded-8">
                            <div class="child-container d-flex justify-content-between row">
                                <div className="box-image d-flex justify-content-center align-center w-25 h-25 col-md-6 m-auto">
                                    <img className='register_img' src={img} alt="" width="100%" />
                                </div>
                                <div class="box col-md-8 col-sm-12">

                                    <div class="d-flex justify-content-center">
                                        <form class="form col-10">
                                            <div class="inputs p-4">
                                                <div className="">
                                                    <div class="column-1 col-md-11 col-sm-11 m-auto fs-5">
                                                        <label for="mobilenumber" class="form-label color-black">Email</label>
                                                        <input type="tel" class="form-control shadow-sm p-2 mb-2 border border-dark rounded-2" placeholder="Enter your Email" />
                                                    </div>
                                                    <div class="column-2 col-md-11 m-auto fs-5">
                                                        <div class="">
                                                            <label for="lastname" class="form-label">Password</label>
                                                            <div class="password-eye d-flex justify-content-between border border-dark rounded-2">
                                                                <input type="Email" class="form-control border border-0 p-2" placeholder="Enter your Password" />
                                                                <div class="icon px-2 py-1">
                                                                    <i class="bi bi-eye-slash-fill "></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="remember pt-3 ts-2">
                                                        <label>
                                                            <input type="checkbox" class="checkbox" />Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-center pt-4 mb-3 px-4 ">
                                                    <button type="login" class="btn btn-danger col-md-11 border rounded-pill">Log In</button>
                                                </div>

                                                <div className="option text-center">
                                                    <p>OR</p>
                                                </div>

                                                <div class="form-check google-button d-flex justify-content-center pt-2 mb-3 px-4">
                                                    <button type="signup" class="google-btn btn btn-danger col-md-11 bg-white border rounded-pill"><a href="#"><img src={img3} alt="" class="google-img" />Sign Up with Google</a></button>
                                                </div>
                                                <div className="bottom-forgetaccount d-flex justify-content-between py-2 ">
                                                    <div className="forget-pass">
                                                        <p><a href="#">Forgot Password?</a></p>
                                                    </div>
                                                    <div className="no-account">
                                                        <p>Don't have an account?<a href="#" class="register-link">Register</a></p>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <footer>
                    <div class="main-footer p-2">
                        <div className="footer-content bg-white text-center ">
                            <img src={img2} alt="#" width="100px" class="pt-4" />
                            <h4 class="pt-4">We are Social</h4>
                            <p class='bottom-para pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda!</p>
                            <div className="bottom-icons">
                                <div className="icons pt-2">
                                    <i class="bi bi-facebook px-4 fa-2x"></i>
                                    <i class="bi bi-twitter px-4 fa-2x"></i>
                                    <i class="bi bi-instagram px-4 fa-2x"></i>
                                    <i class="bi bi-linkedin px-4 fa-2x"></i>
                                    <i class="bi bi-youtube px-4 fa-2x"></i>
                                </div>
                            </div>

                            <div className="bottom-content pt-5 d-flex justify-content-around">
                                <div className="contact-info text-start pb-5">
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
            </StyledContact >
        </>
    )
}

export default Login;
const StyledContact = styled.div`

.google-btn img {
    width: 40px;
    padding-right: 10px;
}

.bottom-forgetaccount {
    font-size: 15px;
    text-decoration: none;
}


@media screen and (min-width: 768px) and (max-width: 1024px) {
    
    .register_img {
        width: 10rem;
        height: 10rem;
    }
    
    .remember {
        padding-left: 21px;
    }
    
    .parent-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .bottom-forgetaccount {
    font-size: 12px;
    text-decoration: none;
}
    
}

@media screen and (min-width: 540px) and (max-width: 550px) {

    .parent-container {
        width: 95vw;
    }
    
    .register_img {
        width: 15rem;
    }
    
    .box {
        width: 100vw;
    }

}

@media screen and (min-width: 320px) and (max-width: 480px) {
    
    .child-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    
    .parent-container {
        width: 95vw;
    }

    .register_img {
        width: 15rem;
    }
    
    .box {
        width: 110vw;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    
    .bottom-forgetaccount {
        flex-direction: column;
    }
    
    .input::placeholder {
        color: gray;
    }
    
    .bottom-content {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .copyrights {
        font-size: 10px;
    }

    .google-btn {
        width: 200px;
    }
}

`;