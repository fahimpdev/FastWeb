import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillPieChart } from "react-icons/ai";
import { GiCircleClaws } from "react-icons/gi";
import { MdLockReset } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";

const PriceCardHeading = ({
  heading,
  price,
  para,
  headingStyle,
  headingbg,
  priceStyle,
}) => {
  return (
    <>
      <div className="">
        <span
          className={`p-1 ${headingbg} rounded text-[14px] font-bold ${headingStyle}`}
        >
          {heading}
        </span>
      </div>
      <div className="pt-[16px]">
        <span className={`font-bold `}>
          <span className={`text-[48px]  ${priceStyle}`}>{price}</span>/month
        </span>
      </div>
      <div>
        <p className="text-[#adb5bd] text-[14px] font-bold">{para}</p>
      </div>
    </>
  );
};
const PriceCardLi = ({ icon, tittle }) => {
  return (
    <h1 className="flex items-center py-2 text-base ">
      <h1 className="mr-2 text-[#7d8dff] text-[20px]"> {icon}</h1>

      <span className=" text-[#adbdb5] text-base font-bold">{tittle}</span>
    </h1>
  );
};

const PriceCard = ({}) => {
  return (
    <div className="bg-[#fff] hover:shadow shadow-lg rounded h-fit p-[35px]">
      <PriceCardHeading
        heading="Lowest Price"
        price="$19"
        para="For beginners"
        headingStyle="text-[#7d8dff]"
        headingbg="bg-[#e3e6ff26]"
      />
      <div className="pt-6 py-2">
        <PriceCardLi tittle="Premium support" icon={<FiPhoneCall />} />
        <PriceCardLi tittle="Cancel anytime" icon={<AiFillPieChart />} />
        <PriceCardLi tittle="Premium support" icon={<GiCircleClaws />} />
        <PriceCardLi tittle="Premium support" icon={<MdLockReset />} />
      </div>
      <div className="flex justify-center items-center  _button_parent  ">
        <a
          className="flex justify-center items-center py-[10px] w-[100%] px-6 rounded text-[#fff] text-base font-bold bg-[#7d8dff]"
          href="!#"
        >
          <HiOutlineShoppingBag size={20} className="mr-1 child_button" />
          <span className="child_button">Purchase Essentials</span>
        </a>
      </div>
    </div>
  );
};

function PriceList() {
  return (
    <div>
      {" "}
      <div className="pt-[20px] pb-[80px]">
        <div className="grid grid-cols-3 gap-3">
          <PriceCard />
          <div className="bg-[#fff] hover:shadow shadow-lg  rounded h-fit p-[35px]">
            <PriceCardHeading
              heading="Recommended"
              price="$49"
              para="for Freelancers"
              headingStyle="text-[#fff]"
              headingbg="bg-[#2a2c394d]"
              priceStyle="text-red-900"
            />
            <div className="pt-6 py-2">
              <PriceCardLi tittle="Premium support" icon={<FiPhoneCall />} />
              <PriceCardLi tittle="Cancel anytime" icon={<AiFillPieChart />} />
              <PriceCardLi tittle="Premium support" icon={<GiCircleClaws />} />
              <PriceCardLi tittle="Premium support" icon={<MdLockReset />} />
              <PriceCardLi tittle="Premium support" icon={<GiCircleClaws />} />
              <PriceCardLi tittle="Premium support" icon={<GiCircleClaws />} />
            </div>
            <div className="flex justify-center items-center  _button_parent  ">
              <a
                className="flex justify-center items-center py-[10px] w-[100%] px-6 rounded text-[#fff] text-base font-bold bg-[#7d8dff]"
                href="!#"
              >
                <HiOutlineShoppingBag size={20} className="mr-1 child_button" />
                <span className="child_button">Purchase Essentials</span>
              </a>
            </div>
          </div>
          <div className="bg-[#fff] hover:shadow shadow-lg rounded h-fit p-[35px]">
            <PriceCardHeading
              heading="Most Popular"
              price="$99"
              para="For entreprises"
              headingStyle="text-[#7d8dff]"
              headingbg="bg-[#e3e6ff26]"
            />
            <div className="pt-6 py-2">
              <PriceCardLi tittle="Premium support" icon={<FiPhoneCall />} />
              <PriceCardLi tittle="Cancel anytime" icon={<AiFillPieChart />} />
              <PriceCardLi tittle="Premium support" icon={<GiCircleClaws />} />

              <PriceCardLi tittle="Premium support" icon={<MdLockReset />} />
            </div>
            <div className="flex justify-center items-center  _button_parent  ">
              <a
                className="flex justify-center items-center py-[10px] w-[100%] px-6 rounded text-[#fff] text-base font-bold bg-[#7d8dff]"
                href="!#"
              >
                <HiOutlineShoppingBag size={20} className="mr-1 child_button" />
                <span className="child_button">Purchase Essentials</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
