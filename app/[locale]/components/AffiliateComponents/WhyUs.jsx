"use client";

import { useTranslations } from "next-intl";
import Animated from "../Animated";
import IMAGES from "@constants/images";

const WhyUs = () => {
  const t = useTranslations("Whyus");

  const whyUsMenu = [
    {
      img: IMAGES.ICON13,
      title: t("2"),
      desc: t("3"),
    },
    {
      img: IMAGES.ICON14,
      title: t("4"),
      desc: t("5"),
    },
    {
      img: IMAGES.ICON15,
      title: t("6"),
      desc: t("7"),
    },
  ];

  return (
    <div
      className="flex flex-col gap-20 items-center justify-center  py-20"
      id="whyus"
    >
      <Animated>
        <h1 className="text-[#131022] text-center px-4 text-2xl md:text-4xl font-bold">
          {t("1")}
        </h1>
      </Animated>
      <div className={`flex  flex-wrap gap-16 items-center justify-center`}>
        {whyUsMenu.map((item, index) => (
          <div
            className="flex flex-col gap-4 justify-center items-center"
            key={index}
          >
            <img className="h-14 w-auto" src={item.img} alt="" />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-center text-base max-w-[35ch] text-gray-500 ">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
