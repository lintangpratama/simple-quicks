import React, { useState, useEffect } from "react";
import Container from "../../Container";
import Header from "./Header";
import ChatBubble from "./ChatBubble";
import DateGap from "./DateGap";
import NewMessageGap from "./NewMessageGap";
import InputChat from "./InputChat";
import LoaderChat from "../../Loader/LoaderChat";

export default function InboxRoom({ path, setPath, closeInbox }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="h-full overflow-y-scroll">
      <Header title="I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]" participants={3} setPath={setPath} closeInbox={closeInbox} />
      <div className="h-[78px] w-full"></div>
      <Container>
        <ChatBubble
          sender="You"
          message="No worries! It will be completed ASAP. I've asked him yesterday."
          time="19:32"
        />
        <DateGap date="Today June 09. 2021" />
        <ChatBubble
          sender="Mary Hilda"
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
        />
        <ChatBubble
          sender="You"
          message="Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary."
          time="19:32"
        />
        <ChatBubble
          sender="Mary Hilda"
          message="Sure thing, Claren."
          time="19:32"
        />
        <NewMessageGap />
        <ChatBubble
          sender="Obaidullah Amarkhil"
          message="Morning. I'll try to do them. Thanks."
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
