import React from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "163f2636-9de0-46fe-9c5d-cf5b7aa528ee",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <PrettyChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
