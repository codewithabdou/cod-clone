"use client";

import IMAGES from "@constants/images";
import { useTranslations } from "next-intl";
const CardAff = () => {
  const t = useTranslations("Card");

  return (
    <div className={`flex   mt-20 items-center justify-center`}>
      <div
        className={`bg-red-100  relative gap-16 flex flex-col  items-center w-[90%] md:w-[85%] rounded-lg py-10 md:py-20`}
      >
        <img
          src={IMAGES.BG_FIX.FOURTH}
          className="absolute  top-0 left-0 h-20 w-auto"
          alt="bg-fix"
        />
        <img
          src={IMAGES.BG_FIX.FIFTH}
          className="absolute  bottom-0 right-[50%] translate-x-full h-16  w-auto"
          alt="bg-fix"
        />
        <div
          className={`flex   px-6  md:px-14 gap-8 justify-start flex-col w-full md:w-[70%]`}
        >
          <h1 className="text-[#131022] text-3xl md:text-4xl font-bold">
            {t("1")}
          </h1>
          <p className="text-gray-500">{t("2")}</p>
          <p className="text-gray-500">{t("3")}</p>
        </div>
        <button className="bg-[#FF0303] z-10 h-14 flex items-center justify-center   text-[#fffae9] font-semibold px-8  py-3 rounded-md">
          {t("4")}
        </button>
      </div>
    </div>
  );
};

export default CardAff;
