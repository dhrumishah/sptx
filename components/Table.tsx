"use client";
import React, { useState } from "react";
import Image from "next/image";
import BTC from "./assets/btc.svg";
import AVAX from "./assets/avax.svg";
import { useEffect } from "react";

type Props = {};

const Table = (props: Props) => {
  const [asset1, setAsset1] = useState("");
  const [amount1, setAmount1] = useState("");
  const [refearn1, setRefearn1] = useState("");
  const [user1, setUser1] = useState("");
  const [asset2, setAsset2] = useState("");
  const [amount2, setAmount2] = useState("");
  const [refearn2, setRefearn2] = useState("");
  const [user2, setUser2] = useState("");
  const [status1, setStatus1] = useState("");
  const [status2, setStatus2] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");

  function formatAddress(address: string): string {
    const prefix = address.slice(0, 4);
    const suffix = address.slice(-8);
    return `${prefix}...${suffix}`;
  }

  async function getData() {
    const res = await fetch(
      "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    const result = data.data;

    setAsset1(result[0].asset);
    setAmount1(result[0].amount);
    setRefearn1(result[0].referral_earnings);
    setUser1(formatAddress(result[0].user));

    setAsset2(result[1].asset);
    setAmount2(result[1].amount);
    setRefearn2(result[1].referral_earnings);
    setUser2(formatAddress(result[1].user));
    setStatus1(result[0].state);
    setStatus2(result[1].state);
    setType1(result[0].type);
    setType2(result[1].type);

    return data;
  }
  useEffect(() => {
    getData();
  }, []);
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
                    <p className="text-left">{asset1}</p>
                    <div className="flex gap-2">
                      <p className="text-xs text-gray-400">{type1}</p>
                      <Image src={AVAX} alt="" />
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 flex-col">
                  <p>{amount1} BNB</p>
                  <p className="text-xs text-gray-400">{status1}</p>
                </td>
                <td className="px-6 py-4">{user1}</td>
                <td className="px-6 py-4 flex-col">
                  <p>{refearn1} BNB</p>
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
                    <p className="text-left">{asset2}</p>
                    <div className="flex gap-2">
                      <p className="text-xs text-gray-400">{type2}</p>
                      <Image src={AVAX} alt="" />
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 flex-col">
                  <p>{amount2} BNB</p>
                  <p className="text-xs text-gray-400">{status2}</p>
                </td>
                <td className="px-6 py-4">{user2}</td>
                <td className="px-6 py-4 flex-col">
                  <p>{refearn2} BNB</p>
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
