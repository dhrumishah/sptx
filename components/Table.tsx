import React from "react";
import Image from "next/image";
import BTC from "./assets/btc.svg";
import AVAX from "./assets/avax.svg";
type Props = {};

const Table = (props: Props) => {
  return (
    <div className="mt-2 flex-col mb-4">
      <div className="flex gap-4">
        <button className="bg-transparent p-2 border-b-2 border-[#3772FF] text-white">
          First Tab
        </button>
        <button className="bg-transparent p-2 hover:border-b-2 hover:border-[#3772FF] hover:text-white text-gray-400">
          Second Tab
        </button>
      </div>
      <div>
        <div className="overflow-x-auto shadow-md mt-4 sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs bg-[#191B20]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ASSET
                </th>
                <th scope="col" className="px-6 py-3">
                  AMOUNT
                </th>
                <th scope="col" className="px-6 py-3">
                  USER ACCOUNT
                </th>
                <th scope="col" className="px-6 py-3">
                  REFERRAL EARNING
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#24273166] text-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white flex gap-2 text-center"
                >
                  <Image src={BTC} height={20} width={30} alt="" />
                  <div className="flex-col">
                    <p className="text-left">Bitcoin</p>
                    <div className="flex gap-2">
                      <p className="text-xs text-gray-400">Put</p>
                      <Image src={AVAX} alt="" />
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 flex-col">
                  <p>0.0000 BNB</p>
                  <p className="text-xs text-gray-400">Expired</p>
                </td>
                <td className="px-6 py-4">0xFbE..0f58A7D</td>
                <td className="px-6 py-4 flex-col">
                  <p>0.000.BNB</p>
                  <p className="text-xs text-gray-400 cursor-pointer">
                    View on BSC Scan
                  </p>
                </td>
              </tr>
              <tr className="bg-[#24273166] text-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white flex gap-2 text-center"
                >
                  <Image src={BTC} height={20} width={30} alt="" />
                  <div className="flex-col">
                    <p className="text-left">Bitcoin</p>
                    <div className="flex gap-2">
                      <p className="text-xs text-gray-400">Put</p>
                      <Image src={AVAX} alt="" />
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 flex-col">
                  <p>0.0000 BNB</p>
                  <p className="text-xs text-gray-400">Expired</p>
                </td>
                <td className="px-6 py-4">0xFbE..0f58A7D</td>
                <td className="px-6 py-4 flex-col">
                  <p>0.000.BNB</p>
                  <p className="text-xs text-gray-400 cursor-pointer">
                    View on BSC Scan
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
