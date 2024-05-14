"use client";

import Animated from "../Animated";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import IMAGES from "@constants/images";
import { useTranslations } from "next-intl";

const FaqAff = () => {
  const t = useTranslations("Faq");

  const QA = [
    {
      Q: t("1"),
      A: t("2"),
    },
    {
      Q: t("3"),
      A: t("4"),
    },
    {
      Q: t("5"),
      A: t("6"),
    },
    {
      Q: t("7"),
      A: t("8"),
    },
    {
      Q: t("9"),
      A: t("10"),
    },
    {
      Q: t("11"),
      A: (
        <div className="flex flex-col gap-4">
          <p>{t("12.1")}</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-black text-sm text-white rounded-md py-1 px-1">
              {t("12.2")}
            </div>
            <div className="bg-black text-sm text-white rounded-md py-1 px-1">
              {t("12.3")}
            </div>
            <div className="bg-black text-sm text-white rounded-md py-1 px-1">
              {t("12.4")}
            </div>
            <div className="bg-black text-sm text-white rounded-md py-1 px-1">
              {t("12.5")}
            </div>
          </div>
        </div>
      ),
    },

    {
      Q: t("13"),
      A: t("14"),
    },
    {
      Q: t("15"),
      A: (
        <div className="flex flex-col gap-4">
          <p>{t("16")}</p>
          <div className="flex gap-4">
            <div className="bg-black text-sm text-white rounded-md py-1 px-1">
              ns1.cod.network
            </div>
            <div className="bg-black text-sm text-white rounded-md py-1 px-1">
              ns2.cod.network
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      id="faq"
      className="bg-red-100 overflow-hidden relative justify-center items-center gap-16 flex flex-col py-20 md:py-28  lg:py-40"
    >
      <img
        src={IMAGES.BG_FIX.FIRST}
        className="absolute bottom-0 z-10 h-auto w-full"
        alt="bg-fix"
      />
      <img
        src={IMAGES.BG_FIX.SECOND}
        className="absolute top-[10%] left-0 h-96 w-auto"
        alt="bg-fix"
      />
      <img
        src={IMAGES.BG_FIX.THIRD}
        className="absolute  bottom-0 right-0 h-96 w-auto"
        alt="bg-fix"
      />
      <img
        src={IMAGES.BG_FIX.FIRST}
        className="absolute top-0 h-auto rotate-180 w-full"
        alt="bg-fix"
      />
      <Animated>
        <h1 className="text-[#131022] text-center px-4 text-3xl md:text-4xl font-bold">
          {t("17")}
        </h1>
      </Animated>
      <Accordion className="lg:w-1/2 z-10   md:w-2/3 w-[95%]" collapsible>
        {QA.map((item, i) => (
          <AccordionItem key={i} value={i + 1}>
            <AccordionTrigger className={`  gap-4  `}>
              <p className={` `}>{item.Q}</p>
            </AccordionTrigger>
            <AccordionContent className={` `}>{item.A}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="z-10 bg-[#FF0303] mt-8 text-white flex flex-col items-center justify-center gap-3 py-3 px-6 rounded-md">
        <p>{t("18")}</p>
        <p>support@cod.network</p>
      </div>
    </div>
  );
};

export default FaqAff;
