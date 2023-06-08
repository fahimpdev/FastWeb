import React from "react";
import SearchBlog from "./Search";
import { IoLogoFacebook } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  AiOutlineHeart,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";

const BlogTag = ({ tittle }) => {
  return (
    <div>
      <a
        href="!#"
        className="bg-[#fff] hover:bg-[#e6e6e6] shadow-gray-600 shadow-2xl rounded text-[14px] px-[14px] py-[6px] my-[5px] hover:text-[#748290] text-[#adb5bd] mr-[5px] font-bold"
      >
        {tittle}
      </a>
    </div>
  );
};

const LinkIcon = ({ icon }) => {
  return (
    <a
      href="!#"
      className="rounded-full h-10 w-10 flex justify-center items-center bg-[#fff] shadow-lg mr-[10px]  hover:bg-[#e6e6e6] text-[#adb5bd] hover:text-[#748290]"
    >
      {icon}
    </a>
  );
};

const BlogPost = ({ tittle, bgurl, count }) => {
  return (
    <div className="">
      <div className={`${bgurl} `}>
        <div className="p-5 flex justify-between  mb-[20px]">
          <h1 className="text-[#adb5bd] font-bold text-[18px]  ">{tittle}</h1>
          <div className="flex items-center text-[#adb5bd]">
            <AiOutlineHeart size={20} className="mr-[5px] " />
            <span className="text-[14px] font-bold">{count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function BlogSearch() {
  return (
    <div className="px-[10px]">
      <SearchBlog />
      <div className="mb-[30px]">
        <h1 className="text-[24px] font-bold mb-[10px]">Call to action</h1>
        <div className="_blogimg6 rounded ">
          <div className="p-5 min-h-[350px] flex flex-col justify-end ">
            <div className="">
              <span className="text-[12px] px-[10px] rounded py-[5px] text-[#ffffff80] font-bold bg-[#2a2c3980]">
                Start now
              </span>
            </div>

            <h1 className="text-[30px] my-[10px] text-[#fff] font-bold">
              Want to learn how to code in 8 weeks?
            </h1>
            <div className="flex  items-center text-[#ffffff99] text-base font-bold">
              <span>Purchase Essentials</span>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[30px]">
        <h1 className="text-[24px] font-bold mb-[10px]">Tags</h1>
        <div className="flex">
          <BlogTag tittle="Design" />
          <BlogTag tittle="Products" />
          <BlogTag tittle="WordPress" />
        </div>
      </div>
      <div className="mb-[30px]">
        <div>
          <h1 className="mb-[10px] text-[24px] font-bold">Recent posts</h1>
          <BlogPost
            tittle="Say salut to essentials theme"
            bgurl="_blogimg7"
            count="10"
          />
          <BlogPost
            tittle="It's time to say Hello to Essentials theme"
            bgurl="_blogimg8"
            count="9"
          />
          <BlogPost
            tittle="Create any website like a pro"
            bgurl="_blogimg9"
            count="8"
          />
        </div>
      </div>
      <div className="mb-[30px]">
        <div>
          <h1 className="text-[24px] font-bold mb-[10px]">Categories</h1>
          <div className="flex flex-col">
            <a
              href="!#"
              className="flex justify-center p-[5px] mb-[10px] min-h-[40px] text-sm text-[#adb5bd] bg-[#fff] rounded shadow-md font-bold items-center hover:bg-[#e6e6e6] hover:text-[#748290]"
            >
              Artical
            </a>
            <a
              href="!#"
              className="flex justify-center items-center p-[5px]  min-h-[40px] mb-[10px] text-sm text-[#adb5bd] bg-[#fff] rounded shadow-md font-bold  hover:bg-[#e6e6e6] hover:text-[#748290]"
            >
              post Type
            </a>
          </div>
        </div>
      </div>
      <div className="mb-[30px]">
        <div>
          <h1 className="mb-[10px] text-[24px] font-bold">Social link</h1>
          <div className="pb-[10px] flex">
            <LinkIcon icon={<IoLogoFacebook size={18} />} />
            <LinkIcon icon={<AiOutlineInstagram size={18} />} />
            <LinkIcon icon={<AiOutlineTwitter size={18} />} />
            <LinkIcon icon={<CiGlobe size={18} />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSearch;
