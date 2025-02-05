import React from "react";
import { SiCodechef } from "react-icons/si";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-center mx-auto my-5 p-4 border border-gray-600 shadow-lg rounded-lg bg-gray-800 transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-2xl">
      <div className="flex flex-row items-center justify-start text-4xl w-full">
        <SiCodechef className="text-gray-400 text-6xl transition-all duration-300 ease-in-out transform hover:rotate-[360deg]" />
        <h1 className="font-extrabold text-gray-200 ml-3 text-xl sm:text-3xl transition-all duration-300 ease-in-out hover:text-white">
          CHEF-X
        </h1>
      </div>
    </header>
  );
};

export default Header;
