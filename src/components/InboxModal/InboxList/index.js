import React, { useEffect, useState } from "react";
import Container from "../../Container";
import PersonLogo from "./PersonLogo";
import Loader from "../../Loader";
import SearchInbox from "./SearchInbox";
import ChatInfo from "./ChatInfo";
import ChatSupport from "./ChatSupport";

export default function InboxList({ path, setPath }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="h-full overflow-y-scroll mb-24">
      <Container>
        <SearchInbox />
        {isLoading ? (
          <Loader text="Loading Chats ..." />
        ) : (
          <div>
            <div className="flex py-[22px] border-b border-[#828282]">
              <PersonLogo />
              <ChatInfo
                onClick={() => setPath("/chat")}
                chatTitle="109220-Naturalization"
                person="Cameron Phillips"
                message="Let's check this out!"
                date="January 1, 2021 19:10"
              />
            </div>
            <ChatSupport
              onClick={() => setPath("/chat-support")}
              chatTitle="FastVisa Support"
              message="Hey there! Welcome to your inbox."
              date="01/06/2021 12:29"
            />
          </div>
        )}
      </Container>
    </div>
  );
}
