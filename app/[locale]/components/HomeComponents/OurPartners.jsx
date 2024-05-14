"use client";

import IMAGES from "@constants/images";
import React from "react";
import Animated from "../Animated";
import { useTranslations } from "next-intl";

const OurPartners = () => {
  const t = useTranslations();

  const partners = [IMAGES.PARTNER6, IMAGES.PARTNER7];

  return (
    <div className=" py-24 flex flex-col items-center justify-center gap-14 bg-white">
      <Animated>
        <h1 className="text-[#131022] text-center px-4 text-3xl md:text-4xl font-bold">
          {t("Ourpartners")}
        </h1>
      </Animated>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <div
            className="flex py-4 px-8 bg-white rounded-2xl justify-center items-center  h-28"
            key={index}
          >
            <img
              src={partner}
              className="black-and-white h-28 transition-all duration-500 "
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
