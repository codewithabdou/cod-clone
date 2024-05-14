"use client";
import IMAGES from "@constants/images";
import Animated from "../Animated";
import { useTranslations } from "next-intl";

const HomePageAff = () => {
  const t = useTranslations("Homepage");
  return (
    <div className="min-h-screen items-center relative overflow-hidden gap-10 flex flex-col md:py-40 py-32 bg-red-100">
      <img
        src={IMAGES.BG_HOME_AFF}
        className="absolute object-cover top-0 scale-150 h-full w-full"
        alt="bg"
      />
      <img
        src={IMAGES.BG_FIX.FIRST}
        className="absolute bottom-0 h-auto    w-full"
        alt="bg-fix"
      />
      <h1 className="md:text-4xl  px-6 text-3xl text-center max-w-[38ch] leading-relaxed  tracking-normal  font-extrabold">
        {t("1")}{" "}
        <span className="text-[#FF0303]  leading-relaxed  tracking-normal ">
          {" "}
          {t("2")}
        </span>{" "}
        <span className="   leading-relaxed  tracking-normal">{t("3")}</span>
      </h1>
      <p className={`text-lg text-center font-bold text-[#131022]`}>{t("4")}</p>
      <img
        src={IMAGES.DASHBOARD}
        className="md:w-2/3 w-[90%] shadowing  animate-bounce-pers h-auto object-cover"
        alt=""
      />
      <Animated>
        <div className="flex animate-enter-opacity-translate items-center justify-center gap-8">
          <button className="bg-[#FF0303] h-14 flex items-center justify-center   text-[#fffae9] font-semibold md:px-6 px-4 py-3 rounded-md">
            {t("5")}
          </button>
          <div className="flex border-2 fpnt-semibold border-[#FF0303] h-14 rounded-md px-2 py-3 items-center justify-center gap-4">
            <img src={IMAGES.PLAY} className="h-8 w-auto" alt="" />
            <p className="text-[#FF0303] font-semibold">{t("6")}</p>
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default HomePageAff;
