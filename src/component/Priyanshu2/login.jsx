import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

// import img from '../Image/login2.png';
// import img2 from '../Image/bigbulllogo.png';
// import img3 from '../Image/google.png';

function Login() {
  const data = new Date();
  const [showPassword, setShowPassword] = useState(false);
  const currentYear = data.getFullYear();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  
  console.log(currentYear);

  return (
    <>
      <StyledContact>
        <div className="container mx-auto py-5">
          <div className="main-container flex flex-col items-center">
            <div className="heading text-center py-3">
              <h1 className="text-3xl font-bold">Login</h1>
            </div>

            <div className="parent-container w-full md:w-10/12 shadow-lg p-2 rounded-lg">
              <div className="child-container grid grid-cols-2 md:flex-row justify-between">
                {/* image */}

                {/* <div className="box-image h-full md:w-5/12 "> */}
                <div className="">
                  <img className='register-img object-cover' src='https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=826&t=st=1718289653~exp=1718290253~hmac=86619a5c4fcd8a147c7f7ce924db20b3d07a62fbb69c85ac4c5c42ec51bd4fdc' alt="" width='80%'/>
                </div>


                <div className="box w-full">
                  <div className="flex justify-center">
                    <form className="form w-10/12">
                      <div className="inputs p-4">
                        <div className="">
                          {/* Email input */}

                          <div className="column-1 w-full md:w-11/12 mx-auto text-lg">
                            <label
                              className="text-gray-700"
                              htmlFor="form4Example2"
                            >
                              Email
                            </label>

                            <input
                              type="email"
                              id="form4Example2"
                              className="email form-control border border-gray-400 p-2 mb-2 w-full rounded"
                              placeholder="Enter your Email"
                            />
                          </div>

                          {/* Password input */}

                          <div className="column-2 w-full md:w-11/12 mx-auto text-lg">
                            <div className="">
                              <label
                                htmlFor="form4Example2"
                                className="text-gray-700"
                              >
                                Password
                              </label>

                              <div className=" password-eye flex justify-between items-center border border-gray-400 rounded p-1">
                                <input
                                  type={showPassword ? "text" :"password"}
                                  className="form-control border-none p-2 w-full"
                                  placeholder="Enter your Password"
                                />
                              </div>
                                <div className="flex justify-end relative -mt-10 pe-3">
                                  <span onClick={togglePasswordVisibility}>
                                      {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                                  </span>
                                </div>
                            </div>
                          </div>

                          {/* Remember me checkbox */}

                          <div className="checkbox form-check pt-4 px-4 md:px-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="check"
                            />

                            <label
                              className="form-check-label text-gray-700"
                              htmlFor="check"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>

                        {/* Login button */}

                        <div className="form-check flex justify-center pt-4 mb-3 px-4">
                          <button
                            type="button"
                            className="login-btn btn bg-red-600 text-white w-8/12 md:w-8/12 rounded-full py-2"
                          >
                            Log In
                          </button>
                        </div>

                        <div className="option text-center">
                          <p>OR</p>
                        </div>

                        {/* Google sign up button */}

                        <div className="form-check google-button flex justify-center pt-1 mb-3 px-1 mx-auto">
                          <button
                            type="button"
                            className="google-btn btn bg-white border border-red-600 text-red-600 w-7/12 rounded-full py-2"
                          >
                            <a href="#" className="google-text">
                              {/* <img src={img3} alt="" class="google-img" /> */}
                              Sign Up
                            </a>
                          </button>
                        </div>

                        {/* Forgot password and register links */}

                        <div className="bottom-forgetaccount flex justify-between py-2">
                          <div className="forget-pass">
                            <p className="text-gray-700">
                              <a href="#" className="underline">
                                Forgot Password?
                              </a>
                            </p>
                          </div>

                          <div className="no-account">
                            <p className="text-gray-700">
                              Don't have an account?{" "}
                              <a
                                href="#"
                                className="register-link underline px-1"
                              >
                                Register
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContact>
    </>
  );
}

export default Login;

const StyledContact = styled.div`
  .google-btn img {
    width: 18px;

    padding-right: 5px;
  }

  .bottom-forgetaccount {
    font-size: 15px;

    text-decoration: none;
  }

  .forgetpass-link:hover {
    text-decoration: underline;
  }

  .register-link:hover {
    text-decoration: underline;
  }

  i:hover {
    font-size: 30px;
  }

  .c-fe:hover {
    text-decoration: underline;

    cursor: pointer;
  }

  .tandc:hover {
    text-decoration: underline;
  }

  .policy:hover {
    text-decoration: underline;
  }

  .contactlink:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    .bottom-content {
      display: flex;

      justify-content: space-around;

      align-items: center;
    }

    .columns {
      width: 100%;

      display: flex;

      justify-content: space-around;

      margin: auto;

      font-size: 15px;
    }

    .contact-info {
      padding-bottom: 15px;

      font-size: 15px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .register-img {
      max-width: 90%;

      margin: auto;
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

    .google-img {
      max-width: 100px;
    }

    .google-text {
      font-size: 10px;
    }

    /* footer */

    .bottom-content {
      display: flex;

      justify-content: space-around;

      align-items: center;
    }

    .contact-info {
      margin: auto;
    }

    .columns {
      width: 90%;

      display: flex;

      justify-content: space-around;
    }

    .contact-img {
      min-width: 200px;

      max-width: 800px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 545px) {
    background-color: pink;

    .register-img {
      max-width: 70%;

      margin: auto;
    }

    .parent-container {
      width: 90vw;
    }

    .child-container {
      display: flex;

      flex-direction: column;

      justify-content: center;
    }

    .login-btn {
      max-width: 300px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .parent-container {
      display: flex;

      width: 90vw;

      justify-content: center;
    }

    .child-container {
      display: flex;

      flex-direction: column;

      justify-content: center;
    }

    .register-img {
      max-width: 60%;
    }

    .box {
      width: 100vw;
    }

    .checkbox {
      font-size: 13px;

      padding-right: 10px;
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

    .bottom-para {
      font-size: 15px;

      padding: 0px 10px;
    }

    .google-button {
      margin: auto;
    }

    .google-btn {
      width: 250px;
    }

    .google-btn img {
      width: 30px;

      padding-right: 14px;
    }

    .login-btn {
      width: 250px;
    }

    /* footer */

    .icon {
      font-size: 20px;
    }

    .columns {
      width: 100%;

      display: flex;

      justify-content: space-around;

      margin: auto;

      font-size: 12px;
    }

    .contact-info {
      padding-bottom: 15px;

      font-size: 12px;
    }

    .copyrights {
      display: flex;

      flex-direction: column;

      font-size: 10px;

      padding: 0px 10px;
    }
  }
`;
