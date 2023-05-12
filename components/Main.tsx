import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Home from "./Home";

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Home />
    </div>
  );
};

export default Main;
