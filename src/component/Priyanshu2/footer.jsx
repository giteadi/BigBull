import React from "react";
import styled from "styled-components";
// import img from "../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <StyledContact>
        <footer>
          <div class="main-footer h-75 bg-blue-300 ">
            <div className="footer-content bg-white text-center text-lg">
              <div className="flex justify-center ">
                <img
                //   src={img}
                  alt=""
                  width="100px"
                  class=" bottom-img pt-md-2 "
                />
              </div>

              <h4 class="pt-4 text-3xl font-semibold">We are Social</h4>

              <p class="bottom-para pt-2 pb-10 text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda!
              </p>

              <div className="bottom-icons">
                <div className="icons pt-2 flex justify-center pb-10">
                  <div className="px-8 icon text-5xl">
                    {" "}
                    <FaFacebook />
                  </div>

                  <div className="px-8 icon text-5xl">
                    {" "}
                    <FaSquareInstagram />
                  </div>

                  <div className="px-8 icon text-5xl">
                    {" "}
                    <FaTwitterSquare />
                  </div>

                  <div className="px-8 icon text-5xl">
                    {" "}
                    <FaLinkedin />
                  </div>

                  <div className="px-8 icon text-5xl">
                    {" "}
                    <FaYoutube />
                  </div>
                </div>
              </div>

              <div className="bottom-content flex justify-center text-2xl">
  <div className="contact-info text-start pt-5 m-auto">
    <ul className="flex flex-col">
      <li className="para line-1">
        <i className="bi bi-envelope px-2"></i>
        <a href="#" className="contactlink">
          contact@company.com
        </a>
      </li>
      <li className="para line-2">
        <i className="bi bi-telephone px-2"></i>(+91)000-0000
      </li>
      <li className="para line-3">
        <i className="bi bi-geo-alt px-2"></i>794 Mcallister St <br />
        <span className="px-4">San Francisco, 94102</span>
      </li>
    </ul>
  </div>

  <div className="columns flex justify-around w-[60%] pb-10">
    <div className="column-1">
      <p className="head pb-2">
        <b>Product</b>
      </p>
      <ul>
        <li className="c-fe">Features</li>
        <li className="c-fe">Pricing</li>
        <li className="c-fe">Case studies</li>
        <li className="c-fe">Reviews</li>
        <li className="c-fe">Update</li>
      </ul>
    </div>
    <div className="column-2">
      <p className="head pb-2">
        <b>Company</b>
      </p>
      <ul>
        <li className="c-fe">About</li>
        <li className="c-fe">Contact us</li>
        <li className="c-fe">Careers</li>
        <li className="c-fe">Culture</li>
        <li className="c-fe">Blog</li>
      </ul>
    </div>
    <div className="column-3">
      <p className="head pb-2">
        <b>Support</b>
      </p>
      <ul>
        <li className="c-fe">Getting started</li>
        <li className="c-fe">Help center</li>
        <li className="c-fe">Server status</li>
        <li className="c-fe">Report a bug</li>
        <li className="c-fe">Chat support</li>
      </ul>
    </div>
  </div>
</div>

            </div>

            <hr class="thick-line" />

            <div className="copyrights flex justify-between p-4 text-sm bg-black text-white flex items-center justify-center">
              <p>Copyright &copy; 2024 DOAGuru InfoSystems</p>

              <div className="flex ">
                <p>All Rights Reserved |</p>

                <p>
                  <a href="#" className="tandc">
                    Terms and Conditions |
                  </a>
                </p>

                <p>
                  <a href="#" className="policy">
                    Privacy Policy
                  </a>
                </p>
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
