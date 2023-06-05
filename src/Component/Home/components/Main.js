import React from "react";
import Container from "../../Container";
import { Fade } from "react-reveal";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import HomeImage1 from "../../../Assets/Image/icon-circle-1.png";
import HomeImage2 from "../../../Assets/Image/icon-circle-2.png";
import HomeImage3 from "../../../Assets/Image/icon-circle-3.png";
import HomeImage4 from "../../../Assets/Image/fast-stack-1-tiny_1.webp";
import HomeImage5 from "../../../Assets/Image/fast-stack-2-tiny_1.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Main() {
  // const { text } = useTypewriter({
  //   words: ["Startup", "Designer", "Agency"],
  //   loop: {},
  //   typeSpeed: 120,
  //   deleteSpeed: 80,
  // });

  return (
    <div className="h-[100vh] flex items-center relative">
      {/* <div className="skewed" /> */}
      <Container>
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="">
            <div className="flex pb-5 overflow-hidden">
              <div className="flex hover_parent">
                <Fade>
                  <img
                    className="h-[60px] border-[3px] w-[60px] rounded-full"
                    src={HomeImage1}
                    alt="HomeImage1"
                  />
                </Fade>
                <Fade bottom delay={20}>
                  <img
                    className="h-[60px] child_effect  ml-[-25px] border-[3px] w-[60px] rounded-full"
                    src={HomeImage2}
                    alt="HomeImage2"
                  />
                </Fade>
                <Fade bottom delay={30}>
                  <img
                    className="h-[60px] child_effect ml-[-25px] w-[60px] border-[3px] rounded-full"
                    src={HomeImage3}
                    alt="HomeImage3"
                  />
                </Fade>
              </div>
              <Fade bottom delay={40}>
                <a
                  className="px-8  py-3 text-base font-bold flex justify-center items-center "
                  href="!#"
                >
                  Check all categories
                  <span className="">
                    <MdKeyboardArrowRight size={16} />
                  </span>
                </a>
              </Fade>
            </div>
            <h1 className="text-[60px] my-4 font-bold leading-snug">
              Perfect website <br /> for every Designer
              {/* <span className="text-[60px] mb-5 font-bold leading-[1.8]">
                {text}
              </span>
              <span>
                <Cursor />
              </span> */}
            </h1>
            <p className="my-[30px] text-xl text-[#adb5bd] font-bold">
              We provides you with user management functionality <br />
              that results in faster development and revenue
            </p>
            <div
              className=" 
            flex  _button_parent "
            >
              <a
                className=" flex justify-center items-center shadow-md rounded   bg-[#7d8dff] text-[18px] text-[#ffffff] font-bold px-8 py-3 "
                href="!#"
              >
                <CgProfile className="mr-1" />
                <span className="child_button">Acquire New Customers</span>
              </a>
            </div>
          </div>
          <div className="flex relative">
            <img
              className="rounded absolute top-0 left-0"
              src={HomeImage4}
              alt="Homeimage4"
            />
            <img
              className="rounded absolute -z-10 bottom-0 right-0 "
              src={HomeImage5}
              alt="Homeimage5"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
