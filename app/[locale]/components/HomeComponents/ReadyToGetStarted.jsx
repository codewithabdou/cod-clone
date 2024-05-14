import React from "react";

const ReadyToGetStarted = () => {
  return (
    <div className="h-96 w-full md:px-32 px-4 flex items-center justify-center relative">
      <div className="h-full bg-[#0e0d10] absolute top-0 left-0 w-full"></div>
      <div className="h-1/2 bg-slate-100 absolute top-0 left-0 w-full"></div>
      <div className="flex rounded-3xl px-[10%]  z-10 bg-white justify-center items-center flex-col gap-10 py-14 md:py-20 ">
        <h1 className="text-4xl text-center leading-normal font-bold">
          Ready To Get Started?
        </h1>
        <p className="text-center text-gray-700 text-base max-w-[58ch]">
          Get in touch now with our customer service representive for more
          details. Request more informations about our services for your
          business needs.
        </p>
        <button className="bg-orange-500    text-gray-100 font-semibold px-10 py-3 rounded-full">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default ReadyToGetStarted;
