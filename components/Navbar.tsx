import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="bg-[#3772FF] fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center text-white text-center justify-center font-semibold mx-auto h-8">
          <h2>Lorem Ipsum is simply dummy text of the printing</h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
