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
import Typewriter from "typewriter-effect";
import { Tooltip } from "flowbite-react";

const Mainimage = ({
  image,
  imageStyle,
  content,
  delay,
  fadeBottom = true,
}) => {
  return (
    <Fade bottom={fadeBottom} delay={delay}>
      <div className={`relative  ${imageStyle}`}>
        <img
          className={`h-[60px] border-[3px] w-[60px] rounded-full`}
          src={image}
          alt="HomeImage1"
        />
      </div>
    </Fade>
  );
};

function Main() {
  return (
    <div className="h-[100vh] flex items-center ">
      <div className="w-[100%]">
        <Container>
          <div className="grid grid-cols-2 gap-[10px] ">
            <div className="">
              <div className="flex pb-5 overflow-hidden">
                <div className="flex hover_parent">
                  <Tooltip
                    content="Sequre Platform"
                    arrow={false}
                    placement="bottom"
                  >
                    <Mainimage
                      image={HomeImage1}
                      delay={0}
                      fadeBottom={false}
                    />
                  </Tooltip>
                  <Tooltip
                    content="World wide"
                    arrow={false}
                    placement="bottom"
                  >
                    <Mainimage
                      image={HomeImage2}
                      imageStyle="child_effect  "
                      delay={20}
                    />
                  </Tooltip>
                  <Tooltip
                    content="Online shop"
                    arrow={false}
                    placement="bottom"
                  >
                    <Mainimage
                      image={HomeImage3}
                      imageStyle="child_effect  "
                      delay={50}
                    />
                  </Tooltip>
                </div>
                <Fade bottom delay={40}>
                  <a
                    className="px-8 py-3 text-base font-bold flex justify-center items-center "
                    href="!#"
                  >
                    <h1 className=" mainsec-hover-underline">
                      Check all categories
                    </h1>
                    <span className="">
                      <MdKeyboardArrowRight size={16} />
                    </span>
                  </a>
                </Fade>
              </div>
              <h1 className="text-[60px] my-4 font-bold leading-snug">
                Perfect website <br />
                <span className=" mb-5 font-bold leading-[1.8] flex">
                  {`for every `}
                  <Typewriter
                    options={{
                      strings: [" Designer", " Agency", " Startup"],
                      autoStart: true,
                      loop: true,
                      cursor: "",
                    }}
                  />
                </span>
              </h1>
              <p className="my-[30px] text-xl text-[#adb5bd] font-bold">
                We provides you with user management functionality <br />
                that results in faster development and revenue
              </p>
              <div className="flex _button_parent relative w-fit">
                <a
                  className=" flex justify-center items-center border-b-2 border-indigo-500 rounded shadow-2xl  bg-[#7d8dff] text-[18px] text-[#ffffff] font-bold px-8 py-3 "
                  href="!#"
                >
                  <CgProfile className="mr-1" />
                  <span className="child_button">Acquire New Customers</span>
                </a>
              </div>
            </div>
            <div className="flex relative">
              <img
                className="rounded shadow-lg hover:shadow-2xl duration-500 absolute top-0 left-0"
                src={HomeImage4}
                alt="Homeimage4"
              />
              <img
                className="rounded absolute  -z-10 bottom-0 right-0 "
                src={HomeImage5}
                alt="Homeimage5"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Main;
