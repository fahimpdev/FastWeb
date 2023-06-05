import React from "react";
import Main from "./components/Main";
import { Fade } from "react-reveal";
import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pixfort from "./components/Pixfort";
import Blogpost from "./components/Blogpost";
import { useParams } from "react-router-dom";
import BlogData from "../../Data/blog.json";

function BlogDetails() {
  const { id } = useParams();
  const article = BlogData[id - 1];

  return (
    <div className="bg-[#f8f9fa] pb-[80px]">
      <Container>
        <div className="flex flex-col justify-center items-center px-[15px] pt-[150px] pb-[150px] mb-4">
          <h1 className="flex py-[10px]">
            {article.tittle.split(" ").map((item, index) => {
              return (
                <Fade delay={100 * index + 1} bottom>
                  <span className="text-[36px] mr-[10px] font-bold  block">
                    {item}
                  </span>
                </Fade>
              );
            })}
          </h1>

          <div className="py-2 text-base font-bold text-[#adb5bd] flex justify-center items-center ">
            <span>Home</span>
            <MdKeyboardArrowRight />
            <span>Articles</span>
            <MdKeyboardArrowRight />
            <span>{article.tittle}</span>
          </div>
        </div>
        <Main article={article} />
        <Pixfort />
        <Blogpost />
      </Container>
    </div>
  );
}

export default BlogDetails;
