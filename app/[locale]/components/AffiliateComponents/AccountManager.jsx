"use client";

import IMAGES from "@constants/images";
import Link from "next/link";
import Animated from "../Animated";
import { useTranslations } from "next-intl";

const AccountManager = () => {
  const t = useTranslations("Accountmanager");

  return (
    <div className="grid grid-cols-1 py-20  gap-8  md:px-40 px-6  lg:grid-cols-2">
      <div
        className={`flex pt-10  order-2 lg:order-1  lg:pt-0 justify-center max-w-[60ch]   flex-col gap-12`}
      >
        <Animated>
          <div
            className={`bg-gray-200 mb-2 w-fit   text-xs font-semibold tracking-wider rounded-md py-1 px-2 `}
          >
            {t("1")}
          </div>
          <h1 className="text-[#FF0303] mb-2 text-3xl md:text-4xl font-bold">
            {t("2")}
          </h1>
          <h5 className="text-xl font-semibold">{t("3")}</h5>
        </Animated>

        <p className="text-base text-gray-900">{t("4")}</p>
        <Link href="https://my.adcod.co/register" target="_blank">
          <button className="bg-[#FF0303]  flex items-center justify-center w-fit   text-[#fffae9] font-semibold  px-10 py-3 rounded-md">
            {t("5")}
          </button>
        </Link>
      </div>
      <div className={`flex py-10  items-center justify-center`}>
        <img src={IMAGES.ACCOUNT_MANAGER} className=" h-full w-auto" alt="" />
      </div>
    </div>
  );
};

export default AccountManager;
