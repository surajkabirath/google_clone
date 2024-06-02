"use client";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { SiGooglelens } from "react-icons/si";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBoxInside = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-900 rounded-full shadow-lg px-6 py-2 ml-10 mr-5 flex-grow max-w-3xl items-center bg-[#303134]"
    >
      <input
        type="text"
        className="w-full focus:outline-none bg-transparent"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2 
        className="text-2xl text-gray-500  cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill fill="#4285f4" cx="144.07" cy="144" r="16" className="hidden sm:inline-flex text-4xl  border-l-2   mr-4 pl-4" />
      <SiGooglelens 
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer mr-4"
        onClick={handleSubmit}
      />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SearchBoxInside;
