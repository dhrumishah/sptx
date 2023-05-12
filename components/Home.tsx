import React from "react";
import Image from "next/image";
import Wallet from "./assets/wallets.svg";
import Bitcoin from "./assets/bitcoin.png";
import Rewards from "./Rewards";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-black h-screen mt-8 ml-64">
      <div className="w-[800px] bg-transparent h-screen border-r border-gray-700 p-4">
        <div className="flex justify-between">
          <button className="bg-transparent p-2 border-b-2 border-[#3772FF] text-white">
            Section
          </button>
          <div className="bg-[#191B20] w-[200px] rounded-md text-white items-center p-2 flex gap-x-4">
            <Image src={Wallet} width={20} height={20} alt="wallet" />
            <h2 className="text-white">0.2 $XYZ</h2>
            <button className="bg-[#A3E3FF] rounded-md text-[#3772FF] px-2 font-bold">
              Tier 1
            </button>
          </div>
        </div>
        <div className="bg-[#ABE8FF] p-4 rounded-lg mt-6">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex justify-between">
            <div>
              <button className="bg-white px-4 py-[6px] rounded-lg mt-6">
                Tutorial
              </button>
            </div>

            <Image
              src={Bitcoin}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
        </div>
        <Rewards />
      </div>
    </div>
  );
};

export default Home;
