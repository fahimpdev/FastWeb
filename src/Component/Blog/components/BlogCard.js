import React from "react";

import { Fade } from "react-reveal";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsVolumeUp } from "react-icons/bs";
import PixfortImg from "../../../Assets/Image/f5c4155e987c6ab4b3e8278828fe024c.png";
import BlogSearch from "./BlogSearch";
import { Link } from "react-router-dom";
import BlogData from "../../../Data/blog.json";

const middleData = [
  {
    id: 1,
    icon: (
      <a
        href="!#"
        className="flex justify-center items-center h-[100px] bg-[#fff] rounded-full w-[100px]"
      >
        <BiPlay size={60} className="text-[#adbdb5]" />
      </a>
    ),
  },
  {
    id: 2,
    icon: (
      <a
        href="!#"
        className="flex justify-center items-center h-[100px] bg-[#fff] rounded-full w-[100px]"
      >
        <BsVolumeUp size={60} className="text-[#adbdb5]" />
      </a>
    ),
  },
  {
    id: 3,
    icon: (
      <a
        href="!#"
        className="flex justify-center items-center h-[100px] bg-[#fff] rounded-full w-[100px]"
      >
        <AiOutlinePaperClip size={60} className="text-[#adbdb5]" />
      </a>
    ),
  },
  {
    id: 4,
    icon: (
      <div className="flex justify-center items-center flex-col">
        <p className="text-[20px]  text-[#fff]">
          Everything should be made as simple as possible,but not simpler.
        </p>
        <h1 className="text-[20px] font-bold mt-[10px] text-[#fff]">
          Albert Einstein
        </h1>
      </div>
    ),
  },
  {
    id: 5,
    icon: (
      <div className="flex justify-center items-center flex-col">
        <p className="text-[20px]  text-[#fff]">
          Everything should be made as simple as possible,but not simpler.
        </p>
        <h1 className="text-[20px] font-bold mt-[10px] text-[#fff]">
          Albert Einstein
        </h1>
      </div>
    ),
  },
];

const Card = ({ tittle, time, bgUrl, bgMiddleChild, id }) => {
  return (
    <div className=" grid grid-cols-2 mb-[60px]   shadow-lg">
      <div
        className={`relative flex items-center ${bgUrl} justify-center bg-cover bg-center p-[20px] 55bg-no-repeat`}
      >
        <div href="!#">{bgMiddleChild}</div>

        <div className="absolute bottom-0 left-0 pb-[20px]  px-3 flex justify-between w-full">
          <a href="!#">
            <img src={PixfortImg} alt="PixFort1" className="rounded-full" />
          </a>
          <div className=" flex justify-between items-center">
            <div className="bg-white rounded">
              <button className="flex justify-center items-center  text-[#adb5bd] px-[10px] py-[5px]  ">
                <FaRegComment size={20} /> <span>0</span>
              </button>
            </div>

            <div className="bg-white ml-5  rounded">
              <button
                href="!#"
                className="flex justify-center items-center px-[10px] py-[5px] text-[#adb5bd]"
              >
                <AiOutlineHeart size={20} />
                <span>11</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] p-[20px]">
        <a
          href="!#"
          className="text-[#7d8dff] text-[12px] font-bold mr-[3px] py-[5px] px-[10px] bg-[#e3e6ff26]"
        >
          Articales
        </a>
        <a
          href="!#"
          className="text-[#7d8dff] text-[12px] font-bold mr-[3px] py-[5px] px-[10px] bg-[#e3e6ff26]"
        >
          Post Types
        </a>
        <h1 className="text-[30px] font-bold py-[10px] ">{tittle}</h1>
        <p className="text-[#adb5bd] text-base py-4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type...
        </p>
        <div className="flex justify-between pt-4 mt-6 text-[12px] text-[#adb5bd]">
          <a href="!#" className="flex items-center ">
            <CiClock2 size={20} className="mr-[5px]" />
            <span>{time}</span>
          </a>
          <Link
            to={"/blog-details/" + id}
            className="flex items-center font-bold"
          >
            Read more
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

function BlogCard() {
  return (
    <div>
      <div className="grid  grid-cols-3 ">
        <div className="col-span-2 pb-60 p-[20px] ">
          {BlogData.map((data, index) => {
            return (
              <Card
                id={data.id}
                key={data.id}
                tittle={data.tittle}
                bgUrl={data.bgUrl}
                bgMiddleChild={middleData[index].icon}
                time={data.date}
              />
            );
          })}
        </div>

        <div className="col-span-1 ...">
          <BlogSearch />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
