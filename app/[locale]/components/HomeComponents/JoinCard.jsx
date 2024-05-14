import React from "react";
import Animated from "../Animated";

const JoinCard = ({ card }) => {
  return (
    <Animated>
      <div className="py-8 zoom-container w-80 md:w-96 rounded-3xl h-full shadow-xl flex flex-col items-center gap-10 pb-20 ">
        <img src={card.img} className="h-32 w-auto" alt="" />
        {card.desc}
        {card.action}
      </div>
    </Animated>
  );
};

export default JoinCard;
