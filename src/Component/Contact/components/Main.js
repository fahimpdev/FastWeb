import React from "react";
import Container from "../../Container";
import { Fade } from "react-reveal";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Message from "./Message";

const ContactCard = ({ aboutIcon, tittle, address }) => {
  return (
    <div className="flex rounded-xl shadow-2xl p-5">
      <div className=" flex items-center mr-5  bg-[#e3e6ff26] rounded-full">
        {aboutIcon}
      </div>

      <div className="pt-[10px]">
        <span className="text-[18px]  font-bold">{tittle}</span>
        <p className="text-[18px] text-[#adb5bd] font-bold">{address}</p>
      </div>
    </div>
  );
};

function Main() {
  return (
    <div className="bg-[#f7f8f9] pb-[160px]">
      <Container>
        <div className="flex flex-col justify-center items-center px-[15px] pt-[150px] pb-[250px] mb-4">
          <h1 className="py-[10px] text-4xl overflow-hidden font-bold ">
            <Fade bottom>Contact</Fade>
          </h1>
          <div className="py-2 text-base font-bold text-[#adb5bd] flex justify-center items-center ">
            <span>Home</span>
            <MdKeyboardArrowRight />
            <span>Contact</span>
          </div>
        </div>

        <section>
          <div className="grid grid-cols-3 gap-5">
            <ContactCard
              aboutIcon={
                <TbPhoneCall className=" h-[36px] w-[36px] text-[#7d8dff] " />
              }
              tittle="Call us today"
              address="+1 (811) 86 45 92"
            />
            <ContactCard
              aboutIcon={
                <MdOutlineMarkEmailUnread className=" h-[36px] w-[36px] text-[#7d8dff] " />
              }
              tittle="Send an Email"
              address="essentials@pixfort.com"
            />
            <ContactCard
              aboutIcon={
                <BiWorld className=" h-[36px] w-[36px] text-[#7d8dff] " />
              }
              tittle="Visit our HQ"
              address="La Défense, Paris"
            />
          </div>
        </section>
        <Message />
      </Container>
    </div>
  );
}

export default Main;
