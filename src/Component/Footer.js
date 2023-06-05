import React from "react";
import Footerlogo from "../Assets/Image/fast-logo-dark.png";
import Container from "../Component/Container";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

const FooterCard = ({ tittle, service1, service2, service3 }) => {
  return (
    <div className="basis-1/5  p-[10px] ">
      <h1 className="text-center text-[24px] font-bold pb-5">{tittle}</h1>
      <div className="flex flex-col justify-center items-center">
        <a href="!#" className="text-base  font-bold text-[#adb5bd] pb-5">
          {service1}
        </a>
        <a href="!#" className="text-base font-bold text-[#adb5bd] pb-5">
          {service2}
        </a>
        <a href="!#" className="text-base font-bold text-[#adb5bd] ">
          {service3}
        </a>
      </div>
    </div>
  );
};

function Footer() {
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center p-[10px]">
          <img src={Footerlogo} alt="Foooterimage" className="h-10 my-10  " />
        </div>
      </Container>
      <div>
        <div className="border-y-2 border-[#f8f9fa]">
          <Container>
            <div className="flex flex-row py-[60px]">
              <div className=" p-[10px] basis-1/2 flex justify-center items-center flex-col">
                <h1 className="text-[24px] font-bold pb-5">About</h1>
                <p className="text-[16px] text-[#adb5bd] font-bold pb-5">
                  Say hello to the most advanced multipurpose
                  <br /> WordPress theme ever made on themeforest.
                </p>
                <span className="text-base text-[#adb5bd] py-[10px]">
                  <strong>Essential</strong> © Made with Love in France
                </span>
                <div className="flex pt-5">
                  <a href="!#" className="px-2 ">
                    <BsFacebook size={23} />
                  </a>
                  <a href="!#" className="px-2 ">
                    <FaTwitter size={23} />
                  </a>
                  <a href="!#" className="px-2 ">
                    <BsInstagram size={23} />
                  </a>
                  <a href="!#" className="px-2 ">
                    <SlGlobe size={23} />
                  </a>
                </div>
              </div>
              <FooterCard
                tittle="Customer"
                service1="Help Center"
                service2="Pricing"
                service3="Contact us"
              />
              <FooterCard
                tittle="product"
                service1="Blog"
                service2="Elements"
                service3="Products"
              />
              <FooterCard
                tittle="Company"
                service1=" About"
                service2="Careers"
                service3="We're hiring!"
              />
            </div>
          </Container>
        </div>
        <Container>
          <div className="py-[30px]">
            <div className="flex justify-center  items-center text-center pt-[30px] p-[10px] ">
              <a
                href="!#"
                className="px-6 py-[10px] text-[#adb5bd] _underline text-base font-bold"
              >
                Services
              </a>
              <a
                href="!#"
                className="px-6 py-[10px] text-[#adb5bd]  _underline text-base font-bold"
              >
                Terms of use
              </a>
              <a
                href="!#"
                className="px-6 py-[10px] text-[#adb5bd] text-base font-bold _underline"
              >
                Company
              </a>
              <a
                href="!#"
                className="px-6 py-[10px] text-[#adb5bd] _underline text-base font-bold"
              >
                press
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
