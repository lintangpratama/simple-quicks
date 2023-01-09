import React from "react";
import BackIcon from "@Assets/icons/arrow_back_24px.svg";
import CloseIcon from "@Assets/icons/close_24px.svg";

export default function Header({ setPath, closeInbox, title, participants }) {
  return (
    <div className={participants > 0 ? "fixed flex items-center justify-between w-full border-b px-8 py-6 bg-white border-[#BDBDBD] z-[99]" : "fixed flex items-center py-8 justify-between w-full border-b px-8 bg-white border-[#BDBDBD] z-[99]"}>
      <div className="flex">
        <img
          src={BackIcon}
          onClick={() => setPath("/")}
          alt="back-icon"
          className="cursor-pointer"
        />
        <div className="ml-[19px] flex flex-col justify-center">
          <h1 className="text-base text-blue-main font-bold leading-4 my-auto">
            {title}
          </h1>
          {participants > 0 ? (
            <p className="text-xs text-floating-dark mt-[6px]">
              {participants} Participants
            </p>
          ) : null}
        </div>
      </div>
      <img
        src={CloseIcon}
        alt="close-icon"
        onClick={() => closeInbox()}
        className="justify-self-auto cursor-pointer"
      />
    </div>
  );
}
