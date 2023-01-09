import React from "react";
import SearchIcon from "@Assets/icons/search_24px-black.svg";

export default function SearchInbox() {
  return (
    <div className="flex w-full py-[10px] px-[58.82px] border border-input-brd rounded">
      <input
        type="text"
        placeholder="Search"
        className="w-full text-sm mr-5 h-[12px] placeholder:text-[#333]"
      />
      <img src={SearchIcon} width={12} height={12} alt="search-icon" />
    </div>
  );
}
