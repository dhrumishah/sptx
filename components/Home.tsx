import React from "react";
import Image from "next/image";
import Wallet from "./assets/wallets.svg";
import Bitcoin from "./assets/bitcoin.png";
import Cross from "./assets/cross.png";
import ReferralLink from "./ReferralLink";
import Table from "./Table";
import Rewards from "./Rewards";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="ml-64 mt-8">
      <div className="h-min-fit w-[800px] bg-black border-r border-gray-700 p-4">
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
        <div className="bg-[#ABE8FF] p-4 rounded-lg mt-6 relative">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex justify-between">
            <div>
              <button className="bg-white px-4 py-[6px] rounded-lg mt-4">
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
          <div className="absolute inline-flex items-center justify-center w-6 h-6 -top-2 -right-2">
            <Image
              src={Cross}
              width={20}
              height={20}
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>
        <Rewards />
        <div className="flex gap-6 justify-center ">
          <ReferralLink
            fees="12.5% of fee"
            link="https://unityexchange.design"
          />
          <ReferralLink
            fees="12.5% of fee"
            link="https://unityexchange.design"
          />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Home;
