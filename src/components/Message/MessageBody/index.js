import React from "react";
import StyledMessageBody from "./StyledMessageBody";
import PropTypes from "prop-types";

const MessageBody = (props) => {
  return <StyledMessageBody {...props}>{props.children}</StyledMessageBody>;
};

MessageBody.propTypes = {
  className: PropTypes.oneOf(["message", "form", "information"]),
};

MessageBody.defaultProps = {
  className: "message",
};

export default MessageBody;
