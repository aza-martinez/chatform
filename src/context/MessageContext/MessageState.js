import React, { useReducer } from "react";
import MessageContext from "./index";
import MessageReducer from "./MessageReducer";

const MessageState = ({ children }) => {
  const initialState = {
    step: 1,
  };

  const [state, dispatch] = useReducer(MessageReducer, initialState);

  const setStep = (step) => {
    dispatch({
      type: "SET_STEP",
      payload: step,
    });
  };

  return (
    <MessageContext.Provider
      value={{
        step: state.step,
        setStep,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageState;
