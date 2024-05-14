import React from "react";
import Animated from "../Animated";
import IMAGES from "@constants/images";

const WhereToPromote = () => {
  const countries = [
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Oman",
    "united Arab Emirates",
    "Bahrain",
    "Morocco",
    "Senegal",
    "Mali",
    "Ivory Coast",
    "India",
  ];

  return (
    <div
      className="flex flex-col justify-center items-center gap-12 px-4 py-32"
      id="wheretopromote"
    >
      <Animated>
        <h1 className="text-[#131022] text-center  text-2xl md:text-4xl font-bold">
          Where to Promote ?
        </h1>
      </Animated>
      <p className="text-center max-w-[75ch] text-lg text-gray-500">
        Our service is currently available in the GCC countries, Morocco, and
        West Africa. We are expanding to Europe in the near future. Our
        expertise enables you to enter markets with a high purchasing power,
        resulting in a high rate of order confirmations and deliveries.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 ">
        {countries.map((name, index) => (
          <div
            className="flex flex-col gap-6 max-w-xs  items-center  rounded-md transition-all duration-500 hover:shadow-lg shadow-slate-400 hover:-translate-y-1 justify-center py-6 w-[40%] md:w-[30%] lg:w-[20%] md:py-12"
            key={index}
          >
            <img
              src={IMAGES.SEPCOUNTRIES[index]}
              className="h-24 w-auto"
              alt=""
            />
            <p className=" text-center text-sm text-gray-500 max-w-[10ch] ">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhereToPromote;
