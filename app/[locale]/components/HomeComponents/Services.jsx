import IMAGES from "@constants/images";
import React from "react";

const Services = () => {
  const services = [
    {
      name: "Sourcing",
      img: IMAGES.ICON1,
    },
    {
      name: "Fulfillment",
      img: IMAGES.ICON2,
    },
    {
      name: "Call-center",
      img: IMAGES.ICON3,
    },
    {
      name: "Warehousing",
      img: IMAGES.ICON4,
    },
    {
      name: "Shipping",
      img: IMAGES.ICON5,
    },
    {
      name: "Remittance",
      img: IMAGES.ICON6,
    },
  ];

  return (
    <div className="w-2/3 mt-32 items-center justify-center md:gap-14 gap-12 flex flex-wrap">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex transition-all zoom-container  flex-col items-center gap-2"
        >
          <img className="h-[5.5rem] w-auto" src={service.img} alt="" />
          <div className="w-full bg-gray-300 h-[1px]"></div>
          <p className=" ">{service.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
