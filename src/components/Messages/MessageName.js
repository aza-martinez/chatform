import React, { useState } from "react";
import useFullName from "../../hooks/useFullName";
import Message from "../Message";

const MessageName = () => {
  const { fullName } = useFullName();

  if (!fullName) return null;

  const name = fullName();

  return (
    <Message messageType="information">
      <p>{name}</p>
    </Message>
  );
};

export default MessageName;
