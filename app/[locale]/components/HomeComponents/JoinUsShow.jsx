import React from "react";

import IMAGES from "@constants/images";
import JoinCard from "./JoinCard";
import Link from "next/link";

const JoinUsShow = () => {
  const cards = [
    {
      img: IMAGES.SELLER,
      desc: (
        <p className="w-[28ch] text-center">
          Start selling your own products and goods in multiple countries in
          MENA region by taking advantage of our services.
        </p>
      ),
      action: (
        <button className="bg-orange-500   text-gray-100 font-semibold px-10 py-3 rounded-full">
          Get Started
        </button>
      ),
    },
    {
      img: IMAGES.AFFILIATE,
      desc: (
        <p className="w-[25ch] text-center">
          Promote different offers and products listed on our platform and
          receive important commissions.
        </p>
      ),
      action: (
        <Link href="/affiliate">
          <button className="bg-orange-500   text-gray-100 font-semibold px-10 py-3 rounded-full">
            Learn more
          </button>
        </Link>
      ),
    },
  ];
  return (
    <div className="min-h-screen px-4 my-10 flex flex-col items-center gap-10">
      <h2 className="text-4xl font-bold">Join us today!</h2>
      <p className=" text-center text-gray-500 max-w-[42ch]">
        You can join us today by choosing the model that suits you. We offer
        both Seller and Affiliate models.
      </p>
      <div className="flex justify-center items-center flex-wrap gap-8  ">
        {cards.map((card, index) => (
          <JoinCard card={card} key={index} />
        ))}
      </div>
      <p className="mt-10 text-sm text-gray-800">
        Want to get more informations?{" "}
        <span className="text-orange-500 hover:underline">Contact us.</span>
      </p>
    </div>
  );
};

export default JoinUsShow;
