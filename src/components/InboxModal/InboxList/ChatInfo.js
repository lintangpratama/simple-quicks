import React from "react";

export default function ChatInfo({ chatTitle, person, message, date, onClick }) {
  return (
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
        <h2 className="text-xs text-floating-dark font-bold mt-0.5">
          {person} :
        </h2>
        <p className="text-xs text-floating-dark">{message}</p>
      </div>
    </div>
  );
}
