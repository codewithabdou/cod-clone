import React from "react";
import IMAGES from "@constants/images";
import { BiRightArrowAlt } from "react-icons/bi";

const OurServices = () => {
  const services = [
    {
      name: "Sourcing",
      img: IMAGES.ICON7,
    },
    {
      name: "Warehousing & Fulfillment",
      img: IMAGES.ICON8,
    },
    {
      name: "Call Center",
      img: IMAGES.ICON9,
    },
    {
      name: "Custom Clearance",
      img: IMAGES.ICON10,
    },
    {
      name: "Shipping",
      img: IMAGES.ICON11,
    },
    {
      name: "COD Remittance",
      img: IMAGES.ICON12,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 px-6 gap-4  md:px-32 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="bg-gray-200  text-xs font-bold tracking-wider rounded-md p-2 w-fit">
            OUR SERVICES
          </div>
          <h1 className="text-4xl leading-snug font-bold  ">
            Let COD Network take over all the rest of the heavy lifting!
          </h1>
        </div>
        <div className="flex items-center text-lg">
          An all-in-one digital platform that allows full visibility of the
          entire e-commerce selling cycle from Sourcing, e-fulfillment, order
          confirmation, delivery, Payment processing, Collection and merchants
          digital wallets.
        </div>
      </div>
      <div className="grid my-28 grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-32">
        {services.map((service, index) => (
          <div className="flex  transition-all duration-500 group hover:bg-slate-50 bg-white hover:border-slate-50 h-24 border-orange-300 rounded-2xl border-2 items-center justify-evenly">
            <div className="flex w-[60%] items-center gap-8">
              <img src={service.img} className=" h-14 w-auto" alt="" />
              <p className="font-bold text-lg">{service.name}</p>
            </div>
            <div>
              <BiRightArrowAlt
                className="text-gray-500 transition-all duration-500 group-hover:text-orange-500"
                size={30}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-4 pt-4 pb-10">
        <button className="bg-orange-500   text-gray-100 font-semibold px-10 py-3 rounded-full">
          Our Services
        </button>
        <p>
          Want to join us?{" "}
          <span className="hover:underline font-bold"> Get Started</span>
        </p>
      </div>
    </div>
  );
};

export default OurServices;
