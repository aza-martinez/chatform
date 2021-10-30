import React from "react";
import ChatHeader from "../ChatHeader/index.js";
import MessagesList from "../MessagesList/index.js";
import StyledChat from "./StyledChat";

const Chat = () => {
  return (
    <StyledChat>
      <ChatHeader />
      <MessagesList />
    </StyledChat>
  );
};

export default Chat;
