import React from "react";
import InboxIconColored from "@Assets/icons/question_answer_24px-1.svg";
import InboxIconWhite from "@Assets/icons/question_answer_24px.svg";
import { inboxModalTransitionConfig } from "@Config/springTransitions";
import { useTransition, animated } from "@react-spring/web";
import InboxModal from "../InboxModal";

export default function Inbox({
  isActive,
  taskIsActive,
  closeInbox,
  openInbox,
}) {
  const inboxModalTransition = useTransition(
    isActive,
    inboxModalTransitionConfig
  );

  if (isActive) {
    return (
      <div className="flex flex-col">
        {inboxModalTransition(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className="fixed w-[734px] max-h-[737px] min-h-[565px] h-full bottom-[83px] border border-modal rounded right-0 bg-white"
              >
                <InboxModal closeInbox={closeInbox} />
              </animated.div>
            )
        )}
        <div className="relative flex w-[68px] h-[68px] mr-[15px]">
          <div
            className="w-[68px] h-[68px] bg-floating-dark rounded-full cursor-pointer z-10"
            onClick={closeInbox}
          ></div>
          <div className="flex absolute left-[15px] justify-center transition-all items-center w-[68px] h-[68px] bg-inbox rounded-full cursor-pointer z-50">
            <img src={InboxIconWhite} alt="inbox-icon-white" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative mr-[26px]" onClick={openInbox}>
        {taskIsActive ? null : (
          <p className="absolute text-white -top-[36px] left-[20%] text-sm">
            Inbox
          </p>
        )}
        <div className="w-[60px] h-[60px] bg-white rounded-full cursor-pointer">
          <div className="flex justify-center items-center h-full">
            <img src={InboxIconColored} alt="inbox-icon-colored" />
          </div>
        </div>
      </div>
    );
  }
}
