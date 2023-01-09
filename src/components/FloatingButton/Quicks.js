import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import QuicksIcon from "@Assets/icons/quicks-icon.svg";
import Inbox from "./Inbox";
import Task from "./Task";
import {
  inboxTransitionConfig,
  taskTransitionConfig,
} from "@Config/springTransitions";

export default function Quicks() {
  const [isActive, setIsActive] = useState(false);
  const [inboxActive, setInboxActive] = useState(false);
  const [taskActive, setTaskActive] = useState(false);

  const taskTransitions = useTransition(isActive, taskTransitionConfig);
  const inboxTransitions = useTransition(isActive, inboxTransitionConfig);

  return (
    <div className="fixed right-[34px] bottom-[27px]">
      <div
        className={
          taskActive
            ? "flex flex-row-reverse items-center"
            : "flex items-center"
        }
      >
        {taskTransitions(
          (style, item) =>
            item && (
              <animated.div style={style}>
                <Task
                  isActive={taskActive}
                  inboxIsActive={inboxActive}
                  openTask={() => {
                    setTaskActive(true);
                    setInboxActive(false);
                  }}
                  closeTask={() => {
                    setTaskActive(false);
                  }}
                />
              </animated.div>
            )
        )}
        {inboxTransitions(
          (style, item) =>
            item && (
              <animated.div style={style}>
                <Inbox
                  isActive={inboxActive}
                  taskIsActive={taskActive}
                  openInbox={() => {
                    setInboxActive(true);
                    setTaskActive(false);
                  }}
                  closeInbox={() => {
                    setInboxActive(false);
                  }}
                />
              </animated.div>
            )
        )}
        {inboxActive === false && taskActive === false ? (
          <div
            className="flex justify-center transition-all items-center w-[68px] h-[68px] bg-blue-main rounded-full cursor-pointer z-50"
            onClick={() => setIsActive(!isActive)}
          >
            <img src={QuicksIcon} width={18} height={32} alt="quicks-icon" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
