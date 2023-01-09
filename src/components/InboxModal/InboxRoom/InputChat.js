import React from "react";

export default function InputChat() {
  return (
    <div className="fixed bottom-0 bg-white w-full z-[99] px-[20px] pb-[20px] pt-[12px] flex">
      <input
        type="text"
        placeholder="Type a new message"
        className="border w-full text-floating-dark placeholder:text-[#333333] border-[#828282] rounded-md px-[16px] py-[13px] h-[44px]"
      />
      <button className="bg-[#2F80ED] h-[44px] w-[84px] ml-[13px] font-bold text-white rounded-md mx-auto">
        Send
      </button>
    </div>
  );
}
