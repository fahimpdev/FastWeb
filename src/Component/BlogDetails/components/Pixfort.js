import React from "react";
import BlogDetails2 from "../../../Assets/Image/blogdetails2.jpg";
import BlogEssential from "../../../Assets/Image/BlogDetails3.jpg";
import BlogPixfort from "../../../Assets/Image/blog-pixfort.png";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";

const BlogTag = ({ tittle }) => {
  return (
    <div>
      <a
        href="!#"
        className="bg-[#fff]  shadow-2xl rounded text-[14px] px-[14px] py-[6px] my-[5px] text-[#adb5bd] mr-[10px] mb-[10px] font-bold"
      >
        {tittle}
      </a>
    </div>
  );
};

function Pixfort() {
  return (
    <div className="max-w-[950px] mx-auto pb-[45px] pt-[60px] ">
      <div>
        <img src={BlogDetails2} alt="Blogdetails2" />
        <p className="text-[#adb5bd] text-base flex justify-center mt-2 ">
          This is a simple text
        </p>
      </div>
      <p className="pt-[80px] text-[#adb5bd] text-base max-w-[720px] mx-auto">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section
        1.10.32.
      </p>
      <div className="grid grid-cols-2 mt-[80px]">
        <img src={BlogEssential} alt="essentials" />
        <div className="px-[38px] justify-center items-center flex flex-col">
          <h1 className="text-[30px] font-bold mb-[20px]">
            Get the most advanced WordPress theme.
          </h1>
          <p className="text-[16px] text-[#adb5bd]">
            The wait is over. Design better and spend less time without
            restricting creative freedom. Combine seamlessly fitting layouts,
            customize everything.
          </p>
        </div>
      </div>
      <div className="max-w-[730px]  mt-[45px] mx-auto">
        <p className="text-[#adb5bd] text-base pb-4">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from “de
          Finibus Bonorum et Malorum” by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <div className="flex py-5">
          <BlogTag tittle="Design" />
          <BlogTag tittle="Products" />
          <BlogTag tittle="WordPress" />
        </div>
        <div className="my-5 p-[30px] flex shadow-md rounded bg-[#fff]">
          <img
            src={BlogPixfort}
            alt="BlogPixfort"
            className="h-[80px] w-[80px] rounded-full shadow-2xl"
          />
          <div className="ml-[30px]">
            <h1 className="text-[18px] font-bold">Pixfort</h1>
            <p className="text-[#adb5bd] text-[14px] pt-[5px]">
              Essentials support team
            </p>
            <span className="text-[14px] font-bold">hub.pixfort.com</span>
            <div>
              <p className="text-[16px] text-[#adb5bd] pt-[20px] ">
                Hey, this is pixfort support team, if you still need help you
                can always reach us via the chat messenger in your account on{" "}
                <strong className="text-[#333333]">pixfort hub</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <div className="flex justify-center items-center text-[#adb5bd] py-[9px] px-[10px] mr-[10px]">
            <CgFacebook size={25} className="mr-[10px]" />{" "}
            <span className="text-[14px] font-bold">Share on Facebook</span>
          </div>
          <div className="flex justify-center items-center text-[#adb5bd] py-[9px] px-[10px] mr-[10px]">
            <AiOutlineTwitter /> <span>Share on Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pixfort;
