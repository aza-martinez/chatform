import React from "react";
import Avatar from "../Avatar";
import MessageBody from "./MessageBody";
import MessageTitle from "./MessageTitle";
import StyledMessage from "./StyledMessage";
import PropTypes from "prop-types";

const Message = (props) => {
  return (
    <StyledMessage messageType={props.messageType}>
      {props.messageType === "form" && <Avatar />}
      <MessageBody className={props.messageType}>
        {props.title && <MessageTitle>{props.title}</MessageTitle>}
        {props.children}
      </MessageBody>
    </StyledMessage>
  );
};

Message.propTypes = {
  messageType: PropTypes.oneOf(["message", "form", "information", ""]),
};

Message.defaultProps = {
  messageType: "",
};

export default Message;
