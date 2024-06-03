"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SearchHeaderOptions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
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
      case "All":
      default:
        path = "web";
    }

    router.push(`/search/${path}?searchTerm=${searchTerm}`);
  };

  return (
    <div>
      {" "}
      <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
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
          onClick={() => selectTab("shopping")}
          className={`flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] active:text-blue-500 cursor-pointer pb-3 px-2 ${
            pathname === "/search/shopping" && "!text-blue-600 !border-blue-600"
          }`}
        >
          <p>Shopping</p>
        </div>
        <div
          onClick={() => selectTab("videos")}
          className={`flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] active:text-blue-500 cursor-pointer pb-3 px-2 ${
            pathname === "/search/videos" && "!text-blue-600 !border-blue-600"
          }`}
        >
          <p>Videos</p>
        </div>
        <div
          onClick={() => selectTab("news")}
          className={`flex items-center space-x-1 border-b-4 border-transparent text-[#9aa0a6] active:text-blue-500 cursor-pointer pb-3 px-2 ${
            pathname === "/search/news" && "!text-blue-600 !border-blue-600"
          }`}
        >
          <p>News</p>
        </div>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
