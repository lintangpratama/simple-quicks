import React, { useState } from "react";
import ArrowUp from "@Assets/icons/expand_more_24px.svg";
import ArrowDown from "@Assets/icons/expand_more_24px-1.svg";
import ClockIcon from "@Assets/icons/schedule_24px.svg";
import PencilIcon from "@Assets/icons/edit_24px.svg";
import MoreIcon from "@Assets/icons/more_horiz_24px.svg";

export default function Task() {
  const [checked, setChecked] = useState(false);
  const [clickDetail, setClickDetail] = useState(false);
  const [moreClicked, setMoreClicked] = useState(false);
  const [value, setValue] = useState({
    date: "2021-06-12",
    description:
      "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
  });

  return (
    <div className="relative mx-8 my-6">
      <div className="flex w-full border-b border-[#828282] pb-6">
        <input
          type="checkbox"
          value={checked}
          onClick={() => setChecked(!checked)}
          className="self-start cursor-pointer"
        />
        <div className="w-full ml-[22.5px]">
          <div className="flex justify-between">
            <h1
              className={
                checked
                  ? "text-sm font-bold text-[#828282] line-through max-w-[300px]"
                  : "text-sm font-bold text-floating-dark max-w-[300px]"
              }
            >
              Close off Case #012920- RODRIGUES, Amiguel
            </h1>
            <div className="flex">
              <p className="text-xs text-[#EB5757] mr-[20px]">2 Days Left</p>
              <p className="text-xs mr-[15px]">{value.date}</p>
              {clickDetail ? (
                <img
                  src={ArrowUp}
                  className="mr-[15px] cursor-pointer"
                  onClick={() => setClickDetail(!clickDetail)}
                  alt="arrow-up"
                  width={10}
                />
              ) : (
                <img
                  src={ArrowDown}
                  onClick={() => setClickDetail(!clickDetail)}
                  className="mr-[15px] cursor-pointer"
                  alt="arrow-down"
                  width={10}
                />
              )}
              <div className="relative self-center">
                <img
                  src={MoreIcon}
                  alt="more-icon"
                  className="cursor-pointer"
                  width={14}
                  onClick={() => setMoreClicked(!moreClicked)}
                />
                {moreClicked ? (
                  <div className="absolute top-4 right-0 rounded-md border z-50 w-[126px] border-[#BDBDBD] bg-white">
                    <p className="text-[#EB5757] px-[18px] text-sm py-[8px] cursor-pointer">
                      Delete
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {clickDetail ? (
            <div>
              <div className="flex mt-[15px]">
                <img
                  src={ClockIcon}
                  width={16}
                  alt="clock-icon"
                  className="mr-[16px]"
                />
                <input
                  type="date"
                  value={value.date}
                  onChange={(e) => setValue({ ...value, date: e.target.value })}
                  className="text-sm w-[193px] text-floating-dark flex bg-white border justify-center items-center border-floating-dark rounded px-3 py-1.5"
                />
              </div>
              <div className="flex mt-[10px] items-start">
                <img
                  src={PencilIcon}
                  width={16}
                  alt="pencil-icon"
                  className="mr-[16px]"
                />
                <textarea
                  value={value.description}
                  onChange={(e) =>
                    setValue({ ...value, description: e.target.value })
                  }
                  className="text-sm text-floating-dark w-full rounded leading-4"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
