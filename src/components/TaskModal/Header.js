import React, { useState } from "react";
import BottomArrow from "@Assets/icons/expand_more_24px-1.svg";

export default function Header() {
  const [optionClicked, setOptionClicked] = useState(false);
  const [optionValue, setOptionValue] = useState("");
  return (
    <div className="fixed justify-between flex px-8 py-3.5 bg-white z-50 w-full">
      <div className="relative w-3/4 ml-14">
        <button
          onClick={() => setOptionClicked(!optionClicked)}
          className="flex bg-white border justify-center items-center border-floating-dark h-[44px] px-4 ml-[13px] font-bold text-floating-dark rounded-md mx-auto"
        >
          {optionValue === "" ? "My Tasks" : optionValue}
          <img src={BottomArrow} alt="bottom-arrow" className="ml-3" />
        </button>
        {optionClicked ? (
          <div className="absolute top-4 rounded-md border z-50 w-[288px] border-[#BDBDBD] bg-white">
            <p
              onClick={() => {
                setOptionClicked(!optionClicked);
                setOptionValue("Personal Errands");
              }}
              className="text-floating-dark font-bold px-[18px] text-sm py-[8px] border-b border-[#BDBDBD] cursor-pointer"
            >
              Personal Errands
            </p>
            <p
              onClick={() => {
                setOptionClicked(!optionClicked);
                setOptionValue("Urgent To-Do");
              }}
              className="text-floating-dark font-bold px-[18px] text-sm py-[8px] cursor-pointer"
            >
              Urgent To-Do
            </p>
          </div>
        ) : null}
      </div>
      <button className="bg-[#2F80ED] h-[44px] w-[100px] ml-auto font-bold text-white rounded-md">
        New Task
      </button>
    </div>
  );
}
