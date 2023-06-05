import React from "react";
import Container from "../../Container";
import Essentiallogo from "../../../Assets/Image/essentials-logo-dark.png";
import EssentialImage1 from "../../../Assets/Image/about-image2.jpg";
import EssentialImage2 from "../../../Assets/Image/about-image3.jpg";
import EssentialImage3 from "../../../Assets/Image/about-image-4.jpg";
import EssentialImage4 from "../../../Assets/Image/about-image5.jpg";
import PixFort from "../../../Assets/Image/pixfort-1.png";
import Nike from "../../../Assets/Image/nike.png";
import Spotify from "../../../Assets/Image/spotify.png";
import Signature from "../../../Assets/Image/signature.jpg";

function AboutEssential() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 w-[760px] mx-auto">
          <div className=" text-[#adb5bd] ">
            <img src={Essentiallogo} className="w-[200px] " alt="DarkLogo" />
          </div>
          <div className="col-span-2 text-[16px] text-[#adb5bd] font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolar
            elite monda ont ca enim ad nowe minim veniam.
          </div>
        </div>
        <div className="py-[80px]">
          <div className="grid grid-cols-2 ">
            <div className="grid grid-cols-2 ">
              <div className="grid grid-rows-2 gap-4 p-[10px]">
                <div className="row-span-2 ... ">
                  <img
                    src={EssentialImage1}
                    className="rounded-md"
                    alt="hello"
                  />
                </div>
                <div className="">
                  <img
                    src={EssentialImage2}
                    className="rounded-md"
                    alt="hello"
                  />
                </div>
              </div>
              <div className="grid grid-rows-2 gap-7 p-[10px]">
                <div className="row-span-2 ...">
                  <img
                    src={EssentialImage3}
                    className="rounded-md"
                    alt="hello"
                  />
                </div>
                <div className="">
                  <img
                    src={EssentialImage4}
                    className="rounded-md"
                    alt="hello"
                  />
                </div>
              </div>
            </div>
            <div className="p-[10px]">
              <div className="flex justify-center items-center flex-col pb-[30px]">
                <span className="text-[13px] font-bold mb-6 bg-[#E9EcEf] rounded py-[5px] px-[10px]">
                  We're hiring
                </span>
                <h1 className=" pb-[30px] text-[48px] font-bold ">
                  Join us Today
                </h1>
                <p className="text-[18px] text-[#adb5bd] font-bold text-center">
                  Each week our editors add new content to our blog, you can
                  find many useful topics, exclusively for you.
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <div className="py-4">
                  <img src={PixFort} alt="pixport" />
                </div>
                <div className="py-4">
                  <img src={Nike} alt="pixport" />
                </div>
                <div className="py-4">
                  <img src={Spotify} alt="pixport" />
                </div>
              </div>
              <div className="py-[30px]">
                <img src={Signature} alt="" className="h-[140px]" />
              </div>
              <p className="text-center text-[14px] font-bold">
                CEO & Founder at pixfort
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutEssential;
