import React from "react";

type Props = {};

const Rewards = (props: Props) => {
  return (
    <div className="bg-[#191B20] mt-4 p-4 rounded-xl text-white flex justify-between">
      <div className="flex flex-col">
        <h2 className="text-lg mb-4 font-bold">Your Rewards</h2>
        <h1 className="text-2xl font-semibold mb-4">$ 0.26231428</h1>
        <div className="flex gap-2">
          <button className="bg-[#353945] rounded-2xl p-[6px] text-sm">
            $40 AVAX
          </button>
          <button className="bg-[#353945] rounded-2xl p-[6px] text-sm">
            $10 BNB
          </button>
          <button className="bg-[#353945] rounded-2xl p-[6px] text-sm">
            $210 BTC
          </button>
        </div>
      </div>
      <div className="self-center p-4">
        <button
          type="button"
          className="text-white gap-2 bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5913 15.6857H5.59131V13.7295H13.5913V1.99222H3.59131V7.86084H1.59131V1.01411C1.59131 0.474201 2.03931 0.0360107 2.59131 0.0360107H14.5913C15.1433 0.0360107 15.5913 0.474201 15.5913 1.01411V14.7076C15.5913 15.2475 15.1433 15.6857 14.5913 15.6857Z"
              fill="white"
            />
            <path
              d="M11.5912 3.94843H5.59125L7.88425 6.19122L0.177246 13.7295L1.59125 15.1125L9.29825 7.57425L11.5912 9.81705V3.94843Z"
              fill="white"
            />
          </svg>
          Custon link
        </button>
      </div>
    </div>
  );
};

export default Rewards;
