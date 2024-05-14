"use client";

import React from "react";
import Animated from "../Animated";
import IMAGES from "@constants/images";
import { useTranslations } from "next-intl";

const Support = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-14 py-32 px-4">
      <Animated>
        <h3 className="text-[#131022] text-center  text-xl md:text-2xl font-medium">
          {t("Support")}
        </h3>
      </Animated>
      <div className="flex flex-wrap gap-14 items-center justify-center">
        {IMAGES.PLATEFORMS.map((plat, index) => (
          <Animated key={index}>
            <div className="flex items-center justify-center ">
              <img
                src={plat}
                className="opacity-50 black-and-white h-8 w-auto"
                alt=""
              />
            </div>
          </Animated>
        ))}
      </div>
    </div>
  );
};

export default Support;
