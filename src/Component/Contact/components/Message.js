import React from "react";
import Fade from "react-reveal";

import ContactImage from "../../../Assets/Image/contact-simple-image.jpg";

function Message() {
  return (
    <div>
      <div className="pt-[60px]">
        <div className="grid grid-cols-12 gap-1">
          <div className=" col-span-5 bg-white mt-[80px] shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300  rounded-lg z-10 h-fit p-[35px] ">
            <Fade bottom delay={1000}>
              <div className="p-[10px] ">
                <h1 className="text-2xl font-bold  mb-[10px]">
                  Send us a message
                </h1>
                <p className="text-base text-[#adb5bd] pb-9 ">
                  Contact us today using this form and our support team will
                  reach out as soon as possible.
                </p>
                <div className="grid grid-cols-12 gap-4 ">
                  <div class=" rounded mb-2 col-span-6 roboto font-normal">
                    <label className="text-[#7a7a7a] my-[10px] text-[16px]">
                      Full name <br />
                      <input
                        type="text"
                        placeholder="Jhon Doe"
                        className="py-[9px] px-[18px] mt-2 w-[100%] _input border-none text-[14px] bg-[#f8f9fa]"
                      />
                    </label>
                  </div>
                  <div class=" rounded mb-2 col-span-6 roboto ">
                    <label className="text-[#7a7a7a] my-[5px] text-[16px] mb-2 ">
                      Email address <br />
                      <input
                        type="email"
                        placeholder="email@gmail.com"
                        className="py-[9px] px-[18px] text-[14px] mt-2 _input border-none w-[100%] bg-[#f8f9fa]"
                      />
                    </label>
                  </div>
                </div>
                <label className="text-[#7a7a7a] text-[16px] roboto">
                  Write your message below
                  <br />
                  <textarea
                    type="message"
                    placeholder="Your message"
                    className="bg-[#f8f9fa] pl-5 pt-3 h-[120px] text-[14px] _input border-none mt-[10px] mb-[20px] w-[100%]"
                  />
                </label>
                <div className="">
                  <a
                    href="!#"
                    className="flex justify-center  items-center rounded  bg-[#ff4f81] w-[100%]"
                  >
                    <button
                      type="button"
                      className="flex justify-center items-center roboto py-[12px] px-8 text-lg text-[#fff] font-bold "
                    >
                      Submit form
                    </button>
                  </a>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-span-7 relative ">
            <div className="absolute -left-[199px] ">
              <img
                src={ContactImage}
                alt="contactimage"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
