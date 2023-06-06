import React from "react";
import { useParams } from "react-router-dom";

import BlogDetails1 from "../../../Assets/Image/software-image-1.png";
import Pixport from "../../../Assets/Image/f5c4155e987c6ab4b3e8278828fe024c.png";
import { BiPlay } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import BlogData from "../../../Data/blog.json";

function Main({ article }) {
  console.log(article);

  return (
    <div className="max-w-[950px]  m-auto">
      <div className={`h-[450px] w-[100%] ${article.bgUrl}`} />

      <div className="my-[20px] ">
        <div className="flex">
          <div className="px-[15px]">
            <button
              href="!#"
              className="flex justify-center items-center px-[15px] py-[10px] mb-[10px]  bg-[#fff] rounded shadow-md text-[#adb5bd]"
            >
              <AiOutlineHeart size={20} className="mr-[5px]" />
              <span>9</span>
            </button>
            <button
              href="!#"
              className="flex justify-center items-center px-[15px] py-[10px] bg-[#fff] rounded shadow-md text-[#adb5bd]"
            >
              <FaRegComment size={20} className="mr-[5px]" />
              <span>0</span>
            </button>
          </div>
          <div className="px-[15px] ">
            <div className="flex justify-between w-[100%] mb-[20px]">
              <div className="flex ">
                <img
                  src={Pixport}
                  alt="pixport"
                  className="rounded-full shadow-md mr-[20px]"
                />
                <h1 className="font-bold text-[14px] flex justify-center items-center">
                  pixport
                </h1>
              </div>
              <div className="flex justify-center items-center ">
                <span className="text-[#7d8dff] text-[12px] px-[10px] py-[5px] bg-[#e3e6ff26] font-bold mr-[5px]">
                  Articles
                </span>
                <span className="text-[#7d8dff] text-[12px] px-[10px] py-[5px] bg-[#e3e6ff26] font-bold mr-[5px]">
                  Post Types
                </span>
                <div className="flex justify-center items-center text-[#adb5bd] ">
                  <CiClock2 size={18} className="mr-[5px]" />
                  <span className="font-bold text-[12px]">
                    February15, 2020
                  </span>
                </div>
              </div>
            </div>
            <div className="text-base text-[#adb5bd] ">
              <p className="pb-[20px] leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="pb-[20px] leading-7">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="py-[16px]">
              <audio controls className="w-[100%] mb-[30px]">
                <source src="horse.ogg" type="audio/ogg" />
              </audio>
              <p className="text-[16px] text-[#adb5bd] mb-4 mt-2 flex justify-center">
                This is a simple dummy audio file
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
