"use client";

import IMAGES from "@constants/images";
import Animated from "../Animated";
import { useTranslations } from "next-intl";

const OurLocations = () => {
  const t = useTranslations("Ourlocations");

  return (
    <div className="grid grid-cols-1  gap-6  md:px-40 px-6  lg:grid-cols-2">
      <div
        className={`flex pt-10   lg:pt-0 justify-center max-w-[60ch]   flex-col gap-8`}
      >
        <Animated>
          <h1 className="text-[#131022] md:px-0 px-4 text-3xl md:text-4xl font-bold">
            Our Locations
          </h1>
        </Animated>
        <h5 className="text-xl font-semibold">
          Our growing network of services allows for faster delivery and shorter
          transit times
        </h5>
        <p className="text-base text-gray-900">
          {" "}
          With COD NETWORK Growing Warehouse Network and seamless integrations,
          we help you reach your customers quickly, effectively, and affordably.
          Expand your business and distribute your inventory in strategically
          located warehouses spanning four continents and more than 9 countries.
        </p>
        <p className="text-orange-500 px-4 font-semibold underline-offset-2 underline">
          Start Now
        </p>
      </div>
      <div className={`flex  py-10 items-center justify-center`}>
        <img
          src={IMAGES.COUNTRIES}
          className="lg:h-[90vh] h-full w-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurLocations;
