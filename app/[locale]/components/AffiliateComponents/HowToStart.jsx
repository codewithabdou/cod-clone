"use client";

import React from "react";
import Animated from "../Animated";
import { useTranslations, useLocale } from "next-intl";

const HowToStart = () => {
  const lang = useLocale();
  const t = useTranslations("Howtostart");

  const steps = [
    {
      num: 1,
      title: t("2"),
      desc: t("3"),
      class: `relative flex flex-col

  ${lang === "en" ? "order-1" : "order-4"}

   ${
     lang === "en" ? "text-start " : "items-end  text-end "
   }   gap-8  pb-8 h-56 shadow-slate-200 shadow-lg w-full  `,
    },
    {
      num: 2,
      title: t("4"),
      desc: t("5"),
      class: `relative flex flex-col

  ${lang === "en" ? "order-2" : "order-3"}

   ${
     lang === "en" ? "text-start " : "items-end  text-end "
   }   gap-8  pb-8 h-56 shadow-slate-200 shadow-lg w-full  `,
    },
    {
      num: 3,
      title: t("6"),
      desc: t("7"),
      class: `relative flex flex-col

  ${lang === "en" ? "order-3" : "order-2"}

   ${
     lang === "en" ? "text-start " : "items-end  text-end "
   }   gap-8  pb-8 h-56 shadow-slate-200 shadow-lg w-full  `,
    },
    {
      num: 4,
      title: t("8"),
      desc: t("9"),
      class: `relative flex flex-col

  ${lang === "en" ? "order-4" : "order-1"}

   ${
     lang === "en" ? "text-start " : "items-end  text-end "
   }   gap-8  pb-8 h-56 shadow-slate-200 shadow-lg w-full  `,
    },
  ];

  return (
    <div className="flex flex-col px-10 gap-16  py-10" id="howtostart">
      <Animated>
        <h1 className="text-[#131022] text-center  text-2xl md:text-4xl font-bold">
          {t("1")}
        </h1>
      </Animated>
      <div
        className={`grid grid-cols-1 order md:grid-cols-2 xl:grid-cols-4 md:px-10 xl:px-20 px-0 place-items-center gap-8`}
      >
        {steps.map((step) => (
          <div key={step.num} className={step.class}>
            <h1
              className={`outline-number ${
                lang === "en" ? "left-4 " : "right-4"
              } `}
            >
              {step.num}
            </h1>
            <h2 className="text-[#FF0303] pt-16 font-extrabold px-6 text-2xl">
              {step.title}
            </h2>
            <p className=" px-4 text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToStart;
