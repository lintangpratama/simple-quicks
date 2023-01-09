import React from "react";
import TaskIconColored from "@Assets/icons/chrome_reader_mode_24px.svg";
import TaskIconWhite from "@Assets/icons/chrome_reader_mode_24px-1.svg";
import { inboxModalTransitionConfig } from "@Config/springTransitions";
import { useTransition, animated } from "@react-spring/web";
import TaskModal from "../TaskModal";

export default function Task({ isActive, inboxIsActive, openTask, closeTask }) {
  const inboxModalTransition = useTransition(
    isActive,
    inboxModalTransitionConfig
  );
  if (isActive) {
    return (
      <div className="relative flex w-[68px] h-[68px] mr-[15px]">
        {inboxModalTransition(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className="fixed w-[734px] max-h-[737px] min-h-[550px] h-full bottom-[83px] border border-modal rounded right-0 bg-white"
              >
                <TaskModal />
              </animated.div>
            )
        )}
        <div
          className="w-[68px] h-[68px] bg-floating-dark rounded-full cursor-pointer z-10"
          onClick={closeTask}
        ></div>
        <div className="flex absolute left-[15px] justify-center transition-all items-center w-[68px] h-[68px] bg-task rounded-full cursor-pointer z-50">
          <img src={TaskIconWhite} alt="inbox-icon-white" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative mr-[26px]" onClick={openTask}>
        {inboxIsActive ? null : (
          <p className="absolute text-white -top-[36px] left-[25%] text-sm">
            Task
          </p>
        )}
        <div className="w-[60px] h-[60px] bg-white rounded-full cursor-pointer">
          <div className="flex justify-center items-center h-full">
            <img src={TaskIconColored} alt="task-icon-colored" />
          </div>
        </div>
      </div>
    );
  }
}
