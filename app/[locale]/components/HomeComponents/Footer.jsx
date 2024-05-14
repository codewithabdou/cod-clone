import React from "react";
import IMAGES from "@constants/images";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const content = [
    {
      head: "ABOUT",
      links: [
        { name: "About us", link: " " },
        { name: "How it Works ?", link: " " },
        { name: "Locations", link: " " },
        { name: "Contact us", link: " " },
        { name: "Terms & Conditions", link: " " },
        { name: "Privacy Policy", link: " " },
      ],
    },
    {
      head: "SERVICES",
      links: [
        { name: "Sourcing", link: " " },
        { name: "Custom Clearance", link: " " },
        { name: "Warehousing & Fulfillment", link: " " },
        { name: "Shipping", link: " " },
        { name: "Call Center", link: " " },
        { name: "COD Remittance", link: " " },
      ],
    },
    {
      head: "ADDITIONAL LINKS",
      links: [
        { name: "COD Network Academy", link: " " },
        { name: "Help Center", link: " " },
        { name: "FAQ", link: " " },
      ],
    },
  ];
  return (
    <footer className="bg-[#0e0d10] text-gray-100 md:justify-center justify-start  flex items-center px-3 gap-y-8 gap-4 md:gap-20 flex-wrap md:px-20 pb-16 pt-24">
      <div className="flex flex-col gap-6 ">
        <img src={IMAGES.LOGO_WHITE} className="w-52" alt="" />
        <p className="w-[30ch]">
          We Enable Everyone to Start, Grow and Scale E-commerce Business in the
          Middle East, Africa and Beyond.
        </p>
        <div className="flex gap-3">
          <AiFillFacebook size={20} />
          <AiFillInstagram size={20} />
          <AiFillLinkedin size={20} />
          <AiFillYoutube size={20} />
        </div>
        <p className="text-xs text-gray-400">© 2022 COD.NETWORK</p>
      </div>
      {content.map((tab, index) => (
        <div className="" key={index}>
          <p className="text-sm font-semibold mb-4">{tab.head}</p>
          {tab.links.map((link, index) => (
            <p
              className="mb-2 text-gray-400 font-semibold hover:text-gray-100 transition-all duration-500"
              key={index}
            >
              {link.name}
            </p>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
