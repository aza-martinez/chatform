import React, { useContext } from "react";
import MessageFormName from "../Messages/MessageFormName";
import Button from "../Button";
import Message from "../Message";
import StyledMessageList from "./StyledMessageList";
import MessageName from "../Messages/MessageName";
import MessageContext from "../../context/MessageContext";

const MessagesList = () => {
  const { step } = useContext(MessageContext);

  return (
    <StyledMessageList>
      <MessageFormName />
      {step === 2 && (
        <React.Fragment>
          <MessageName />
          <Message>
            <Button>Iniciar</Button>
          </Message>
        </React.Fragment>
      )}
    </StyledMessageList>
  );
};

export default MessagesList;
