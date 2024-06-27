import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import styled from "styled-components";

function Login() {
  const data = new Date();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const currentYear = data.getFullYear();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:6060/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <StyledContact>
        <div className="container py-5 mx-auto">
          <div className="flex flex-col items-center main-container">
            <div className="py-3 text-center heading">
              <h1 className="text-3xl font-bold">Login</h1>
            </div>

            <div className="w-full p-2 rounded-lg shadow-lg parent-container md:w-10/12">
              <div className="grid justify-between grid-cols-2 child-container md:flex-row">
                <div className="">
                  <img className='object-cover register-img' src='https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=826&t=st=1718289653~exp=1718290253~hmac=86619a5c4fcd8a147c7f7ce924db20b3d07a62fbb69c85ac4c5c42ec51bd4fdc' alt="" width='80%'/>
                </div>

                <div className="w-full box">
                  <div className="flex justify-center">
                    <form className="w-10/12 form" onSubmit={handleFormSubmit}>
                      <div className="p-4 inputs">
                        <div className="">
                          <div className="w-full mx-auto text-lg column-1 md:w-11/12">
                            <label className="text-gray-700" htmlFor="form4Example2">
                              Email
                            </label>
                            <input
                              type="email"
                              id="form4Example2"
                              className="w-full p-2 mb-2 border border-gray-400 rounded email form-control"
                              placeholder="Enter your Email"
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </div>

                          <div className="w-full mx-auto text-lg column-2 md:w-11/12">
                            <div className="">
                              <label htmlFor="form4Example2" className="text-gray-700">
                                Password
                              </label>
                              <div className="relative">
                                <input
                                  type={showPassword ? "text" : "password"}
                                  className="w-full p-2 border border-gray-400 rounded form-control"
                                  placeholder="Enter your Password"
                                  value={password}
                                  onChange={handlePasswordChange}
                                />
                                <div className="absolute cursor-pointer right-3 top-3" onClick={togglePasswordVisibility}>
                                  {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="px-4 pt-4 checkbox form-check md:px-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="check"
                            />
                            <label className="text-gray-700 form-check-label" htmlFor="check">
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="flex justify-center px-4 pt-4 mb-3 form-check">
                          <button
                            type="submit"
                            className="w-8/12 py-2 text-white bg-red-600 rounded-full login-btn btn md:w-8/12 hover:bg-red-500"
                          >
                            Log In
                          </button>
                        </div>

                        <div className="text-center option">
                          <p>OR</p>
                        </div>

                        <div className="flex justify-center px-1 pt-1 mx-auto mb-3 form-check google-button">
                          <button
                            type="button"
                            className="w-7/12 py-2 text-red-600 bg-white border border-red-600 rounded-full google-btn btn"
                          >
                            <a href="#" className="google-text">
                              Sign Up
                            </a>
                          </button>
                        </div>

                        <div className="flex justify-between py-2 bottom-forgetaccount">
                          <div className="forget-pass">
                            <p className="text-gray-700">
                              <Link to="/Forget" className="underline">
                                
                                Forgot Password?
                              </Link>
                            </p>
                          </div>

                          <div className="no-account">
                            <p className="text-gray-700">
                              Don't have an account?{" "}
                              <a href="#" className="px-1 underline register-link">
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