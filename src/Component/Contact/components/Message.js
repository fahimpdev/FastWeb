import React from "react";

import ContactImage from "../../../Assets/Image/contact-simple-image.jpg";

function Message() {
  return (
    <div>
      <div className="pt-[60px]">
        <div className="grid grid-cols-12 gap-1">
          <div className=" col-span-5 bg-white mt-[80px] rounded-lg z-10 h-fit p-[35px] ">
            <div className="p-[10px] ">
              <h1 className="text-2xl font-bold mb-[10px]">
                Send us a message
              </h1>
              <p className="text-base text-[#adb5bd] pb-10">
                Contact us today using this form and our support team will reach
                out as soon as possible.
              </p>
              <div className="grid grid-cols-12 gap-2 ">
                <div class=" rounded my-[5px] col-span-6  ">
                  <label className="text-[#7a7a7a] text-[16px] font-bold">
                    Full Name <br />
                    <input
                      type="text"
                      placeholder="Jhon Doe"
                      className="py-[9px] px-[18px] w-[100%] bg-[#f8f9fa]"
                    />
                  </label>
                </div>
                <div class=" rounded my-[5px] col-span-6 ">
                  <label className="text-[#7a7a7a] text-[16px] font-bold">
                    Email address <br />
                    <input
                      type="email"
                      placeholder="email@gmail.com"
                      className="py-[9px] px-[18px] w-[100%] bg-[#f8f9fa]"
                    />
                  </label>
                </div>
              </div>
              <label className="text-[#7a7a7a] text-[16px] font-bold">
                Write your message below
                <br />
                <textarea
                  type="message"
                  placeholder="your message"
                  className="bg-[#f8f9fa] pl-5 pt-3 h-[120px]  w-[100%]"
                />
              </label>
              <div className="pt-[40px]">
                <a
                  href="!#"
                  className="flex justify-center  items-center rounded  bg-[#ff4f81] w-[100%]"
                >
                  <button
                    type="button"
                    className="flex justify-center items-center py-[12px] px-8 text-[20px] text-[#fff] font-bold "
                  >
                    Submit form
                  </button>
                </a>
              </div>
            </div>
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
