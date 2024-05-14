"use client";

import IMAGES from "@constants/images";
import Services from "./Services";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("homepage");

  return (
    <div className="min-h-screen flex flex-col items-center pt-40  w-full relative">
      <img
        src={IMAGES.BG_HOME}
        className="absolute object-cover top-0 h-full w-full"
        alt="bg"
      />
      <h1 className="md:text-4xl px-4 text-3xl text-center max-w-[50ch] leading-relaxed tracking-wide font-bold">
        We Enable Everyone to Start
        <span className="circle-sketch-highlight whitespace-nowrap leading-relaxed  mr-8">
          Grow and Scale
        </span>
        Ecommerce Business in the Middle East, Africa and Beyond.
      </h1>
      <Services />
      <button className="bg-orange-500 my-16   text-gray-100 font-semibold px-10 py-3 rounded-full">
        Get Started Now
      </button>
    </div>
  );
};

export default HomePage;
