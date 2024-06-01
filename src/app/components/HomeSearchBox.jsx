"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { SiGooglelens } from "react-icons/si";
const HomeSearchBox = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  
  const handleRandomSearch = async (e) => {
    e.preventDefault();
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word?number=10")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-500 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3 cursor-pointer" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none bg-transparent text-white"
        />
        <MdKeyboardVoice className="text-lg text-[#e8e8e8] cursor-pointer" />
        <SiGooglelens className="text-lg ml-5 text-[#e8e8e8] cursor-pointer" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className="bg-[#303134] rounded-md text-sm text-white  hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="bg-[#303134] rounded-md text-sm text-white   hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
          onClick={handleRandomSearch}
        >
          {randomSearchLoading ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
    </div>
  );
};

export default HomeSearchBox;
