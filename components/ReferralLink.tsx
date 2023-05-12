import React from "react";
import Image from "next/image";
import Moneybag from "./assets/money-bag.png";
import Copy from "./assets/copy.svg";

interface Props {
  fees: string;
  link: string;
}

const ReferralLink = (props: Props) => {
  return (
    <div className="bg-[#191B20] mt-4 p-4 rounded-xl text-white">
      <div className="flex gap-2">
        <Image src={Moneybag} width={30} height={30} alt="" />
        <p className="font-bold text-lg">{props.fees}</p>
      </div>
      <p className="text-gray-400 mt-4">Your Referral Link for xyz</p>
      <div className="bg-[#242731] mt-2 rounded-lg p-4">
        <div className="flex justify-between gap-[50px]">
          <p className="font-bold">{props.link} </p>
          <Image src={Copy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
