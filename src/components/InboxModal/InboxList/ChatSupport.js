import React from "react";

export default function ChatSupport({ chatTitle, message, date, onClick }) {
  return (
    <div className="flex py-[22px]">
      <div className="flex w-[51px] justify-center mr-[17px]">
        <div className="flex justify-center items-center w-[34px] h-[34px] text-white bg-blue-main rounded-full cursor-pointer z-50">
          F
        </div>
      </div>
      <div className="flex cursor-pointer" onClick={onClick}>
        <div className="max-w-[415px]">
          <div className="flex">
            <h1 className="text-sm text-blue-main font-bold leading-4 mr-[17px]">
              {chatTitle}
            </h1>
            <div>
              <p className="text-xs text-floating-dark">{date}</p>
            </div>
          </div>
          <p className="text-xs text-floating-dark mt-2 leading-3">{message}</p>
        </div>
      </div>
    </div>
  );
}
