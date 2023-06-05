import React from "react";
import { Fade } from "react-reveal";
import { MdKeyboardArrowRight } from "react-icons/md";
import Container from "../../Container";
import aboutImage1 from "../../../Assets/Image/about-image1.jpg";

let text = "Discover our Story";
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

function Main() {
  return (
    <div className="pb-[150px]">
      <Container>
        <div className="flex flex-col justify-center items-center px-[15px] pt-[150px] pb-[250px] mb-4">
          <h1 className="py-[10px] text-4xl overflow-hidden font-bold ">
            <Fade bottom>About</Fade>
          </h1>
          <div className="py-2 text-base font-bold text-[#adb5bd] flex justify-center items-center ">
            <span>Home</span>
            <MdKeyboardArrowRight />
            <span>About</span>
          </div>
        </div>

        <div className="  flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center  w-[760px] p-[10px] pt-4 pb-[60px]">
            <h6 className="p-1 bg-[#E9ECEF] rounded text-[14px]  font-bold">
              Established in 2012
            </h6>
            <h1 className="flex flex-wrap pb-[10px] justify-center overflow-hidden items-center">
              {data}
            </h1>
            <p className="text-[#adb5bd] text-[20px] font-bold">
              We design and develop world-class websites and applications.
            </p>
          </div>
        </div>

        <div>
          <img src={aboutImage1} className="rounded" alt="AboutImage!" />
        </div>
      </Container>
    </div>
  );
}

export default Main;
