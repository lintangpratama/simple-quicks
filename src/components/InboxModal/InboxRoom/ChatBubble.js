import React, { useState } from "react";
import MoreIcon from "@Assets/icons/more_horiz_24px.svg";
import MoreOption from "./MoreOption";

export default function ChatBubble({ sender, message, time }) {
  const [moreActive, setMoreActive] = useState(false);
  if (sender === "You") {
    return (
      <div className="flex flex-col w-full items-end mb-3">
        <h1 className="text-sm font-bold text-[#9B51E0] mb-1">You</h1>
        <div className="relative flex">
          {moreActive ? (
            <MoreOption closeModal={() => setMoreActive(false)} />
          ) : null}
          <img
            src={MoreIcon}
            alt="more-icon"
            onClick={() => setMoreActive(!moreActive)}
            className="self-start mt-1.5 mr-[8px] cursor-pointer"
          />
          <div className="max-w-[518px] p-[10px] bg-self-chat rounded">
            <p className="text-sm leading-[18px] text-floating-dark">
              {message}
            </p>
            <p className="text-xs mt-2 text-floating-dark">{time}</p>
          </div>
        </div>
      </div>
    );
  } else if (sender === "Mary Hilda") {
    return (
      <div className="flex flex-col w-full items-start mb-3">
        <h1 className={`text-sm font-bold text-[#E6A443] mb-1`}>{sender}</h1>
        <div className="relative flex flex-row-reverse">
          {moreActive ? (
            <MoreOption closeModal={() => setMoreActive(false)} />
          ) : null}
          <img
            src={MoreIcon}
            alt="more-icon"
            onClick={() => setMoreActive(!moreActive)}
            className="self-start mt-1.5 mx-[8px] cursor-pointer"
          />
          <div className={`max-w-[518px] p-[10px] bg-chat-2 rounded`}>
            <p className="text-sm leading-[18px] text-floating-dark">
              {message}
            </p>
            <p className="text-xs mt-2 text-floating-dark">19:32</p>
          </div>
        </div>
      </div>
    );
  } else if (sender === "FastVisa Support") {
    return (
      <div className="flex flex-col w-full items-start mb-3">
        <h1 className={`text-sm font-bold text-blue-main mb-1`}>{sender}</h1>
        <div className="relative flex flex-row-reverse">
          <div className={`max-w-[518px] p-[10px] bg-[#F8F8F8] rounded`}>
            <p className="text-sm leading-[18px] text-floating-dark">
              {message}
            </p>
            <p className="text-xs mt-2 text-floating-dark">19:32</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full items-start mb-3">
        <h1 className={`text-sm font-bold text-[#43B78D] mb-1`}>{sender}</h1>
        <div className="flex relative flex-row-reverse">
          {moreActive ? (
            <MoreOption closeModal={() => setMoreActive(false)} />
          ) : null}
          <img
            src={MoreIcon}
            alt="more-icon"
            onClick={() => setMoreActive(!moreActive)}
            className="self-start mt-1.5 mx-[8px] cursor-pointer"
          />
          <div className={`max-w-[518px] p-[10px] bg-[#D2F2EA] rounded`}>
            <p className="text-sm leading-[18px] text-floating-dark">
              {message}
            </p>
            <p className="text-xs mt-2 text-floating-dark">19:32</p>
          </div>
        </div>
      </div>
    );
  }
}
