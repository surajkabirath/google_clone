"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const SearchHeaderOptions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const selectTab = (tab) => {
    let path;
    switch (tab) {
      case "Images":
        path = "image";
        break;
      case "Shopping":
        path = "shopping";
        break;
      case "Videos":
        path = "videos";
        break;
      case "News":
        path = "news";
        break;
        case "Webs":
          path = "webs";
          break;
      case "Maps":
        path = "maps";
        break;
      case "Finance":
        path = "finance";
        break;
      case "Books":
        path = "books";
        break;
      case "All":
      default:
        path = "web";
    }

    router.push(`/search/${path}?searchTerm=${searchTerm}`);
    setShowMoreOptions(false); // Close the pop-up after selecting an option
  };

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.more-options-container')) {
      setShowMoreOptions(false);
    }
  };

  useEffect(() => {
    if (showMoreOptions) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMoreOptions]);

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm relative">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <p>Images</p>
      </div>
      <div
        onClick={() => selectTab("Shopping")}
        className={`flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/shopping" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <p>Shopping</p>
      </div>
      <div
        onClick={() => selectTab("Videos")}
        className={`flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/videos" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <p>Videos</p>
      </div>
      <div
        onClick={() => selectTab("News")}
        className={`flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/news" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <p>News</p>
      </div>
      <div
        className={`relative flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] cursor-pointer pb-3 px-2 more-options-container`}
        onClick={toggleMoreOptions}
      >
        <p className="flex justify-center">
          <BsThreeDotsVertical className="mt-1 mr-1" />
          More
        </p>
        {showMoreOptions && (
          <div className="absolute top-full mt-1 bg-[#232425]   p-2 w-13 z-20 more-options-container">
            <div
              onClick={() => selectTab("Maps")}
              className="flex items-center  space-x-1 text-[#9aa0a6] cursor-pointer p-2 hover:bg-[#303134] "
            >
              <p>Maps</p>
            </div>
            <div
              onClick={() => selectTab("Webs")}
              className="flex items-center space-x-1 text-[#9aa0a6] cursor-pointer p-2 hover:bg-[#303134]"
            >
              <p>Web</p>
            </div>
            <div
              onClick={() => selectTab("Finance")}
              className="flex items-center space-x-1 text-[#9aa0a6] cursor-pointer p-2 hover:bg-[#303134]"
            >
              <p>Finance</p>
            </div>
            <div
              onClick={() => selectTab("Books")}
              className="flex items-center space-x-1 text-[#9aa0a6] cursor-pointer p-2 hover:bg-[#303134]"
            >
              <p>Books</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchHeaderOptions;

