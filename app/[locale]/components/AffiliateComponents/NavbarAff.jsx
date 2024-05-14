"use client";

import IMAGES from "@constants/images";
import Link from "next-intl/link";
import React, { useState, useEffect } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const NavbarAff = () => {
  const path = usePathname();
  const t = useTranslations("Navbar");

  const [open, setOpen] = useState(false);
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
      {(showDiv || open) && (
        <nav
          className={`fixed  ${
            prevScrollPos > 10 || open ? "bg-white" : "bg-transparent"
          } z-50 w-full  top-0`}
        >
          <div
            className={`p-4 py-6 h-16 hidden items-center justify-around lg:flex w-full`}
          >
            <Link className="w-[15%] " href="/affiliate">
              <img src={IMAGES.LOGO} className="h-6 w-auto" alt="" />
            </Link>
            <div className={`flex  text-base items-center gap-7 font-bold`}>
              <Link href="#whyus">
                <p className="hover:text-orange-500 text-[#585c7b]  ">
                  {t("1")}
                </p>
              </Link>
              <Link href="#howtostart">
                <p className="hover:text-orange-500 text-[#585c7b] ">
                  {t("2")}
                </p>
              </Link>
              <Link href="#wheretopromote">
                <p className="hover:text-orange-500 text-[#585c7b] ">
                  {t("3")}
                </p>
              </Link>
              <Link href="#faq">
                <p className="hover:text-orange-500 text-[#585c7b] ">
                  {t("4")}
                </p>
              </Link>
            </div>
            <div className={`flex    items-center gap-6`}>
              <Link href={extractSubstring(path)} locale="en">
                <img src={IMAGES.EN} className="w-6 h-auto" alt="" />
              </Link>
              <Link href={extractSubstring(path)} locale="ar">
                <img src={IMAGES.AR} className="w-10 h-auto" alt="" />
              </Link>
              <Link href="/">
                <button
                  className={`  hover:text-orange-500 font-semibold text-black `}
                >
                  {t("5")}
                </button>
              </Link>
              <Link href="/">
                <button
                  className={` bg-orange-500   font-semibold text-[#fffae9] rounded-md px-6 py-3`}
                >
                  {t("6")}
                </button>
              </Link>
            </div>
          </div>

          <div
            className={`  lg:hidden  relative flex w-full h-16  items-center justify-between px-8`}
          >
            <Link className="w-1/2 md:w-1/3  " href="/affiliate">
              <img src={IMAGES.LOGO} className="h-6 w-auto" alt="" />
            </Link>
            <div className="flex items-center gap-4">
              <Link href={extractSubstring(path)} locale="en">
                <img src={IMAGES.EN} className="w-6 h-auto" alt="" />
              </Link>
              <Link href={extractSubstring(path)} locale="ar">
                <img src={IMAGES.AR} className="w-10 h-auto" alt="" />
              </Link>
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
              className={` absolute pt-16 transition-all duration-300 top-14  bg-white w-full h-screen overflow-hidden left-0 ${
                open ? "flex  flex-col" : "translate-x-full"
              } `}
            >
              <div
                className={`flex  px-8 pt-8  flex-col text-xl justify-center gap-6 font-bold `}
              >
                <Link href="#whyus" onClick={toggleMenu}>
                  <p className="hover:text-orange-500  ">{t("1")}</p>
                </Link>
                <Link href="#howtostart" onClick={toggleMenu}>
                  <p className="hover:text-orange-500 ">{t("2")}</p>
                </Link>

                <Link href="#wheretopromote" onClick={toggleMenu}>
                  <p className="hover:text-orange-500 ">{t("3")}</p>
                </Link>
                <Link href="#faq" onClick={toggleMenu}>
                  <p className="hover:text-orange-500 ">{t("4")}</p>
                </Link>
              </div>
              <div className="flex mt-16 gap-4 items-center justify-center">
                <Link href="/">
                  <button
                    className={` hover:text-orange-500 font-semibold text-black `}
                  >
                    {t("5")}
                  </button>
                </Link>
                <Link href="/">
                  <button
                    className={`bg-orange-500 font-semibold  text-[#fffae9] rounded-md px-6 py-3`}
                  >
                    {t("6")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavbarAff;
