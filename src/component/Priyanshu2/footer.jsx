import React from "react";
import styled from "styled-components";
// import img from "../images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';
import logo from '../../../public/logo/logo.png'

const Footer = () => {
  return (
    <>
      <StyledContact>
      <footer className="">
      <div className="main-footer ">
        <div className="footer-content bg-white text-center text-lg p-6">
          <div className="flex justify-center mb-4">
            {/* <img
              // src={img}
              alt=""
              width="100px"
              className="bottom-img pt-md-2"
            /> */}
          </div>

          <h4 className="pt-4 text-5xl font-bold">We are Social</h4>
          <p className="bottom-para text-xl py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda!
          </p>
          <div className="bottom-icons mb-10">
            <div className="icons flex justify-center space-x-8">
              <FaFacebook className="text-5xl" />
              <FaSquareInstagram className="text-5xl" />
              <FaTwitterSquare className="text-5xl" />
              <FaLinkedin className="text-5xl" />
              <FaYoutube className="text-5xl" />
            </div>
          </div>
          <div className="bottom-content flex flex-col lg:flex-row justify-between text-2xl footer-links gap-20">
            <div className="contact-info text-start m-auto mb-8 lg:mb-0 lg:mr-8">
              <ul className="flex flex-col space-y-2">
              <div className='p-0 '>
                    <img src={logo} alt="Logo" width='100%' />
                </div>
                <li className=" my-2 para line-1">
                  <i className="bi bi-envelope"></i>
                  <div className="flex items-center gap-4 contactlink"> <span className="pt-2"><MdEmail />

                    </span> 
                  contact@company.com</div>
                </li>
                <li className=" my-2 para line-2">
                  <div className="flex items-center gap-4">
                      <span className="pt-2"> <FaPhoneAlt/>
                      </span>
                      +91000-0000

                  </div>
                </li>
                <li className=" my-2 para line-3">
                  <div  className="flex items-center gap-4">
                    <span className="pt-2">
                    <FaAddressCard />

                    </span>
                    794 Mcallister St

                  </div>
                </li>
              </ul>
            </div>

            <div className="columns grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full lg:w-3/4">
  <div className="column-1">
    <ul className="flex flex-col items-start px-20 sm:px-0 sm:items-center lg:items-start space-y-2 lg:text-left sm:mb-5">
      <p className="head  my-4 pb-2">
        <b className="text-3xl font-medium	">Product</b>
      </p>
      <li className="text-lg my-1 c-fe ">Features</li>
      <li className="text-lg my-1 c-fe ">Pricing</li>
      <li className="text-lg my-1 c-fe ">Case studies</li>
      <li className="text-lg my-1 c-fe ">Reviews</li>
      <li className="text-lg my-1 c-fe ">Update</li>
    </ul>
  </div>
  <div className="column-2">
    <ul className="flex flex-col items-start px-20 sm:px-0 sm:items-center lg:items-start space-y-2 lg:text-left sm:mb-5">
      <p className="head  my-4 pb-2">
        <b className="text-3xl font-medium	">Company</b>
      </p>
      <li className="text-lg my-1 c-fe ">About</li>
      <li className="text-lg my-1 c-fe ">Contact us</li>
      <li className="text-lg my-1 c-fe ">Careers</li>
      <li className="text-lg my-1 c-fe ">Culture</li>
      <li className="text-lg my-1 c-fe ">Blog</li>
    </ul>
  </div>
  <div className="column-3">
    <ul className="flex flex-col items-start px-20 sm:px-0 sm:items-center lg:items-start space-y-2 lg:text-left sm:mb-5">
      <p className="head my-4 pb-2">
        <b className="text-3xl font-medium	">Support</b>
      </p>
      <li className="text-lg my-1 c-fe ">Getting started</li>
      <li className="text-lg my-1 c-fe ">Help center</li>
      <li className="text-lg my-1 c-fe ">Server status</li>
      <li className="text-lg my-1 c-fe ">Report a bug</li>
      <li className="text-lg my-1 c-fe ">Chat support</li>
    </ul>
  </div>
  <div className="column-3 self-center">
  <div className='p-0 '>
        <img src={logo} alt="Logo" width='100%' />
    </div>
  </div>
    </div>
    </div>
        </div>

        {/* <hr className="thick-line my-4" /> */}
        <div className="bg-black footer-bar">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 text-xs sm:text-sm text-white max-w-screen-2xl mx-auto">
        <p className="mb-2 md:mb-0 text-sm">&copy; 2024 DOAGuru InfoSystems</p>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <p className="text-xs sm:text-sm">All Rights Reserved |</p>
          <p><Link to="/TermCondition" className="tandc text-xs sm:text-lg">Terms and Conditions |</Link></p>
          <p><Link to="/PrivacyPolicy" className="policy text-xs sm:text-lg">Privacy Policy</Link></p>
        </div>
      </div>
    </div>
      </div>
    </footer>
      </StyledContact>
    </>
  );
};

export default Footer;

const StyledContact = styled.div`
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
  .copyrights {
    font-size: 14px;
  }
  .tandc, .policy {
    margin-left: 5px;
  }
  .tandc:hover, .policy:hover {
    text-decoration: underline;
  }
  .footer-bar p{
    font-size: 20px;
  }
  .footer-links li{
    text-align: start;
    margin: 10px 0;
  }

  .icon {
  }

  /* 

@media screen and (min-width: 769px) and (max-width: 1024px){



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



}


@media screen and (min-width: 540px) and (max-width: 481px){
    
 

} 

@media screen and (min-width: 481px) and (max-width: 768px){


}

 

@media screen and (min-width: 320px) and (max-width: 480px){

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



} */
`;
