import React from "react";
import Container from "../../Container";
import { Fade } from "react-reveal";
import PriceList from "./PriceList";
import PriceQuestion from "./PriceQuestion";
import { MdKeyboardArrowRight } from "react-icons/md";

let text = "Create advanced pricing tables in seconds!";
const myArray = text.split(" ");
console.log(myArray);

const data = myArray.map((item, index) => {
  console.log(index);
  return (
    <Fade delay={100 * index + 1} bottom>
      <span className="text-5xl font-bold block pt-[30px] p-1">{item}</span>
    </Fade>
  );
});

function Price() {
  return (
    <div className="bg-[#f9f8fa]">
      <Fade>
        <Container>
          <div className="flex flex-col justify-center items-center px-[15px] pt-[200px] pb-[150px] mb-4">
            <h1 className="py-[10px] text-4xl overflow-hidden font-bold ">
              <Fade bottom>Pricing</Fade>
            </h1>

            <div className="py-2 text-base font-bold text-[#adb5bd] flex justify-center items-center ">
              <span>Home</span>
              <MdKeyboardArrowRight />
              <span>Price</span>
            </div>
          </div>
          <div className="  flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center  w-[760px] p-[10px] pt-4 pb-[60px]">
              <h6 className="p-1 bg-[#E9ECEF] rounded text-[14px]  font-bold">
                Affordable Prices
              </h6>
              <h1 className="flex flex-wrap pb-[10px] justify-center overflow-hidden items-center">
                {data}
              </h1>
              <p className="text-[#adb5bd] text-[20px] font-bold">
                We design and develop world-class websites and applications.
              </p>
            </div>
          </div>
          <PriceList />
        </Container>
        <PriceQuestion />
      </Fade>
    </div>
  );
}

export default Price;
