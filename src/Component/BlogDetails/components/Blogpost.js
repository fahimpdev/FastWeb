import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";

import PostImage1 from "../../../Assets/Image/blogimg1.png";
import PostImage2 from "../../../Assets/Image/blogimg2.png";
import PostImage3 from "../../../Assets/Image/blogimg3.png";
import PostImage4 from "../../../Assets/Image/blogimg4.png";
import Postpixfort from "../../../Assets/Image/blogpostpixfort.png";

const Post = ({ image, tag, tittle, icon }) => {
  return (
    <div className="bg-[#fff] py-[10px] pl-[20px] pr-[10px] rounded shadow-md">
      <div className="flex justify-between items-center">
        <MdKeyboardArrowRight className="rotate-180 flex justify-center items-center" />
        <div className="ml-[10px]">
          <p className="text-[12px] text-[#adb5bd]">{tag}</p>
          <h1 className="py-1 font-bold">{tittle}</h1>
        </div>
        <img
          src={image}
          alt="postimage"
          className="h-10 w-10 ml-[10px] rounded"
        />
      </div>
    </div>
  );
};

const PostCard = ({ bgurl, tittle, time }) => {
  return (
    <div className={`${bgurl} col-span-3 mx-[15px] rounded p-5`}>
      <div className="flex justify-between">
        <img src={Postpixfort} alt="post1" className="rounded-full" />
        <div className="flex justify-center items-center text-[#fff] ">
          <AiOutlineHeart size={20} className="mr-[5px]" />{" "}
          <span className="text-[14px]">10</span>
        </div>
      </div>
      <div className="pt-[150px]">
        <span className="text-[12px] font-bold text-[#ffffff80] py-[5px] px-[10px] bg-[#2a2c3980] mr-[5px] rounded">
          Articles
        </span>
        <span className="text-[12px] font-bold text-[#ffffff80] py-[5px] px-[10px] bg-[#2a2c3980] ml-[5px] rounded">
          Post Types
        </span>
      </div>
      <h1 className="text-[24px] py-[10px] text-[#ffffff] font-bold">
        {tittle}
      </h1>
      <div className="flex items-center text-[12px] text-[#ffffffb3] font-bold">
        <CiClock2 size={20} className="mr-[5px]" />
        <span>{time}</span>
      </div>
    </div>
  );
};

function Blogpost() {
  return (
    <div>
      <div className="flex justify-between">
        <Post
          image={PostImage1}
          tag="Previous post"
          tittle="Create any website..."
        />
        <Post
          image={PostImage2}
          tag="Nest post"
          tittle="Say Salut to Essen..."
        />
      </div>
      <div className="py-[50px] flex justify-center items-center">
        <h1 className="text-[24px] font-bold">Related Posts</h1>
      </div>
      <div className="grid grid-cols-12 mb-[100px]  ">
        <PostCard
          bgurl="_postimg1"
          tittle="Say Salut to Essentials theme"
          time="February15,2020"
        />
        <PostCard
          bgurl="_postimg2"
          tittle="Create any website like a pro"
          time="February14,2020"
        />
        <PostCard
          bgurl="_postimg3"
          tittle="Add languages to your website"
          time="February14,2020"
        />
        <PostCard
          bgurl="_postimg4"
          tittle="Hello world, this is Essentials theme"
          time="January13,2020"
        />
      </div>
      <div className="w-[760px] mx-auto mt-[40px] mb-[80px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[24px] font-bold">Leave a Reply</h1>
          <p className="text-base text-[#adb5bd] mb-[16px] mt-[10px]">
            Your email address will not be published.ReQuired fields are marked*
          </p>
        </div>
        <from>
          <div className="grid grid-cols-12 gap-2 mb-[16px]">
            <input
              type="text"
              placeholder="Name"
              id="name"
              required
              className="col-span-4 py-[9px] px-[18px] rounded shadow-md"
            />
            <input
              type="Email"
              placeholder="Email"
              id="Email"
              required
              className="col-span-4  py-[9px] px-[18px] rounded shadow-md"
            />
            <input
              type="url"
              placeholder="Website"
              id="url"
              className="col-span-4  py-[9px] px-[18px] rounded shadow-md"
            />
          </div>
          <textarea
            type="text"
            placeholder="Comment"
            className="w-[100%] min-h-[150px] py-[9px] px-[18px] shadow-md rounded mb-4"
          />
          <button
            name="submit"
            type="submit"
            id="submit"
            class=" font-bold text-[#fff] bg-[#7d8dff]  w-[100%] py-[10px] px-6 rounded"
          >
            Post Comment
          </button>
        </from>
      </div>
    </div>
  );
}

export default Blogpost;
