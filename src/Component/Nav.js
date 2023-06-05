import React from "react";
import Container from "./Container";
import Logo from "../Assets/Image/fast-logo-dark.png";
import { TfiSearch } from "react-icons/tfi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navli = ({ tittle }) => {
  return (
    <li className="px-[10px]">
      <a
        className="p-2 text-[14px] font-bold flex justify-center items-center"
        href="!#"
      >
        {tittle}
      </a>
    </li>
  );
};

function Nav() {
  return (
    <section className="py-2 px-[15px]  shadow w-full z-50">
      <Container>
        <div className="flex justify-between  items-center    ">
          <div className="flex justify-center items-center ">
            <a href="!#">
              <img className="h-[52px] w-auto py-[5px]" src={Logo} alt="logo" />
            </a>
            <div className="mx-2 self-stretch relative">
              <div className="bg-[#e9ecef] h-[60%] w-[1px] absolute top-[20%]" />
            </div>
            <a
              className="text-[14px] font-bold flex justify-center items-center "
              href="!#"
            >
              join us Now{" "}
              <span className="flex justify-center items-center ">
                <MdKeyboardArrowRight size={16} />
              </span>
            </a>
          </div>
          <div>
            <ul className="flex  justify-center items-center">
              <NavLink to="/">
                <Navli tittle="Home" />
              </NavLink>
              <NavLink to="/price">
                <Navli tittle="Price" />
              </NavLink>
              <NavLink to="/about">
                <Navli tittle="About" />
              </NavLink>
              <NavLink to="/blog">
                <Navli tittle="Blog" />
              </NavLink>
              <NavLink to="/contact">
                <Navli tittle="Contact" />
              </NavLink>

              <div className="mx-2 self-stretch relative">
                <div className="bg-[#e9ecef] h-[60%] w-[1px] absolute top-[20%]" />
              </div>
              <li className="px-[15px]">
                <Link
                  to="/search"
                  className="flex justify-center items-center"
                  href="!#"
                >
                  <TfiSearch />
                </Link>
              </li>
              <li className="px-2">
                <a className="flex justify-center items-center" href="!#">
                  <BsFacebook />
                </a>
              </li>
              <li className="px-2">
                <a className="flex justify-center items-center" href="!#">
                  <FaTwitter />
                </a>
              </li>
              <li className="px-2">
                <a className="flex justify-center items-center" href="!#">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Nav;
