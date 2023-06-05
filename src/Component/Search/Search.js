import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <div className="bg-gradient-to-r from-[#9c83e5] to-[#f6588e] h-[100vh] flex justify-center items-center ">
      <div className="w-[750px]">
        <div className="flex justify-between">
          <h1 className="text-[88px] text-[#fff] font-bold">Search</h1>
          <TiDeleteOutline
            size={40}
            className="text-[#ffffff80] flex justify-center items-center"
          />
        </div>
        <p className="text-[20px] mb-[8px] text-[#ffffff80]">
          Hit enter to search or ESC to close
        </p>
        <div className=" bg-[#fff] rounded shadow ">
          <from className="flex items-center  py-[5px] px-[15px]">
            <IoIosSearch size={30} className="mr-[15px]" />
            <input
              className="w-[100%] _input text-[30px] text-[#adb5bd] p-[5px]"
              type="search"
              id="gsearch"
              placeholder="Search"
              name="gsearch"
            />
          </from>
        </div>
      </div>
    </div>
  );
}

export default Search;
