"use client";

import { useTranslations } from "next-intl";
import Animated from "../Animated";
import IMAGES from "@constants/images";
const Tutorials = () => {
  const t = useTranslations("Tutorials");

  const tuts = [t("2"), t("3"), t("4"), t("5")];

  return (
    <div className="flex flex-col gap-20 items-center justify-center  py-20">
      <Animated>
        <h1 className="text-[#131022] text-center px-4 text-3xl md:text-4xl font-bold">
          {t("1")}
        </h1>
      </Animated>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:px-10 xl:px-20 px-10 place-items-center gap-8">
        {tuts.map((tuto, index) => (
          <div
            className="relative flex flex-col gap-4 border h-full  shadow-slate-200 shadow-lg w-full  "
            key={index}
          >
            <img src={IMAGES.TUTO} alt="" />
            <p
              className={` font-bold  px-4 py-4 tracking-wide leading-relaxed text-base`}
            >
              {tuto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
