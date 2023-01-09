import React from "react";
import PersonIconWhite from "@Assets/icons/person_24px.svg";
import PersonIconGray from "@Assets/icons/person_24px_gray.svg";

export default function PersonLogo() {
  return (
    <div className="relative flex w-[51px] h-[34px] mr-[17px]">
      <div className="flex justify-center items-center w-[34px] h-[34px] bg-[#E0E0E0] rounded-full cursor-pointer z-10">
        <img src={PersonIconGray} width={12} height={12} alt="person-icon" />
      </div>
      <div className="flex absolute left-[17px] justify-center items-center w-[34px] h-[34px] bg-blue-main rounded-full cursor-pointer z-50">
        <img src={PersonIconWhite} width={12} height={12} alt="person-icon" />
      </div>
    </div>
  );
}
