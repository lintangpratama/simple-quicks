import React, { useState } from "react";
import InboxList from "./InboxList";
import InboxRoom from "./InboxRoom";
import InboxSupport from "./InboxRoom/InboxSupport";

export default function InboxModal({ closeInbox }) {
  const [path, setPath] = useState("/");

  if (path === "/") {
    return <InboxList path={path} setPath={setPath} />;
  } else if (path === "/chat") {
    return <InboxRoom path={path} setPath={setPath} closeInbox={closeInbox} />;
  } else if (path === "/chat-support") {
    return <InboxSupport path={path} setPath={setPath} closeInbox={closeInbox} />;
  }
}
