import React from "react";
import Container from "../../Container";
import Fade from "react-reveal/Fade";
import WhiteLogo from "../../../Assets/Image/fast-logo-white.png";
import ServiceImage1 from "../../../Assets/Image//unnamed.png";
import ServiceImage2 from "../../../Assets/Image/Service2.png";
import ServiceImage3 from "../../../Assets/Image/Service3.png";

const ServiceCard = ({ image, tittle, desc }) => {
  return (
    <div>
      <img className="h-[75px] w-[75px]" src={image} alt="SeviceImage1" />
      <h1 className="text-[30px] pt-[30px] font-bold text-[#ffffff]">
        {tittle}
      </h1>
      <p className="text-[#adb5bd] text-[18px] font-bold pt-[15px]">{desc}</p>
    </div>
  );
};

let text =
  "Advanced cameras combined with a large display, fast performance, and highly calibrated sensors.";
const myArray = text.split(" ");
console.log(myArray);

const data = myArray.map((item, index) => {
  console.log(index);
  return (
    <Fade delay={100 * index + 1} bottom>
      <span className="text-[60px] text-[#ffffff] font-bold p-[6px] block">
        {item}
      </span>
    </Fade>
  );
});

function Service() {
  return (
    <section className="bg-[#212529] py-[120px]">
      <Container>
        <Fade>
          <div>
            <img
              className="mb-5 h-[55px] w-[120px]"
              src={WhiteLogo}
              alt="whitelogo"
            />
          </div>
          <div
            className="flex flex-wrap overflow-hidden
          "
          >
            {data}
          </div>
          <div className="grid grid-cols-3 mt-16">
            <ServiceCard
              image={ServiceImage1}
              tittle="Best selling theme on premium WordPress marketplace."
              desc="Get Essentials today and start building next-generation websites."
            />

            <ServiceCard
              image={ServiceImage2}
              tittle="Unlimited free future updates with Essentials theme."
              desc="Get Essentials today and start building next-generation websites."
            />

            <ServiceCard
              image={ServiceImage3}
              tittle="Fully secure platform with premium support service."
              desc="Get Essentials today and start building next-generation websites."
            />
          </div>
        </Fade>
      </Container>
    </section>
  );
}

export default Service;
