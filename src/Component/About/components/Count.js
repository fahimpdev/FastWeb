import React from "react";
import Title from "react-vanilla-tilt";
import Container from "../../Container";
import CounterImage1 from "../../../Assets/Image/unnamed (1).png";
import CounterImage2 from "../../../Assets/Image/Countimg-2.png";
import CounterImage3 from "../../../Assets/Image/Countimg-1.png";
import { FaPlay } from "react-icons/fa";
import { Fade } from "react-reveal";

const CountApp = ({ number, para }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[60px] font-bold text-[#7d8dff]">{number}</h1>
        <p className="text-[18px] font-bold">{para}</p>
      </div>
    </div>
  );
};

let text = "Create Awesome Photo Stack Images with Essentials.";
const myArray = text.split(" ");
console.log(myArray);

const data = myArray.map((item, index) => {
  console.log(index);
  return (
    <Fade delay={100 * index + 1} bottom>
      <span className="text-[48px] py-10px px-[5px] font-bold">{item}</span>
    </Fade>
  );
});

const myStyle = {
  width: "100%",
  boxShadow: "0 0 0 0.0",
};

function Count() {
  return (
    <div className="py-[80px] ">
      <Container>
        <div className="  flex flex-col pb-20  items-center">
          <div className="flex flex-col  items-center    w-[720px] p-[10px] pt-4 ">
            <div className="flex  items-center">
              <img src={CounterImage1} alt="image1" className="pr-[10px]" />
              <img src={CounterImage2} alt="image2" className="pr-[10px]" />
              <img src={CounterImage3} alt="image3" className="pr-[10px]" />
            </div>
            <h1 className="flex flex-wrap pb-[10px] justify-center overflow-hidden items-center">
              {data}
            </h1>
            <p className="text-[#adb5bd] text-center text-[20px] py-[30px] font-bold">
              We design and develop world-class websites and applications,
              design better and spend less time without restricting creative
              freedom.
            </p>
            <div className="grid  grid-cols-3 gap-20">
              <CountApp number="+100" para="Team members" />

              <CountApp number="+28" para="Nationalities" />

              <CountApp number="+13" para="Spoken languages" />
            </div>

            <div className="border-2 rounded-full py-[10px] px-[20px] mt-[30px] ">
              <span className="px-[10px] py-[5px] text-[13px] font-bold">
                Made with love in France
              </span>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <Title style={myStyle}>
            <div className="aboutbg flex justify-center items-center rounded">
              <a
                href="!#"
                className="flex justify-center items-center hover:scale-110 duration-500 h-[100px] bg-[#fff] rounded-full w-[100px]"
              >
                <FaPlay size={30} />
              </a>
            </div>
          </Title>
        </div>
        <div className="flex justify-center  pt-[30px]  ">
          <span className="bg-[#e9ecef]  rounded text-[13px] font-bold py-[5px] px-[10px]">
            Made by pixfort team
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Count;
