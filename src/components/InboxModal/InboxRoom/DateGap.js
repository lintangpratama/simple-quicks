import React from "react";

export default function DateGap({ date }) {
  return (
    <div className="flex items-center my-5">
      <span className="border-b border-floating-dark w-full" />
      <h1 className="text-[#4F4F4F] font-bold w-full text-center">{date}</h1>
      <span className="border-b border-floating-dark w-full" />
    </div>
  );
}
