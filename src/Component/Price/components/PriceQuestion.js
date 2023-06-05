import React from "react";
import Container from "../../Container";
import { MdKeyboardArrowRight } from "react-icons/md";

const QuestionsCard = ({ tittle, desc }) => {
  return (
    <div className="py-[10px]">
      <h1 className=" text-[24px] text-[#212529] font-bold">{tittle}</h1>
      <p className="text-[16px] text-[#adb5bd] font-bold">{desc}</p>
    </div>
  );
};

function PriceQuestion() {
  return (
    <div className="py-[80px] bg-white">
      <Container>
        <div className="p-[10px]">
          <div className="flex justify-center items-center flex-col pb-[60px]">
            <h1 className="bg-[#e3e6ff26] py-[5px] px-[10px]  text-[#7d8dff] text-[12px] font-bold">
              Frequently Asked Questions
            </h1>
            <p className="pt-[20px] text-[18px] text-[#adb5bd] font-bold">
              We design and develop world-class websites and applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="p-[10px]">
              <QuestionsCard
                tittle="Can I build one page website?"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim."
              />

              <QuestionsCard
                tittle="Is there a limit for Usage?"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim."
              />
            </div>
            <div className="p-[10px]">
              <QuestionsCard
                tittle="Do I get free support?"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim."
              />

              <QuestionsCard
                tittle="Do I get future updates?"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim."
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col mt-5">
            <h1 className="text-[18px] text-[#adb5bd] font-bold mb-5 ">
              Didn't find the right response? view more from here
            </h1>
            <div className="bg-[#f8f9fa]">
              <a
                href="!#"
                className="flex justify-center items-center text-[12px] text-[#adb5bd] py-[6px] px-[14px] font-bold "
              >
                <span className="">Learn more about pricing</span>
                <MdKeyboardArrowRight />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PriceQuestion;
