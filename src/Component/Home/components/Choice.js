import React from "react";
import Container from "../../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiWorld, BiMenu } from "react-icons/bi";
import choiceImage from "../../../Assets/Image/choiceImage.webp";
import { Fade } from "react-reveal";

function Choice() {
  return (
    <div className="bg-[#f8f9fa] py-[140px]">
      <Container>
        <Fade>
          <div className="p-[10px] pb-10 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-[#212529] pb-[20px]">
              It's Your Choice Now!
            </h1>
            <p className="text-[20px] font-bold text-[#adb5bd] pt-4 ">
              Creating stunning and professional websites has never been easier,
              today
              <br /> with Essentials you will be able to build awesome websites
              in no time!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="p-[10px] ">
              <div className="bg-[#fff] shadow-md rounded-md  h-[500px] ">
                <div className="p-[10px]  flex justify-center items-center  flex-col rounded-2xl ">
                  <BiWorld size={80} className="text-[#7d8dff] mt-10 " />
                  <h1 className="text-[36px] text-center font-bold pt-[30px] ">
                    join the revolution of WordPress themes.
                  </h1>
                  <h1 className=" flex justify-center items-center text-center text-[18px] font-bold text-[#adb5bd] pt-[15px]">
                    Ger Essentials today and start building next- <br />
                    generation websites
                  </h1>
                  <a
                    href="!#"
                    className="flex justify-center _button_parent items-center text-center py-3 px-8 rounded bg-[#7d8dff] mt-10"
                  >
                    <BiMenu className="text-[18px] child_button text-[#fff] font-bold mr-2" />
                    <span className="text-[18px] child_button text-[#fff] font-bold">
                      Check all services
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className=" p-[10px]  ">
              <div className="bg-[#ffffff] shadow-2xl rounded  ">
                <img src={choiceImage} alt="ChoiceImage" />
                <a
                  href="!#"
                  className="flex justify-between items-center p-5 text-[18px] font-bold"
                >
                  <p className=" ">Experienced Staff</p>
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
}

export default Choice;
