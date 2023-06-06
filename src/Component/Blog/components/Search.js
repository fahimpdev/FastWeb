import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import BlogData from "../../../Data/blog.json";

function SearchBlog() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <div className="mb-[30px]">
        <h1 className="text-2xl font-bold mb-[10px] ">Search</h1>
        <div className=" bg-[#fff] rounded shadow z-10 ">
          <from className="flex items-center justify-between py-[9px] shadow-2xl text-[14px] text-[#adb5bd] font-bold px-[18px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="w-[100%] _input"
              type="search"
              id="gsearch"
              placeholder="Search for something"
              name="gsearch"
            />
            <IoIosSearch size={20} className="mx-[18px] my-[9px]" />
          </from>
        </div>
        <div className="z-10 bg-[#fff]">
          {BlogData.filter((blog) => {
            return search.toLocaleLowerCase() === ""
              ? null
              : blog.tittle.toLocaleLowerCase().includes(search);
          }).map((blog) => (
            <Link
              to={"/blog-details/" + blog.id}
              className=" mt-[5px] text-[#adb5bd] font-bold flex "
            >
              <div
                className={`${blog.bgUrl} h-10 w-10 bg-cover mr-[10px] bg-center `}
              ></div>
              {blog.tittle}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBlog;
