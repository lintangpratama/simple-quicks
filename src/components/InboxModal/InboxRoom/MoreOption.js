import React from "react";

export default function MoreOption({ closeModal }) {
  return (
    <div
      className="absolute top-4 rounded-md border z-50 w-[126px] border-[#BDBDBD] bg-white"
      onBlur={closeModal}
    >
      <p className="text-blue-main px-[18px] text-sm py-[8px] border-b border-[#BDBDBD] cursor-pointer">
        Edit
      </p>
      <p className="text-[#EB5757] px-[18px] text-sm py-[8px] cursor-pointer">
        Delete
      </p>
    </div>
  );
}
