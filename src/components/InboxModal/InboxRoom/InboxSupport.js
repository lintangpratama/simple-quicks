import React, { useState, useEffect } from "react";
import Container from "../../Container";
import Header from "./Header";
import ChatBubble from "./ChatBubble";
import InputChat from "./InputChat";
import LoaderChat from "../../Loader/LoaderChat";

export default function InboxSupport({ path, setPath, closeInbox }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="h-full overflow-y-scroll">
      <Header
        title="FastVisa Support"
        participants={0}
        setPath={setPath}
        closeInbox={closeInbox}
      />
      <div className="h-[78px] w-full"></div>
      <Container>
        <ChatBubble
          sender="FastVisa Support"
          message="Hey there. Welcome to your inbox! Contact us for more information and
          help about anything! We'll send you a response as soon as possible."
          time="19:32"
        />
        <ChatBubble
          sender="You"
          message="Hi, I need help with something can you help me ?"
          time="19:32"
        />
      </Container>
      <div className="h-[170px] w-full"></div>
      {isLoading ? (
        <div className="fixed bottom-[75px] left-1/2 -translate-x-1/2 rounded-md w-[690px] bg-[#E9F3FF] z-[99] p-4 flex">
          <LoaderChat />
          <p className="text-sm font-bold ml-5 text-floating-dark">
            Please wait while we connect you with one of our team ...
          </p>
        </div>
      ) : null}

      <InputChat />
    </div>
  );
}
