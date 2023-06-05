import React from "react";
import Container from "../../Container";
import { Fade } from "react-reveal";
import { MdKeyboardArrowRight } from "react-icons/md";
import BlogCard from "./BlogCard";

function Main() {
  return (
    <div className="bg-[#f8f9fa]">
      <Container>
        <div className="flex flex-col justify-center items-center px-[15px] pt-[200px] pb-[150px] mb-4">
          <h1 className="py-[10px] text-4xl overflow-hidden font-bold ">
            <Fade bottom>Blog</Fade>
          </h1>

          <div className="py-2 text-base font-bold text-[#adb5bd] flex justify-center items-center ">
            <span>Home</span>
            <MdKeyboardArrowRight />
            <span>Blog</span>
          </div>
        </div>

        <BlogCard />
      </Container>
    </div>
  );
}

export default Main;
