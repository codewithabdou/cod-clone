import IMAGES from "@constants/images";
import React from "react";

const AsSeenAs = () => {
  const partners = [
    IMAGES.SEEN1,
    IMAGES.SEEN2,
    IMAGES.SEEN3,
    IMAGES.SEEN4,
    IMAGES.SEEN5,
  ];

  return (
    <div className=" py-14 flex flex-col items-center justify-center gap-14 bg-white">
      <h1 className="text-4xl font-bold ">As Seen As</h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <div
            className="flex py-4 px-8  rounded-2xl justify-center items-center  h-28"
            key={index}
          >
            <img
              src={partner}
              className="black-and-white transition-all duration-500 "
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsSeenAs;
