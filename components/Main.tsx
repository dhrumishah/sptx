import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Home from "./Home";
import CustomLink from "./CustomLink";

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
        <Home />
        <CustomLink />
      </div>
    </div>
  );
};

export default Main;
