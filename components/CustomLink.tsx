import React from "react";
import Image from "next/image";
import Avalanche from "./assets/avalanche.svg";
import Downarrow from "./assets/down-arrow.svg";
import Arrow from "./assets/arrow-left.svg";
import Wallet from "./assets/wallets.svg";
import Cancel from "./assets/cancel.svg";

type Props = {};

const CustomLink = (props: Props) => {
  return (
    <div className=" bg-black w-full text-white mt-8">
      <div className="mt-4 p-6 justify-center">
        <div className="flex gap-2 justify-between">
          <div className="bg-[#353945] p-4 rounded-lg flex gap-2 cursor-pointer">
            <Image src={Avalanche} alt="" />
            <p>Avalanche</p>
            <Image src={Downarrow} alt="" />
          </div>
          <div className="border-2 border-blue-600 rounded-lg text-white items-center p-2 flex gap-x-4 cursor-pointer">
            <Image src={Wallet} width={20} height={20} alt="wallet" />
            <h2 className="text-white">0xf6...1353</h2>
            <Image src={Downarrow} alt="" />
          </div>
        </div>
        <div className="flex mt-4 gap-4">
          <Image src={Arrow} alt="" />
          <p className="text-white text-xl font-semibold">Custom Links</p>
        </div>
        <p className="mt-4 text-white text-center">
          https://testnet.xyz.xyz/trade?ref=
        </p>

        <input
          className="bg-[#242731] w-full mt-4 p-4 rounded-lg "
          placeholder="ENTER"
        ></input>
        <div className="flex mt-4 justify-center">
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
          <div className="border-[0.5px] border-gray-600 rounded-lg text-white items-center px-4 py-2 flex gap-x-4">
            <Image src={Cancel} alt="cancel" />
            <h2 className="text-white cursor-pointer">Cancel</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLink;
