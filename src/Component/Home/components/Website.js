import React from "react";
import Fade from "react-reveal/Fade";
import Container from "../../Container";
import webImage1 from "../../../Assets/Image/webimg-1.png";
import webImage2 from "../../../Assets/Image/Webimg-2.png";
import webImage3 from "../../../Assets/Image/webimg-3.png";
import { CgProfile } from "react-icons/cg";
import { VscArrowCircleRight } from "react-icons/vsc";

const WebCard = ({
  image,
  buttonIcon,
  buttonText,
  buttonStyle,
  buttontextColor = "",
  cardStyle,
}) => {
  return (
    <div className={` p-10 mb-[20px]  ${cardStyle}`}>
      <div className="flex">
        <div className="h-[100px] w-[100px]">
          <img src={image} alt="webimg1" />
        </div>

        <div className="text-center">
          <h1 className="text-[24px] font-bold">We help Local people</h1>
          <p className="text-base text-[#adb5bd] pt-[10px] pb-11  font-bold">
            This is a simple text made for this unique and awesome template, you
            can easily replace it.
          </p>
        </div>
      </div>
      <div className={`bg-[#7d8dff] _button_parent rounded ${buttonStyle} `}>
        <a
          className={`flex justify-center items-center py-[10px] px-6 text-base  font-bold  ${buttontextColor} `}
          href="!#"
        >
          {buttonIcon}
          <span className="child_button">{buttonText}</span>
        </a>
      </div>
    </div>
  );
};

function Website() {
  return (
    <section className="bg-[#f8f9fa] pt-[60px] pb-[100px]">
      <Container>
        <Fade>
          <div className="grid grid-cols-2 overflow-hidden">
            <div className="p-[10px]">
              <h1 className="text-5xl font-bold pt-6 leading-normal">
                Create your own beautiful website!
              </h1>
              <p className="text-[#adb5bd] text-[18px] font-bold py-4">
                Combine seamlessly fitting layouts, customize everything you
                want, switch components on the go!
              </p>
              <Fade bottom delay={100}>
                <WebCard
                  image={webImage1}
                  buttonIcon={<CgProfile className="mr-1 text-[20px]" />}
                  buttonText="Accquire new customers"
                  cardStyle="bg-white shadow hover:-translate-y-1 duration-300"
                  buttontextColor="text-[#fff]"
                />
              </Fade>
            </div>
            <div className="p-[10px]">
              <WebCard
                image={webImage2}
                buttonIcon={
                  <VscArrowCircleRight className="mr-1    text-[20px] ]" />
                }
                buttonText="Get full control"
                cardStyle="bg-transparent"
                buttonStyle="bg-[#E9ECEf] "
                buttontextColor="text-[#6C757D]"
              />
              <WebCard
                image={webImage3}
                buttonIcon={
                  <VscArrowCircleRight className="mr-1  text-[20px] " />
                }
                buttonText="Achieve tasks quickly"
                cardStyle="bg-transparent"
                buttonStyle="bg-[#E9ECEf]"
                buttontextColor="text-[#6C757D]"
              />
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
}

export default Website;
