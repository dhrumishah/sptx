import React from "react";
import Profile from "./assets/profile.png";
import Menu from "./assets/Menu.svg";
import Image from "next/image";
import Home from "./assets/Home.png";
import Sec1 from "./assets/sec-1.png";
import Sec2 from "./assets/sec-2.png";
import Sec3 from "./assets/sec-3.png";
import Sec4 from "./assets/sec-4.png";
import Sec5 from "./assets/sec.png";
import Sec6 from "./assets/sec-6.png";
import Sec7 from "./assets/sec-7.png";
import Sec8 from "./assets/sec-8.png";
import Docs from "./assets/doc.png";
import Network from "./assets/network.png";
import Toggle from "./assets/toggle.png";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-8"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 border-r border-gray-700  overflow-y-auto bg-black">
          <a href="" className="flex items-center pl-2.5 mb-5">
            <Image
              src={Profile}
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Dhrumi
            </span>
            <Image
              src={Menu}
              width={30}
              height={30}
              alt="Menu"
              className="ml-12"
            />
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Home} alt="home" />
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Sec1} alt="sec-1" />

                <span className="flex-1 ml-3 whitespace-nowrap">Section 1</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Sec2} alt="sec-2" />

                <span className="flex-1 ml-3 whitespace-nowrap">Section 2</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Sec3} alt="sec-3" />

                <span className="flex-1 ml-3 whitespace-nowrap">Section 3</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Sec4} alt="sec-4" />

                <span className="flex-1 ml-3 whitespace-nowrap">Section 4</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Sec5} alt="sec-5" />

                <span className="flex-1 ml-3 whitespace-nowrap">Section</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Sec6} alt="sec-6" />

                <span className="flex-1 ml-3 whitespace-nowrap">Section 6</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Sec7} alt="sec-7" />

                <span className="flex-1 ml-3 whitespace-nowrap">Section 7</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Sec8} alt="sec-8" />

                <span className="flex-1 ml-3 whitespace-nowrap">Section 8</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-[#353945] hover:text-white"
              >
                <Image src={Docs} alt="Documentation" />

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Documentation
                </span>
              </a>
            </li>
          </ul>
          <div className="mt-[60px] flex-col ">
            <div className="flex gap-2 mb-4">
              <button className="bg-[#353945] text-white rounded-xl p-[6px] text-sm flex gap-[6px]">
                <Image
                  src={Profile}
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                $0.90
              </button>
              <button className="bg-[#A3E3FF] rounded-md text-[#3772FF] px-2 font-bold">
                Buy $XYZ
              </button>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={Network} alt="Network" />
              </div>
              <Image src={Toggle} alt="Toggle" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
