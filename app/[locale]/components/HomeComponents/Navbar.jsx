"use client";

import IMAGES from "@constants/images";
import Link from "next-intl/link";
import React, { useState, useEffect } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const [open, setOpen] = useState(false);
  const [openServicesMenu, setOpenServicesMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setShowDiv(false); // Scrolling down, hide the div
      } else {
        setShowDiv(true); // Scrolling up or at the top, show the div
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  const toggleServicesMenu = () => {
    setOpenServicesMenu((prev) => !prev);
  };

  function extractSubstring(inputString) {
    if (inputString === "/en" || inputString === "/ar") {
      return "/";
    }

    const regex = /\/([^/]+)$/; // Match "/" followed by one or more characters that are not "/"
    const match = inputString.match(regex);
    return match ? "/" + match[1] : "/"; // Return the matched substring or null if there's no match
  }

  return (
    <>
      {showDiv && (
        <nav
          className={`fixed  ${
            prevScrollPos > 10 || open ? "bg-white" : "bg-transparent"
          } z-50 w-full top-0`}
        >
          <div className="p-4 pt-6 h-16   hidden items-center justify-around lg:flex w-full">
            <Link className="w-[15%] " href="/">
              <img src={IMAGES.LOGO} className="h-16" alt="" />
            </Link>
            <div className="flex text-lg items-center gap-10 font-bold">
              <div className="hover:text-[#fa9e2f] ">Home</div>
              <p className="hover:text-[#fa9e2f]">About us</p>
              <div className="flex  relative  group  items-center">
                <div className="flex hover:text-[#fa9e2f] items-center gap-2">
                  Services
                  <span>
                    <IoIosArrowDown size={25} className="font-semibold" />
                  </span>
                </div>
                <div className="group-hover:scale-100 bg-white text-gray-600 flex after:absolute after:-top-4 after:rotate-45 after:border-t after:border-l after:w-8 after:h-8 after:bg-white scale-0 text-base  gap-2 font-semibold border w-[30ch] px-8 py-4 flex-col absolute top-16 transition-all duration-500">
                  <p className="hover:text-[#fa9e2f]">Sourcing</p>
                  <p className="hover:text-[#fa9e2f]">Custom Clearance</p>
                  <p className="hover:text-[#fa9e2f]">
                    Warehousing & Fulfillment
                  </p>
                  <p className="hover:text-[#fa9e2f]">Shipping</p>
                  <p className="hover:text-[#fa9e2f]">Call Center</p>
                  <p className="hover:text-[#fa9e2f]">COD Remittance</p>
                </div>
              </div>
              <p className="hover:text-[#fa9e2f]">How it works?</p>
              <p className="hover:text-[#fa9e2f]">FAQs</p>
            </div>
            <div className="flex items-center gap-4">
              {/* <Link href={extractSubstring(path)} locale="en">
                <img src={IMAGES.EN} className="w-6 h-auto" alt="" />
              </Link>
              <Link href={extractSubstring(path)} locale="ar">
                <img src={IMAGES.AR} className="w-10 h-auto" alt="" />
              </Link> */}
              <button className="bg-orange-500 text-sm text-white font-semibold px-10 py-3 rounded-full">
                Get Started
              </button>
            </div>
          </div>

          <div
            className={` lg:hidden relative flex w-full h-16  items-center justify-between px-8`}
          >
            <Link className="w-1/2 md:w-1/3  " href="/">
              <img src={IMAGES.LOGO} className="h-16" alt="" />
            </Link>
            <div className="flex items-center gap-4">
              {/* <Link href={extractSubstring(path)} locale="en">
                <img src={IMAGES.EN} className="w-6 h-auto" alt="" />
              </Link>
              <Link href={extractSubstring(path)} locale="ar">
                <img src={IMAGES.AR} className="w-10 h-auto" alt="" />
              </Link> */}
            </div>
            <div>
              {open ? (
                <ImCancelCircle
                  onClick={toggleMenu}
                  size={25}
                  className="font-semibold"
                />
              ) : (
                <RiMenuFoldLine
                  onClick={toggleMenu}
                  size={25}
                  className="font-semibold"
                />
              )}
            </div>
            <div
              className={` absolute transition-all duration-300 top-16  bg-white w-full h-[calc(100vh-4rem)] left-0 ${
                open ? "flex  flex-col" : "translate-x-full"
              }`}
            >
              <div className="flex  pl-8 pt-8  flex-col text-xl justify-center gap-6 font-bold">
                <p className="hover:text-[#fa9e2f]">Home</p>
                <p className="hover:text-[#fa9e2f]">About us</p>
                <div className=" ">
                  <div
                    onClick={toggleServicesMenu}
                    className="flex hover:text-[#fa9e2f] items-center gap-2"
                  >
                    Services
                    <span>
                      <IoIosArrowDown size={25} className="font-semibold" />
                    </span>
                  </div>
                  <div
                    className={`${
                      openServicesMenu ? "flex" : "hidden"
                    } flex-col top-full font-semibold text-gray-600  text-base pl-8 py-4 gap-2`}
                  >
                    <p className="hover:text-[#fa9e2f]">Sourcing</p>
                    <p className="hover:text-[#fa9e2f]">Custom Clearance</p>
                    <p className="hover:text-[#fa9e2f]">
                      Warehousing & Fulfillment
                    </p>
                    <p className="hover:text-[#fa9e2f]">Shipping</p>
                    <p className="hover:text-[#fa9e2f]">Call Center</p>
                    <p className="hover:text-[#fa9e2f]">COD Remittance</p>
                  </div>
                </div>
                <p className="hover:text-[#fa9e2f]">How it works?</p>
                <p className="hover:text-[#fa9e2f]">FAQs</p>
              </div>
              <div className="flex mt-8 items-center justify-center">
                <button className="bg-orange-500  text-sm text-white font-semibold px-10 py-3 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
