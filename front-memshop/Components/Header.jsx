import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import {VscChromeClose} from "react-icons/vsc"
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatmenu, setshowCatmenu] = useState(false);
  const [show, setShow] = useState("translate-Y-0");
  const [lastScrollY, setlastScrollY] = useState(0);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center 
        justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-{60px} flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatmenu={showCatmenu} setshowCatmenu={setshowCatmenu} />
        {/* ---------------------------Icon Start------------------------------------ */}
        <div className="flex items-center gap-2 text-black">
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
           items-center hover:bg-black/[0.05] cursor-pointer relative"
          >
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]
           rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
           text-[10px] md:text-[12px] flex justify-center items-center px-[2px]
           md:px-[5px]"
            >
              51
            </div>
          </div>
          {/* ---------------------------Icon End------------------------------------ */}
          {/* ---------------------------Icon Start------------------------------------ */}

          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
           items-center hover:bg-black/[0.05] cursor-pointer relative"
          >
            <BsCart className="text-[15px] md:text-[20px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]
           rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
           text-[10px] md:text-[12px] flex justify-center items-center px-[2px]
           md:px-[5px]"
            >
              5
            </div>
          </div>
        </div>
        {/* ---------------------------Icon End------------------------------------ */}
        {/* ---------------------------Mobile Icon Start------------------------------------ */}
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
          {mobileMenu ? (
            <VscChromeClose
              className="rext-[16px]"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-[20px]"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
        {/* ---------------------------Mobile Icon End------------------------------------ */}
      </Wrapper>
    </header>
  );
};

export default Header;
