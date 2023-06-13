import React from "react";
import Container from "../../Container";
import { BiPlay } from "react-icons/bi";
import { SlHandbag } from "react-icons/sl";

function Essential() {
  return (
    <section className="bg-[#7d8dff] py-[60px]">
      <Container>
        <div className="flex justify-between items-center">
          <a
            href="!#"
            className="flex justify-center items-center shadow-2xl hover:scale-110 duration-300 h-[100px] bg-[#fff] rounded-full w-[100px]"
          >
            <BiPlay size={60} />
          </a>
          <div className="  flex py-[30px] px-[15px]">
            <div className="mr-12">
              <h1 className="text-[36px] font-bold text-[#ffffff] mr-4">
                Essential is now Available
              </h1>
              <p className="mr-4 mt-[10px] text-[18px] text-[#ffffffb3]">
                Over 9 million digital products by a global community.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="flex justify-center items-center _button_parent border-b-2 border-red-600 px-8 py-3 rounded text-[#ffffff] text-[18px] font-bold bg-[#ff4f81] shadow-2xl"
              href="!#"
            >
              <SlHandbag className="mr-1 " />
              <span className="child_button">Purchase Now</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Essential;
