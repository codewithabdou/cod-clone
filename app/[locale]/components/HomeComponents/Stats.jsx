import React from "react";

const Stats = () => {
  const stats = [
    {
      stat: "+20k",
      title: "Satisfied Clients",
      desc: "Our main goal is to provide for our clients the best services quality.",
    },
    {
      stat: "+10k",
      title: "Daily Orders",
      desc: "We maintain a large delivery capacity in the shortest time.",
    },
    {
      stat: "+17",
      title: "Warehouses",
      desc: "Our warehouses store all the goods you want to sell.",
    },
    {
      stat: "+9",
      title: "Countries",
      desc: "Our presence is expanding to cover more countries.",
    },
  ];
  return (
    <div className=" pt-14 pb-20 px-6 md:px-20 flex flex-wrap items-center justify-center gap-20 bg-gray-100">
      {stats.map((stat, index) => (
        <div className="flex w-full flex-col md:w-[25ch] gap-4">
          <h2 className="text-orange-500 font-bold text-4xl">{stat.stat} </h2>
          <p className="text-lg  font-semibold">{stat.title}</p>
          <p className="text-base text-gray-800">{stat.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
