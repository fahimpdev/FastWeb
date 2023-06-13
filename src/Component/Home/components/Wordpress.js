import React from "react";
import Container from "../../Container";
import { HiOutlineShoppingBag } from "react-icons/hi";
import WordpressImage1 from "../../../Assets/Image/images (2).png";
import WordpressImage2 from "../../../Assets/Image/images.png";
import WordpressImage3 from "../../../Assets/Image/images (1).png";
import { Fade } from "react-reveal";

const WordPrressComponent = ({ image, tittle, desc }) => {
  return (
    <div className="flex justify-center items-center flex-col p-[10px]">
      <img
        className="h-[75px] w-[75px] bg-[#f8f9fa]"
        src={image}
        alt="WordpressImage"
      />
      <h1 className="text-[30px] text-[212529] pt-[30px] font-bold">
        {tittle}
      </h1>
      <p className="text-[18px] pt-[15px] text-[#adb5bd] font-bold ">{desc}</p>
    </div>
  );
};

function Wordpress() {
  return (
    <section className=" pt-[40px] pb-[140px]  ">
      <Container>
        <Fade>
          <div className="text-center p-[10px]">
            <h1 className="text-[40px] font-bold mb-5 ">
              The Future of WordPress!
            </h1>
            <p className="text-[20px] text-[#adb5bd] font-bold mb-5">
              Design better and spend less time without restricting creative
              <br />
              freedom. Combine seamlessly fitting layouts, customize everything.
            </p>
            <div className="pt-[40px] pb-[60px]">
              <div className="grid grid-cols-3">
                <WordPrressComponent
                  image={WordpressImage1}
                  tittle="Best selling theme."
                  desc="Get Essentials today and start building next-generation websites."
                />
                <WordPrressComponent
                  image={WordpressImage2}
                  tittle="Support Included."
                  desc="Get Essentials today and start building next-generation websites."
                />
                <WordPrressComponent
                  image={WordpressImage3}
                  tittle="Word-class Design"
                  desc="Get Essentials today and start building next-generation websites."
                />
              </div>
            </div>
            <p className="text-base text-[#212529] font-bold">
              join over +17,000 happy clients!
            </p>
            <div className="flex justify-center items-center pt-10 _button_parent  ">
              <a
                className="flex justify-center items-center py-[10px]  px-6 rounded text-[#6c757d] text-base font-bold bg-[#e9ecef]"
                href="!#"
              >
                <HiOutlineShoppingBag className="mr-1 child_button" />
                <span className="child_button">Purchase Essentials</span>
              </a>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
}

export default Wordpress;
