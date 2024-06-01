import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { SiGooglelens } from "react-icons/si";
const HomeSearchBox = () => {
  return (
    <div className="flex flex-col items-center">
      <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-500 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none bg-transparent"
        />
        <MdKeyboardVoice className="text-lg text-[#e8e8e8]" />
        <SiGooglelens className="text-lg ml-5 text-[#e8e8e8]" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button className="bg-[#303134] rounded-md text-sm text-white  hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow">
          Google Search
        </button>
        <button className="bg-[#303134] rounded-md text-sm text-white   hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm">
          I am Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default HomeSearchBox;
