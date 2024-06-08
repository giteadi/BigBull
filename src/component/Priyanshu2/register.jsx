import React from 'react';
import styled from 'styled-components';
import img from '../../Assets/register.png';

const Register = () => {
    return (
        <>
            <StyledContact>
                <div className='container-fluid'>
                    <div className="main-container row pt-5 pb-5 d-flex justify-content-center">
                        <div className="heading text-center py-3">
                            <h1>Register</h1>
                        </div>
                        <div class="container d-flex justify-content-center">
                            <div className="box-image">
                                <img className='register_img' src={img} alt="" width="80%" />
                            </div>
                            <div className="register-box col-8 col-md-11 col-xl-8 bg-transparent shadow-lg p-2 mb-5 rounded">
                                <form>
                                    <div class="inputs p-4">
                                        <p>Create your account*</p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="firstname" class="form-label">First Name</label>
                                                <input type="text" class="form-control inputs shadow-sm p-2 rounded" placeholder="" aria-label="First name" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="lastname" class="form-label">Last Name</label>
                                                <input type="text" class="form-control shadow-sm p-2 mb-4 rounded" placeholder="" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="Create Password" class="form-label">Create Password</label>
                                                <input type="password" class="form-control shadow-sm p-2 mb-4 rounded" id="inputPassword4" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="Confirm Password" class="form-label">Confirm Password</label>
                                                <input type="password" class="form-control shadow-sm p-2 mb-4 rounded" id="inputPassword4" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-md-6">
                                                <label for="inputState" class="form-label">Upload your Profile Picture</label>
                                                <input type="file" class="form-control shadow-sm p-2 mb-4 rounded" aria-label="file example" required />
                                                <div class="invalid-feedback">Example invalid form file feedback</div>
                                            </div>
                                        </div>

                                        <p>Tell us about yourself*</p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="inputState" class="form-label">Choose your country from the list</label>
                                                <select id="inputState" class="form-select shadow-sm p-2 mb-4 rounded">
                                                    <option selected>Select</option>
                                                    <option>India</option>
                                                    <option>China</option>
                                                    <option>America</option>
                                                    <option>London</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputState" class="form-label">Choose your state from the list</label>
                                                <select id="inputState" class="form-select shadow-sm p-2 mb-4 rounded">
                                                    <option selected>Select</option>
                                                    <option>Madhya Pradesh</option>
                                                    <option>Uttar Pradesh</option>
                                                    <option>Andra Pradesh</option>
                                                    <option>Gujrat</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="inputgender" class="form-label">Choose your city from the list</label>
                                                <select id="inputgender" class="form-select shadow-sm p-2 mb-4 rounded">
                                                    <option selected>Select</option>
                                                    <option>Nagpur</option>
                                                    <option>Jabalpur</option>
                                                    <option>Mumbai</option>
                                                </select>
                                                </div>
                                            <div class="col-md-6">
                                                <label for="inputState" class="form-label">Enter Address</label>
                                                <input type="text" class="form-control shadow-sm p-2 mb-4 rounded" aria-label="First name" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="inputgender" class="form-label">Gender</label>
                                                <select id="inputgender" class="form-select shadow-sm p-2 mb-4 rounded">
                                                    <option selected>Select</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputState" class="form-label">Enter Date of Birth</label>
                                                <input type="date" class="form-control shadow-sm p-2 mb-4 rounded" aria-label="First name" />
                                            </div>
                                        </div>



                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="mobilenumber" class="form-label">Mobile Number</label>
                                                <input type="tel" class="form-control shadow-sm p-2 mb-4 rounded" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="lastname" class="form-label">Email Address</label>
                                                <input type="Email" class="form-control shadow-sm p-2 mb-4 rounded" placeholder="" />
                                            </div>

                                        </div>
                                        <div class="form-check d-flex justify-content-center pt-4 mb-3 px-4">
                                            <button type="button" class="btn btn-danger">Submit</button>
                                        </div>
                                    </div>
                                   
                                    <p class="para-2 px-4">Already Registered?<a href="#" class="login px-1">Log in</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledContact >
        </>
    )
}

export default Register;
const StyledContact = styled.div`





`;