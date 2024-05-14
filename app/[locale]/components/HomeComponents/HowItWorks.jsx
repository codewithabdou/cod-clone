import IMAGES from "@constants/images";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-[#f7f1ec] gap-12 flex flex-col  p-10 md:p-32 w-full min-h-screen">
      <h1 className="md:text-5xl  text-4xl font-bold">How it works ?</h1>
      <img
        src={IMAGES.STARTSELLING.DESKTOP}
        className="lg:block hidden"
        alt=""
      />
      <img
        src={IMAGES.STARTSELLING.MOBILE}
        className="block lg:hidden"
        alt=""
      />
    </div>
  );
};

export default HowItWorks;
