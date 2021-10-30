import React from "react";
import StyledMessageTitle from "./StyledMessage";

const MessageTitle = (props) => {
  return (
    <StyledMessageTitle messageType={props.messageType}>
      {props.children}
    </StyledMessageTitle>
  );
};

export default MessageTitle;
