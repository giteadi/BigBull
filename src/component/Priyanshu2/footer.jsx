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
          <div class="main-footer h-75 bg-blue-300">
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

              <div className="bottom-content flex justify-center ">
                <div className="contact-info text-start pt-5 m-auto">
                  <p class="para line-1 ">
                    <i class="bi bi-envelope px-2 "></i>
                    <a href="#" className="contactlink">
                      contact@company.com
                    </a>
                  </p>

                  <p class="para line-2 ">
                    <i class="bi bi-telephone px-2"></i>(+91)000-0000
                  </p>

                  <p class="para line-3 ">
                    <i class="bi bi-geo-alt px-2"></i>794 Mcallister St <br />{" "}
                    <p class="px-4">San Francisco, 94102</p>
                  </p>
                </div>

                <div className="columns flex justify-around w-[60%]  pb-10">
                  <div className="column-1">
                    <p class="head pb-2">
                      <b>Product</b>
                    </p>

                    <p className="c-fe">Features</p>
                    <p className="c-fe">Pricing</p>
                    <p className="c-fe">Case studies</p>
                    <p className="c-fe">Reviews</p>
                    <p className="c-fe">Update</p>
                  </div>
                  <div className="column-2">
                    <p class="head pb-2">
                      <b>Company</b>
                    </p>
                    <p className="c-fe">About</p>
                    <p className="c-fe">Contact us</p>
                    <p className="c-fe">Careers</p>
                    <p className="c-fe">Culture</p>
                    <p className="c-fe">Blog</p>
                  </div>
                  <div className="column-3">
                    <p class="head pb-2">
                      <b>Support</b>
                    </p>
                    <p className="c-fe">Getting started</p>
                    <p className="c-fe">Help center</p>
                    <p className="c-fe">Server status</p>
                    <p className="c-fe">Report a bug</p>
                    <p className="c-fe">Chat support</p>
                  </div>
                </div>
              </div>
            </div>

            <hr class="thick-line" />

            <div className="copyrights flex justify-between px-4 pt-10 text-sm">
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
