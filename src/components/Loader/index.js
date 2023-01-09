import React from "react";

export default function Loader({ text }) {
  return (
    <div className="flex absolute h-full w-full flex-col items-center top-1/3 mb-10">
      <div className="loader"></div>
      <p className="mt-6 text-sm text-[#4F4F4F] font-bold">{text}</p>
    </div>
  );
}
